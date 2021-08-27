import './styles.scss';
import Phaser from 'phaser';

let background;

class StartScreen extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScreen' });
  }

  preload() {
    this.load.image('background', './assets/space-background.png');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.text(230, 50, 'Space Dodger', { fontSize: '42px' }).setOrigin(0.5);
    this.add.text(230, 580, 'Start', { fontSize: '42px' }).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 1;
  }
}

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
  scene: StartScreen,
};

const game = new Phaser.Game(config); //eslint-disable-line
