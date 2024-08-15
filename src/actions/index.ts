import {
  logIn,
  logOut,
  registerUser,
} from './auth';
import {
  addTask,
  getTasks,
} from './firestore';

export const server = {
    registerUser,
    logOut,
    logIn,
    //firestore
    getTasks,
    addTask,
}