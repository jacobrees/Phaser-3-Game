import Phaser from 'phaser';

let background;
const score = 0;

class GamePlay extends Phaser.Scene {
  constructor() {
    super({ key: 'GamePlay' });
  }

  preload() {
    this.load.image('gamePlayBackground', './assets/img/game-play-background.png');
    this.load.spritesheet('rocket-flicker', './assets/spritesheet/rocket-flicker.png', { frameWidth: 256, frameHeight: 581 });
    this.load.image('rocket', './assets/img/rocket.png');
    this.load.bitmapFont('press-start-2p', './assets/bitmap/PressStart2P.png', './assets/bitmap/PressStart2P.xml');
  }

  create() {
    background = this.add.tileSprite(230, 320, 460, 640, 'gamePlayBackground');

    const setSpawnX = () => {
      if (this.input.mousePointer.x !== 0) {
        return this.input.mousePointer.x;
      }
      return 230;
    };

    const rocket = this.physics.add.image(setSpawnX(), 130, 'rocket').setScale(0.25).setAngle(180);
    rocket.body.setSize(rocket.width - 340, rocket.height - 190, true).setOffset(172, 135);

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

    this.add.bitmapText(10, 10, 'press-start-2p', `Score: ${score}`, 18).setOrigin(0);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 20;
  }
}

export default GamePlay;