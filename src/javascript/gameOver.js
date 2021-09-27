import Phaser from 'phaser';

let background;

class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {
    this.load.image('background', './assets/img/menu-background.png');
    this.load.bitmapFont('press-start-2p', './assets/bitmap/PressStart2P.png', './assets/bitmap/PressStart2P.xml');
  }

  create(score) {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.bitmapText(230, 50, 'press-start-2p', 'GameOver', 35).setOrigin(0.5);
    this.add.bitmapText(230, 100, 'press-start-2p', 'YourScore', 25).setOrigin(0.5);
    this.add.bitmapText(230, 140, 'press-start-2p', `${score}`, 25).setOrigin(0.5);

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