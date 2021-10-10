import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, set, push,
} from 'firebase/database';
import globalState from './globalState.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA1cx1zT-jBq1vppzHGUzd-Jf4nYxw75Bs',
  authDomain: 'phaser-3-game-94b32.firebaseapp.com',
  databaseURL: 'https://phaser-3-game-94b32-default-rtdb.firebaseio.com',
  projectId: 'phaser-3-game-94b32',
  storageBucket: 'phaser-3-game-94b32.appspot.com',
  messagingSenderId: '544630940225',
  appId: '1:544630940225:web:0a595922080305f6c0dcc0',
  measurementId: 'G-B6L6NBNLW7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const postScore = (score) => {
  const db = getDatabase(app);
  const postListRef = ref(db, 'scores');
  const newPostRef = push(postListRef);

  set(newPostRef, { username: globalState.username, score });
};

export default postScore;