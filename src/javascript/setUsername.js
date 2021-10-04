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

    this.add.bitmapText(230, 260, 'press-start-2p', 'Type Username Here', 12).setOrigin(0.5);

    this.add.rectangle(230, 300, 285, 52, 0x6666ff);
    this.add.rectangle(232, 302, 285, 52, 0x121212);
    const text = this.add.text(230, 300, '', { fixedWidth: 260, fontSize: '37px' });
    text.setOrigin(0.5, 0.5);

    text.setInteractive().on('pointerdown', () => {
      this.rexUI.edit(text);
      console.log(text.text);
    });
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
  }
}

export default SetUsername;