import Phaser from 'phaser';

class GamePlay extends Phaser.Scene {
  constructor() {
    super({ key: 'GamePlay' });
  }

  preload() {
  }

  create() {
    this.add.bitmapText(230, 50, 'press-start-2p', 'GamePlay', 35).setOrigin(0.5);
  }

  update() { //eslint-disable-line

  }
}

export default GamePlay;