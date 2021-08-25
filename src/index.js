import './styles.scss';
import Phaser from 'phaser';

class PlayGame extends Phaser.Scene {
  constructor() {
    super('PlayGame');
  }

  preload() {
    this.load.crossOrigin = true;
    this.load.baseURL = 'https://labs.phaser.io/';
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  }

  create() {
    this.image = this.add.image(400, 300, 'logo');
  }

  update() {
    this.image.rotation += 0.01;
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
      debug: false,
    },
  },
  autoCenter: 1,
  scaleMode: 3,
  scene: PlayGame,
};

const game = new Phaser.Game(config);
