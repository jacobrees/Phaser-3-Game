import './styles.scss';
import Phaser from 'phaser';

let background;

class StartScreen extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScreen' });
  }

  preload() {
    this.load.image('background', './assets/space-background.png');
    this.load.spritesheet('rocket-flicker', './assets/rocket-flicker.png', { frameWidth: 256, frameHeight: 582 });
    this.load.image('rocket', './assets/rocket.png');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.image(230, 320, 'rocket').setScale(0.5).setAngle(135);
    const rocketFlicker = this.add.sprite(130, 220, 'rocket-flicker', 0).setScale(0.25).setAngle(135);
    this.add.text(230, 50, 'Space Dodger', { fontSize: '42px' }).setOrigin(0.5);
    this.add.text(230, 580, 'Start', { fontSize: '42px' }).setOrigin(0.5);

    this.anims.create({
      key: 'rocketFlicker',
      frames: this.anims.generateFrameNumbers('rocket-flicker'),
      frameRate: 10,
      repeat: -1,
    });

    rocketFlicker.play('rocketFlicker');
  }

  update() { //eslint-disable-line
    background.tilePositionY += 3;
    background.tilePositionX += 3;
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
