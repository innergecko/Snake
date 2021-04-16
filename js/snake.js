export default class Snake {
    constructor(scene) {
        this.scene = scene;
        this.box = this.scene.add
            .rectangle(0, 0, 16, 16, 0xff0000)
            .setOrigin(0);
    }

    update(time) {
    }
}