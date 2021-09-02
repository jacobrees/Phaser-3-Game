import Phaser from 'phaser';

let background;

class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });
  }

  preload() {
    this.load.image('background', './assets/img/space-background.png');
    this.load.spritesheet('rocket-flicker', './assets/spritesheet/rocket-flicker.png', { frameWidth: 256, frameHeight: 581 });
    this.load.image('rocket', './assets/img/rocket.png');
    this.load.bitmapFont('press-start-2p', './assets/bitmap/PressStart2P.png', './assets/bitmap/PressStart2P.xml');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.image(230, 320, 'rocket').setScale(0.5).setAngle(135);
    const rocketFlicker = this.add.sprite(130, 220, 'rocket-flicker', 0).setScale(0.25).setAngle(135);
    this.add.bitmapText(230, 50, 'press-start-2p', 'SpaceDodger', 35).setOrigin(0.5);
    this.add.bitmapText(230, 500, 'press-start-2p', 'LeaderBoard', 28).setOrigin(0.5).setInteractive({ cursor: 'pointer' });
    this.add.bitmapText(230, 570, 'press-start-2p', 'StartGame', 28).setOrigin(0.5).setInteractive({ cursor: 'pointer' });

    this.anims.create({
      key: 'rocketFlicker',
      frames: this.anims.generateFrameNumbers('rocket-flicker'),
      frameRate: 10,
      repeat: -1,
    });

    rocketFlicker.play('rocketFlicker');
  }

  update() { //eslint-disable-line
    background.tilePositionY += 5;
    background.tilePositionX += 5;
  }
}

export default MainMenu;