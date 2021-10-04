import Phaser from 'phaser';

let background;

class StartScreen extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScreen' });
  }

  preload() {
    this.load.image('background', './assets/img/menu-background.png');
    this.load.bitmapFont('press-start-2p', './assets/bitmap/PressStart2P.png', './assets/bitmap/PressStart2P.xml');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.bitmapText(230, 100, 'press-start-2p', 'Do You Want', 22).setOrigin(0.5);
    this.add.bitmapText(230, 130, 'press-start-2p', 'To Enter', 22).setOrigin(0.5);
    this.add.bitmapText(230, 160, 'press-start-2p', 'FullScreen Mode?', 22).setOrigin(0.5);

    this.add.rectangle(230, 260, 255, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
      .on('pointerup', () => {
        if (!this.scale.isFullscreen) {
          this.scale.startFullscreen();
          this.scene.start('SetUsername');
        } else {
          this.scene.start('SetUsername');
        }
      }, this);
    this.add.bitmapText(230, 260, 'press-start-2p', 'Yes', 28).setOrigin(0.5);

    this.add.rectangle(230, 350, 255, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
      .on('pointerup', () => {
        if (this.scale.isFullscreen) {
          this.scale.stopFullscreen();
          this.scene.start('SetUsername');
        } else {
          this.scene.start('SetUsername');
        }
      }, this);
    this.add.bitmapText(230, 350, 'press-start-2p', 'No', 28).setOrigin(0.5);

    this.add.bitmapText(230, 450, 'press-start-2p', 'You Can Change', 22).setOrigin(0.5);
    this.add.bitmapText(230, 480, 'press-start-2p', 'This Later', 22).setOrigin(0.5);
    this.add.bitmapText(230, 510, 'press-start-2p', 'In Settings', 22).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
  }
}

export default StartScreen;