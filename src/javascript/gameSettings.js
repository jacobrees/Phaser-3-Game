import Phaser from 'phaser';

let background;

class GameSettings extends Phaser.Scene {
  constructor() {
    super({ key: 'GameSettings' });
  }

  preload() {
    this.load.image('background', './assets/img/menu-background.png');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.bitmapText(230, 50, 'press-start-2p', 'Settings', 35).setOrigin(0.5);

    this.add.rectangle(230, 560, 255, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        this.scene.start('MainMenu');
      });
    this.add.bitmapText(230, 560, 'press-start-2p', 'MainMenu', 28).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
  }
}

export default GameSettings;