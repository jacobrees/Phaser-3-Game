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

    const setRocketSpawnX = () => {
      if (this.input.mousePointer.x !== 0) {
        return this.input.mousePointer.x;
      }
      return 230;
    };

    const rocket = this.physics.add.image(setRocketSpawnX(), 130, 'rocket').setScale(0.25).setAngle(180);
    rocket.body.setSize(rocket.width - 350, rocket.height - 200, true).setOffset(178, 135);

    const rocketFlicker = this.add.sprite(setRocketSpawnX(), 60, 'rocket-flicker', 0).setScale(0.13).setAngle(180);

    this.anims.create({
      key: 'rocketFlicker',
      frames: this.anims.generateFrameNumbers('rocket-flicker'),
      frameRate: 16,
      repeat: -1,
    });

    rocketFlicker.play('rocketFlicker');

    this.input.on('pointermove', (pointer) => {
      this.tweens.add({
        targets: rocket,
        x: Phaser.Math.Clamp(pointer.x, 50, 410),
        y: 130,
        duration: 100,
        ease: 'Sine.easeOut',
      }, this);
      this.tweens.add({
        targets: rocketFlicker,
        x: Phaser.Math.Clamp(pointer.x, 50, 410),
        y: 60,
        duration: 100,
        ease: 'Sine.easeOut',
      }, this);
    }, this);

    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    star = this.physics.add.image(randomNumber(50, 410), randomNumber(710, 2500), 'star').setScale(0.075);
    star.body.setSize(star.width - 145, star.height - 145, true).setOffset(75, 75);
    star.setVelocityY(randomNumber(-200, -700));

    const resetBlock = this.add.rectangle(0, -50, 460, 18, 0x6666ff).setOrigin(0);
    this.physics.add.existing(resetBlock);

    const scoreText = this.add.bitmapText(10, 10, 'press-start-2p', `Score:${score}`, 20).setOrigin(0);

    const resetStarPosition = () => {
      star.x = randomNumber(50, 410);
      star.y = randomNumber(710, 2500);
      star.setVelocityY(randomNumber(-200, -700));
    };

    const handleCollectStar = () => {
      resetStarPosition();
      score += 10;
      scoreText.text = `Score:${score}`;
    };

    this.physics.add.overlap(
      star,
      rocket,
      handleCollectStar,
      undefined,
    );

    this.physics.add.overlap(
      star,
      resetBlock,
      resetStarPosition,
      undefined,
    );
  }

  update() { //eslint-disable-line
    background.tilePositionY += 20;
    star.angle += 2;
  }
}

export default GamePlay;