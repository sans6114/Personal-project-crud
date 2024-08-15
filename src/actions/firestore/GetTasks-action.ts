import { defineAction } from 'astro:actions';
import {
  collection,
  getDocs,
} from 'firebase/firestore';

import { firebase } from '@/firebase/config';

const { db } = firebase


export const getTasks = defineAction({
  accept: 'form',
  handler: async () => {

    try {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      querySnapshot.forEach((task) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(task.id, " => ", task.data());
      });
    } catch (error) {
      console.log(error)
    }

    return { ok: true, msg: 'Task getted' }
  }
})

