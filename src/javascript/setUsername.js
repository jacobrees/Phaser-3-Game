import Phaser from 'phaser';

let background;

class SetUsername extends Phaser.Scene {
  constructor() {
    super({ key: 'SetUsername' });
  }

  preload() {
    this.load.image('background', './assets/img/menu-background.png');
    this.load.bitmapFont('press-start-2p', './assets/bitmap/PressStart2P.png', './assets/bitmap/PressStart2P.xml');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.bitmapText(230, 50, 'press-start-2p', 'Username', 38).setOrigin(0.5);

    this.add.bitmapText(230, 100, 'press-start-2p', 'Username Can Only Include', 16).setOrigin(0.5);
    this.add.bitmapText(230, 130, 'press-start-2p', 'Characters a-z A-Z 0-9', 16).setOrigin(0.5);
    this.add.bitmapText(230, 170, 'press-start-2p', 'Username Can Only Be', 16).setOrigin(0.5);
    this.add.bitmapText(230, 200, 'press-start-2p', '3-8 Characters Long', 16).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
  }
}

export default SetUsername;