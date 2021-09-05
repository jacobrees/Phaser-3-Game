import Phaser from 'phaser';

class LeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'LeaderBoard' });
  }

  preload() {
  }

  create() {
    this.add.bitmapText(230, 50, 'press-start-2p', 'LeaderBoard', 35).setOrigin(0.5);
  }

  update() { //eslint-disable-line

  }
}

export default LeaderBoard;