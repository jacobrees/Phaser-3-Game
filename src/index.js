import './styles.scss';
import Phaser from 'phaser';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin.js';
import { initializeApp } from 'firebase/app'; //eslint-disable-line
import MainMenu from './javascript/mainMenu.js';
import GamePlay from './javascript/gamePlay.js';
import LeaderBoard from './javascript/leaderBoard.js';
import GameSettings from './javascript/gameSettings.js';
import GameOver from './javascript/gameOver.js';
import SetUsername from './javascript/setUsername.js';

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

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  dom: {
    createContainer: true,
  },
  plugins: {
    scene: [{
      key: 'rexUI',
      plugin: RexUIPlugin,
      mapping: 'rexUI',
    }],
    global: [{
      key: 'rexInputTextPlugin',
      plugin: InputTextPlugin,
      start: true,
    },
    ],
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 460,
    height: 640,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },

  scene: [SetUsername, GameSettings, GamePlay, MainMenu, LeaderBoard, GameOver],
};

const game = new Phaser.Game(config); //eslint-disable-line
