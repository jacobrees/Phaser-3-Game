import Phaser from 'phaser';

let background;
let text;
let bitmap;

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

    this.add.rectangle(230, 302, 285, 58, 0x6666ff);
    this.add.rectangle(232, 302, 285, 52, 0x121212).setInteractive().on('pointerdown', () => {
      text.text = '';
      this.rexUI.edit(text);
    });
    text = this.add.text(230, 2000, 'Username', {
      fixedWidth: 0, fixedHeight: 0, fontSize: '37px', opacity: 1,
    });
    text.setOrigin(0.5, 0.5);
    text.alpha = 1;
    text.setVisible(false);
    bitmap = this.add.bitmapText(230, 300, 'press-start-2p', 'Username', 32).setOrigin(0.5);

    this.add.rectangle(0, 302, 90, 52, 0x121212).setOrigin(0, 0.5);
    this.add.rectangle(80, 302, 10, 58, 0x6666ff).setOrigin(0, 0.5);
    this.add.rectangle(370, 302, 10, 58, 0x6666ff).setOrigin(0, 0.5);
    this.add.rectangle(460, 302, 80, 52, 0x121212).setOrigin(1, 0.5);

    this.add.rectangle(230, 410, 277, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        this.scene.start('MainMenu');
      });
    this.add.bitmapText(230, 410, 'press-start-2p', 'Submit', 28).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
    bitmap.text = text.text;
  }
}

export default SetUsername;