import {
  defineAction,
  z,
} from 'astro:actions';
import {
  addDoc,
  collection,
} from 'firebase/firestore';

import { firebase } from '@/firebase/config';

export const addTask = defineAction({
  accept: 'form',
  input: z.object({
    title: z.string().min(1),
    description: z.string().min(1)
  }),
  handler: async ({ title, description }) => {
    try {
      const docRefNew = await addDoc(collection(firebase.db, "tasks"), {
        title: title,
        description: description
      });
      console.log("Document written: ", docRefNew);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    console.log(title, description)
    return { ok: true, msg: 'Task adding' }
  }
})

