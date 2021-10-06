import { initializeApp } from 'firebase/app'; //eslint-disable-line
import { getDatabase, ref, push, set} from 'firebase/database'; //eslint-disable-line

const firebaseConfig = {
  apiKey: 'AIzaSyA1cx1zT-jBq1vppzHGUzd-Jf4nYxw75Bs',
  authDomain: 'phaser-3-game-94b32.firebaseapp.com',
  projectId: 'phaser-3-game-94b32',
  storageBucket: 'phaser-3-game-94b32.appspot.com',
  messagingSenderId: '544630940225',
  appId: '1:544630940225:web:23302683f7ef4a95c0dcc0',
  measurementId: 'G-BVJF0Z3WE2',
};

const app = initializeApp(firebaseConfig); //eslint-disable-line

const database = getDatabase(app);

const postScore = (data) => {
  const postListRef = ref(database, 'scores');

  const newPostRef = push(postListRef);

  set(newPostRef, data);
};

export default postScore;