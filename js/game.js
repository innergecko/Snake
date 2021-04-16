import MainScene from "./mainscene.js"

const config = {
    width: 640,
    height: 640,
    type: Phaser.auto,
    parent: 'game-canvas',
    backgroundColor: '#efefef',
    scene: [MainScene],
    
}

new Phaser.Game(config);

