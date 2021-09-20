import Phaser from 'phaser';

let background;
let star;
let score = 0;

class GamePlay extends Phaser.Scene {
  constructor() {
    super({ key: 'GamePlay' });
  }

  preload() {
    this.load.image('gamePlayBackground', './assets/img/game-play-background.png');
    this.load.spritesheet('rocket-flicker', './assets/spritesheet/rocket-flicker.png', { frameWidth: 256, frameHeight: 581 });
    this.load.image('rocket', './assets/img/rocket.png');
    this.load.image('star', './assets/img/star.png');
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
    rocket.body.setSize(rocket.width - 350, rocket.height - 200, true).setOffset(178, 135);

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

    star = this.physics.add.image(230, 430, 'star').setScale(0.075);
    star.body.setSize(star.width - 145, star.height - 145, true).setOffset(75, 75);
    star.setVelocityY(-200);

    const scoreText = this.add.bitmapText(10, 10, 'press-start-2p', `Score:${score}`, 20).setOrigin(0);

    const handleCollectStar = (star) => {
      star.destroy();
      score += 10;
      scoreText.text = `Score:${score}`;
    };

    this.physics.add.overlap(
      star,
      rocket,
      handleCollectStar,
      undefined,
    );
  }

  update() { //eslint-disable-line
    background.tilePositionY += 20;
    star.angle += 3;
  }
}

export default GamePlay;