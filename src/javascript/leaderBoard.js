import Phaser from 'phaser';

let background;

class LeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'LeaderBoard' });
  }

  preload() {
    this.load.image('background', './assets/img/menu-background.png');
    this.load.bitmapFont('press-start-2p', './assets/bitmap/PressStart2P.png', './assets/bitmap/PressStart2P.xml');
  }

  create() {
    let num = 100
    let x = 10
    background = this.add.tileSprite(230, 320, 460, 640, 'background');

    this.add.bitmapText(230, 50, 'press-start-2p', 'LeaderBoard', 35).setOrigin(0.5);


    this.add.rectangle(230, 180 - num, 460, 4, 0xffffff);

    this.add.bitmapText(5, 195 - num, 'press-start-2p', 'Rank', 16).setOrigin(0);
    this.add.bitmapText(85 + x, 195 - num, 'press-start-2p', 'Username', 16).setOrigin(0);
    this.add.bitmapText(260 + x, 195 - num, 'press-start-2p', 'Score', 16).setOrigin(0);

    this.add.rectangle(230, 220 - num, 460, 4, 0xffffff);
    this.add.rectangle(70 + x, 180 - num, 4, 440, 0xffffff).setOrigin(0);
    this.add.rectangle(245 + x, 180 - num, 4, 440, 0xffffff).setOrigin(0);
    this.add.rectangle(230, 620 - num, 460, 4, 0xffffff);

    let y = 130
    let exampleScore = 1120
    for(let i = 0; i < 13; i+=1){
      
      const arrRanks = ["st", "nd", "rd"]

      if(i < 3){
        this.add.bitmapText(10, y, 'press-start-2p', `${i + 1}${arrRanks[i]}`, 16).setOrigin(0);
      }else {
        this.add.bitmapText(10, y, 'press-start-2p', `${i + 1}th`, 16).setOrigin(0);
      }

      this.add.bitmapText(85 + x, y, 'press-start-2p', 'Jacob', 16).setOrigin(0);

  this.add.bitmapText(260 + x, y, 'press-start-2p', exampleScore, 16).setOrigin(0);

      y+= 30
      exampleScore -= 30
      
    } 

    
    this.add.rectangle(230, 560, 255, 52, 0x6666ff).setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        this.scene.start('MainMenu');
      });
    this.add.bitmapText(230, 560, 'press-start-2p', 'MainMenu', 28).setOrigin(0.5);
  }

  update() { //eslint-disable-line
    background.tilePositionY += 2;
    background.tilePositionX += 2;
  }
}

export default LeaderBoard;