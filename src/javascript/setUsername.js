import Phaser from 'phaser';
import globalState from './globalState.js';

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

    const warningText1 = this.add.bitmapText(230, 100, 'press-start-2p', 'Username Can Only Include', 16).setOrigin(0.5);
    const warningText2 = this.add.bitmapText(230, 130, 'press-start-2p', 'Characters a-z A-Z 0-9', 16).setOrigin(0.5);
    const warningText3 = this.add.bitmapText(230, 170, 'press-start-2p', 'Username Can Only Be', 16).setOrigin(0.5);
    const warningText4 = this.add.bitmapText(230, 200, 'press-start-2p', '3-8 Characters Long', 16).setOrigin(0.5);

    this.add.bitmapText(230, 260, 'press-start-2p', 'Type Username Here', 12).setOrigin(0.5);

    this.add.rectangle(230, 302, 285, 58, 0x6666ff);

    const text = this.add.rexInputText(230, 305, 280, 40, {
      type: 'text',
      fontSize: '32px',
    });
    text.setOrigin(0.5, 0.5);
    text.setInteractive().on('pointerdown', () => {
      this.rexUI.edit(text);
    });

    this.add.rectangle(232, 302, 285, 52, 0x121212);

    this.add.rectangle(0, 302, 90, 52, 0x121212).setOrigin(0, 0.5);
    this.add.rectangle(80, 302, 10, 58, 0x6666ff).setOrigin(0, 0.5);
    this.add.rectangle(370, 302, 10, 58, 0x6666ff).setOrigin(0, 0.5);
    this.add.rectangle(460, 302, 80, 52, 0x121212).setOrigin(1, 0.5);

    const charactersWarningText = [warningText1, warningText2];
    const lengthWarningText = [warningText3, warningText4];

    const regex = new RegExp('^[a-zA-Z0-9]*$');

    this.add.rectangle(230, 410, 277, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        if (text.text.length < 3 && !regex.test(text.text)) {
          lengthWarningText.forEach((warningText) => {
            warningText.tint = 0xff0008;
          });
          charactersWarningText.forEach((warningText) => {
            warningText.tint = 0xff0008;
          });
        } else if (text.text.length > 8 && !regex.test(text.text)) {
          lengthWarningText.forEach((warningText) => {
            warningText.tint = 0xff0008;
          });
          charactersWarningText.forEach((warningText) => {
            warningText.tint = 0xff0008;
          });
        } else if (text.text.length < 3 || text.text.length > 8) {
          lengthWarningText.forEach((warningText) => {
            warningText.tint = 0xff0008;
          });
        } else if (!regex.test(text.text)) {
          charactersWarningText.forEach((warningText) => {
            warningText.tint = 0xff0008;
          });
        } else {
          globalState.username = text.text;
          this.scene.start('MainMenu');
        }
      });
    

    if (globalState.username !== undefined) {
      this.add.rectangle(230, 560, 277, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
        .on('pointerdown', () => {
          this.scene.start('GameSettings');
        });
        this.add.bitmapText(230, 410, 'press-start-2p', 'Update', 28).setOrigin(0.5);
        this.add.bitmapText(230, 560, 'press-start-2p', 'Cancel', 28).setOrigin(0.5);
    } else {
        this.add.bitmapText(230, 410, 'press-start-2p', 'Submit', 28).setOrigin(0.5);
    }
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
  }
}

export default SetUsername;