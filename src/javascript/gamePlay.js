import Phaser from 'phaser';

let background;
let stars;
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

    const rocket = this.physics.add.image(setRocketSpawnX(), 130, 'rocket').setScale(0.33).setAngle(180);
    rocket.body.setSize(rocket.width - 350, rocket.height - 200, true).setOffset(178, 135);

    const rocketFlicker = this.add.sprite(setRocketSpawnX(), 39, 'rocket-flicker', 0).setScale(0.18).setAngle(180);

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
        y: 39,
        duration: 100,
        ease: 'Sine.easeOut',
      }, this);
    }, this);

    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    stars = this.physics.add.group({
      key: 'star',
      repeat: 1,
      setXY: { x: 230, y: 2500 },
    });

    stars.children.iterate((star) => {
      star.setScale(0.075);
      star.body.setSize(star.width - 125, star.height - 125, true);
      star.setVelocityY(randomNumber(-200, -700));
      star.x = randomNumber(50, 410);
      star.y = randomNumber(800, 2500);
    });

    const resetBlock = this.add.rectangle(0, -50, 460, 18, 0x6666ff).setOrigin(0);
    this.physics.add.existing(resetBlock);

    const scoreText = this.add.bitmapText(10, 10, 'press-start-2p', `Score:${score}`, 25).setOrigin(0);

    const resetStarPosition = (object, resetStar) => {
      resetStar.x = randomNumber(50, 410);
      resetStar.y = randomNumber(800, 2500);
      resetStar.setVelocityY(randomNumber(-200, -700));
    };

    const handleCollectStar = (object, resetStar) => {
      resetStarPosition(null, resetStar);
      score += 10;
      scoreText.text = `Score:${score}`;
    };

    this.physics.add.overlap(
      rocket,
      stars,
      handleCollectStar,
      undefined,
      this,
    );

    this.physics.add.overlap(
      resetBlock,
      stars,
      resetStarPosition,
      undefined,
      this,
    );
  }

  update() { //eslint-disable-line
    background.tilePositionY += 20;
    stars.children.iterate((star) => {
      star.angle += 2;
    });
  }
}

export default GamePlay;