import Button from "./button.js";

export default class Care {
    constructor(foodDisplay, sleepEmote, loveEmote) {
        this.foodDisplay = foodDisplay;
        this.sleepEmote = sleepEmote;
        this.loveEmote = loveEmote;
    }

    food() {
        image(this.foodDisplay, 20, 0);
    }

    sleep() {
        image(this.sleepEmote, 300, 300);
    }

    pat() {
        image(this.loveEmote, 300, 300);
    }
}