import Button from"./button.js";

export default class Start extends Button {
    constructor( x, y, width, height){
        super( x, y, width, height);
        this.start = false;
    }

    display() {
        fill(255, 0, 0);
        rect( x, y, width, height);
    }


    hitTest( x, y){
        this.start = true;
    }
}