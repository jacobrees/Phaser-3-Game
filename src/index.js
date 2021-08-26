import './styles.scss';
import Phaser from 'phaser';

class StartScreen extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScreen' });
  }

  preload() {
    this.load.image('background', './assets/start-background.png');
    this.load.spritesheet('moon', './assets/moon.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('earth', './assets/earth.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('mars', './assets/mars.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('sun', './assets/sun.png', { frameWidth: 200, frameHeight: 200 });
    this.load.spritesheet('saturn', './assets/saturn.png', { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('neptune', './assets/neptune.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('jupiter', './assets/jupiter.png', { frameWidth: 100, frameHeight: 100 });
  }

  create() {
    this.add.image(230, 300, 'background').setScale(0.4);

    const moon = this.add.sprite(190, 460, 'moon', 0).setScale(0.65);
    const earth = this.add.sprite(100, 400, 'earth', 0).setScale(1.42);
    const mars = this.add.sprite(220, 320, 'mars', 0).setScale(1);
    const saturn = this.add.sprite(390, 400, 'saturn', 0).setScale(2.3);
    const sun = this.add.sprite(0, 700, 'sun', 0).setScale(3);
    const neptune = this.add.sprite(340, 170, 'neptune', 0).setScale(1.8);
    const jupiter = this.add.sprite(80, 200, 'jupiter').setScale(2.2);

    this.anims.create({
      key: 'moonSpin',
      frames: this.anims.generateFrameNumbers('moon'),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'earthSpin',
      frames: this.anims.generateFrameNumbers('earth'),
      frameRate: 4,
      repeat: -1,
    });

    this.anims.create({
      key: 'marsSpin',
      frames: this.anims.generateFrameNumbers('mars'),
      frameRate: 4,
      repeat: -1,
    });

    this.anims.create({
      key: 'saturnSpin',
      frames: this.anims.generateFrameNumbers('saturn'),
      frameRate: 4,
      repeat: -1,
    });

    this.anims.create({
      key: 'sunSpin',
      frames: this.anims.generateFrameNumbers('sun'),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'neptuneSpin',
      frames: this.anims.generateFrameNumbers('neptune'),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'jupiterSpin',
      frames: this.anims.generateFrameNumbers('jupiter'),
      frameRate: 3,
      repeat: -1,
    });

    moon.playReverse('moonSpin');
    earth.play('earthSpin');
    mars.playReverse('marsSpin');
    saturn.play('saturnSpin');
    sun.playReverse('sunSpin');
    neptune.play('neptuneSpin');
    jupiter.play('jupiterSpin');

    this.add.text(230, 50, 'Space Dodger', { fontSize: '42px' }).setOrigin(0.5);
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
