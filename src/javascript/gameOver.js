import Phaser from 'phaser';
import postScore from './database.js';
import globalState from './globalState.js';

let background;

class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {
    this.load.image('background', './assets/img/menu-background.png');
    this.load.bitmapFont('press-start-2p', './assets/bitmap/PressStart2P.png', './assets/bitmap/PressStart2P.xml');
  }

  create() {
    const score = '120';
    const num = 15;
    postScore({
      username: globalState.username,
      score,
    });

    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.bitmapText(230, 50, 'press-start-2p', 'GameOver', 38).setOrigin(0.5);
    this.add.bitmapText(230, 100, 'press-start-2p', 'YourScore', 25).setOrigin(0.5);
    this.add.bitmapText(230, 140, 'press-start-2p', `${score}`, 25).setOrigin(0.5);

    this.add.bitmapText(5, 195 - num, 'press-start-2p', 'Rank', 16).setOrigin(0);
    this.add.bitmapText(85, 195 - num, 'press-start-2p', 'Username', 16).setOrigin(0);
    this.add.bitmapText(260, 195 - num, 'press-start-2p', 'Score', 16).setOrigin(0);

    this.add.rectangle(230, 220 - num, 460, 4, 0xffffff);
    this.add.rectangle(70, 220 - num, 4, 220, 0xffffff).setOrigin(0);
    this.add.rectangle(245, 220 - num, 4, 220, 0xffffff).setOrigin(0);
    this.add.rectangle(230, 440 - num, 460, 4, 0xffffff);

    this.add.bitmapText(10, 230 - num, 'press-start-2p', '1st', 16).setOrigin(0);
    this.add.bitmapText(10, 260 - num, 'press-start-2p', '2nd', 16).setOrigin(0);
    this.add.bitmapText(10, 290 - num, 'press-start-2p', '3rd', 16).setOrigin(0);
    this.add.bitmapText(10, 320 - num, 'press-start-2p', '4th', 16).setOrigin(0);
    this.add.bitmapText(10, 350 - num, 'press-start-2p', '5th', 16).setOrigin(0);
    this.add.bitmapText(10, 380 - num, 'press-start-2p', '6th', 16).setOrigin(0);
    this.add.bitmapText(10, 410 - num, 'press-start-2p', '7th', 16).setOrigin(0);

    this.add.bitmapText(85, 230 - num, 'press-start-2p', 'Jacob', 16).setOrigin(0);
    this.add.bitmapText(85, 260 - num, 'press-start-2p', 'YOLOBAG', 16).setOrigin(0);
    this.add.bitmapText(85, 290 - num, 'press-start-2p', 'etakak', 16).setOrigin(0);
    this.add.bitmapText(85, 320 - num, 'press-start-2p', 'CyKaBlYa', 16).setOrigin(0);
    this.add.bitmapText(85, 350 - num, 'press-start-2p', 'cer', 16).setOrigin(0);
    this.add.bitmapText(85, 380 - num, 'press-start-2p', 'UUUUUUUU', 16).setOrigin(0);
    this.add.bitmapText(85, 410 - num, 'press-start-2p', 'UUUUUUUU', 16).setOrigin(0);

    this.add.bitmapText(260, 230 - num, 'press-start-2p', '11170', 16).setOrigin(0);
    this.add.bitmapText(260, 260 - num, 'press-start-2p', '150', 16).setOrigin(0);
    this.add.bitmapText(260, 290 - num, 'press-start-2p', '120', 16).setOrigin(0);
    this.add.bitmapText(260, 320 - num, 'press-start-2p', '120', 16).setOrigin(0);
    this.add.bitmapText(260, 350 - num, 'press-start-2p', '110', 16).setOrigin(0);
    this.add.bitmapText(260, 380 - num, 'press-start-2p', '90', 16).setOrigin(0);
    this.add.bitmapText(260, 410 - num, 'press-start-2p', '30', 16).setOrigin(0);

    this.add.rectangle(230, 560, 255, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        this.scene.start('MainMenu');
      });
    this.add.bitmapText(230, 560, 'press-start-2p', 'MainMenu', 28).setOrigin(0.5);

    this.add.rectangle(230, 470, 285, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        this.scene.start('GamePlay');
      });
    this.add.bitmapText(230, 470, 'press-start-2p', 'PlayAgain', 28).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
  }
}

export default GameOver;