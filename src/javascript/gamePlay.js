import Phaser from 'phaser';

let background;

class GamePlay extends Phaser.Scene {
  constructor() {
    super({ key: 'GamePlay' });
  }

  preload() {
    this.load.image('background', './assets/img/space-background.png');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');
    this.add.bitmapText(230, 50, 'press-start-2p', 'GamePlay', 35).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 7;
  }
}

export default GamePlay;