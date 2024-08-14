import { defineAction } from 'astro:actions';
import {
  collection,
  getDocs,
} from 'firebase/firestore';

import { firebase } from '@/firebase/config';

export const getTasks = defineAction({
    accept: 'form',
    handler: async (arg) => {
 
        const querySnapshot = await getDocs(collection(firebase.db, "tasks"));


        const dataTask = querySnapshot.forEach(task => {
            task.data
        })

      return dataTask
    }
  })
  
  