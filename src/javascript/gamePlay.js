import Phaser from 'phaser';

let background;

class GamePlay extends Phaser.Scene {
  constructor() {
    super({ key: 'GamePlay' });
  }

  preload() {
    this.load.image('gamePlayBackground', './assets/img/game-play-background.png');
    this.load.spritesheet('rocket-flicker', './assets/spritesheet/rocket-flicker.png', { frameWidth: 256, frameHeight: 581 });
    this.load.image('rocket', './assets/img/rocket.png');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'gamePlayBackground');

    const setSpawnX = () => {
      if (this.input.mousePointer.x !== 0){
        return this.input.mousePointer.x
      } else {
        return 230
      }
    }

    const rocket = this.add.image(setSpawnX(), 130, 'rocket').setScale(0.25).setAngle(180);

    const rocketFlicker = this.add.sprite(setSpawnX(), 60, 'rocket-flicker', 0).setScale(0.13).setAngle(180);

    this.anims.create({
      key: 'rocketFlicker',
      frames: this.anims.generateFrameNumbers('rocket-flicker'),
      frameRate: 16,
      repeat: -1,
    });

    rocketFlicker.play('rocketFlicker');

    this.input.on('pointermove', (pointer) => {
      rocket.x = Phaser.Math.Clamp(pointer.x, 50, 410);
      rocketFlicker.x = Phaser.Math.Clamp(pointer.x, 50, 410);
    });
  }

  update() { //eslint-disable-line
    background.tilePositionY += 20;
  }
}

export default GamePlay;