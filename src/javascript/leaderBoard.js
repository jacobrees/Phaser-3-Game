import Phaser from 'phaser';

let background;

class LeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'LeaderBoard' });
  }

  preload() {
    this.load.image('background', './assets/img/menu-background.png');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'background');
    this.add.bitmapText(230, 50, 'press-start-2p', 'LeaderBoard', 35).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
  }
}

export default LeaderBoard;