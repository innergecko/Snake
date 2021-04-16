import Snake from "./snake.js"

export default class MainScene extends Phaser.Scene {
    constructor () {
        super("MainScene");
    }

    preload () {
        this.load.image('bg', 'assets/skies/background1.png');
    }

    create () {
        
    
        var g2 = this.add.grid(320, 320, 640, 640, 16, 16, 0x9B8357).setAltFillStyle(0x74613C).setOutlineStyle();

        this.snake = new Snake(this);
        }

    update (time) {
        this.snake.update(time);
    }
}