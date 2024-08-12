import {
  defineAction,
  z,
} from 'astro:actions';
import {
  type AuthError,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';

import { firebase } from '../../firebase/config';

export const registerUser = defineAction({
    accept: 'form',
    input: z.object({
        name: z.string().min(2),
        email: z.string().min(2),
        password: z.string().min(6),
    }),
    handler: async ({ name, email, password }) => {
console.log('hola')
        try {
            const user = await createUserWithEmailAndPassword(firebase.auth, email, password)
            console.log(user)
            if (!firebase.auth.currentUser) {
                return
            }
            await updateProfile(firebase.auth.currentUser, {
                displayName: name
            })
            //verificacion
            await sendEmailVerification(firebase.auth.currentUser)
            return user
        } catch (error) {
            const firebaseError = error as AuthError
            if (firebaseError.code === 'auth/email-already-in-use') {
                throw new Error('credenciales ya utilizadas, intenta con otras')
            }
        }
        //retorna true si todo sale bien
        return { ok: true, msg: 'Usuario cerrado' }
    }
})

