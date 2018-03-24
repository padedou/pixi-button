class Button extends PIXI.Sprite {
    // https://medium.com/dailyjs/named-and-optional-arguments-in-javascript-using-es6-destructuring-292a683d5b4e
    constructor({
        x = 0,
        y = 0,
        color = 0xffffff,
        alpha = 1,
        txtValue = 'button',
        txtStyle = {},
        interactive = true,
        shape = {
            type: 'rect',
            options: {
                width: 100,
                height: 50
            }
        }
    } = {}) {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
        this.alpha = alpha;
        this.txtValue = txtValue;
        this.txtStyle = txtStyle;
        this.interactive = interactive;
        this.shape = shape;

        this.generate();
    }

    generate() {

    }
}