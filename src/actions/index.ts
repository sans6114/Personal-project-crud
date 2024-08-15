import {
  logIn,
  logOut,
  registerUser,
} from './auth';
import { addTask } from './firestore';

export const server = {
    registerUser,
    logOut,
    logIn,
    //firestore
    addTask,
}