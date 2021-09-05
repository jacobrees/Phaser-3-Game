import './styles.scss';
import Phaser from 'phaser';
import MainMenu from './javascript/mainMenu.js';
import GamePlay from './javascript/gamePlay.js';
import LeaderBoard from './javascript/leaderBoard.js';

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
  scene: [MainMenu, GamePlay, LeaderBoard],
};

const game = new Phaser.Game(config); //eslint-disable-line
