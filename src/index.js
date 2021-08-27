import './styles.scss';
import Phaser from 'phaser';

class StartScreen extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScreen' });
  }

  preload() {
    this.load.image('background', './assets/space-background.png');
    this.load.spritesheet('moon', './assets/moon.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('earth', './assets/earth.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('mars', './assets/mars.png', { frameWidth: 100, frameHeight: 100 });
  }

  create() {
    this.add.image(230, 320, 'background').setScale(1);

    const moon = this.add.sprite(290, 380, 'moon', 0).setScale(0.65);
    const earth = this.add.sprite(200, 320, 'earth', 0).setScale(1.42);
    const mars = this.add.sprite(370, 170, 'mars', 0).setScale(1);

    this.anims.create({
      key: 'moonSpin',
      frames: this.anims.generateFrameNumbers('moon'),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'earthSpin',
      frames: this.anims.generateFrameNumbers('earth'),
      frameRate: 11,
      repeat: -1,
    });

    this.anims.create({
      key: 'marsSpin',
      frames: this.anims.generateFrameNumbers('mars'),
      frameRate: 10,
      repeat: -1,
    });

    moon.playReverse('moonSpin');
    earth.play('earthSpin');
    mars.playReverse('marsSpin');

    this.add.text(230, 50, 'Space Dodger', { fontSize: '42px' }).setOrigin(0.5);
    this.add.text(230, 580, 'Start', { fontSize: '42px' }).setOrigin(0.5);
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
