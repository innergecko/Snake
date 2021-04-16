export default class Snake {
    constructor(scene) {
        this.scene = scene;
        this.body = [];

        this.body.push(
            this.box = this.scene.add
                .rectangle(0, 0, 16, 16, 0xff0000)
                .setOrigin(0)
        );

        this.body.push(
            this.box = this.scene.add
                .rectangle(0, 0, 16, 16, 0xff0000ff)
                .setOrigin(0)
        );

        this.scene.input.keyboard.on('keydown', e => {
            this.keydown(e);
        });
    }

    keydown(event) {
        if (event.keyCode == 37) { //Left
        }
        else if (event.keyCode == 38) { //Up
        }
        else if (event.keyCode == 39) { //Right
        }
        else if (event.keyCode == 40) { //Down
        }
    }

    update(time) {
        this.body[0].x += 1;
    }
}

