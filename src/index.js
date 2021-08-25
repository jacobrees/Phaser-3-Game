import './styles.scss';
import Phaser from 'phaser';

function preload() {

}

function create() {
}

function update() {
}

const config = {
  type: Phaser.AUTO,
  width: 460,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  autoCenter: 1,
  scaleMode: 3,
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);
