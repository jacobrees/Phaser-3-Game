import './styles.scss';
import Phaser from 'phaser';
import MainMenu from './javascript/mainMenu.js';
import GamePlay from './javascript/gamePlay.js';
import LeaderBoard from './javascript/leaderBoard.js';
import GameSettings from './javascript/gameSettings.js';
import GameOver from './javascript/gameOver.js';

const config = {
  type: Phaser.AUTO,
  width: 460,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  autoCenter: 1,
  scaleMode: 3,
  scene: [GamePlay, MainMenu, LeaderBoard, GameSettings, GameOver],
};

const game = new Phaser.Game(config); //eslint-disable-line
