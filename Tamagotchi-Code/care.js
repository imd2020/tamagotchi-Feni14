import Button from "./button.js";

export default class Care {
    constructor(foodDisplay, sleepEmote, loveEmote) {
        this.foodDisplay = foodDisplay;
        this.sleepEmote = sleepEmote;
        this.loveEmote = loveEmote;
        this.hunger = 80;
        this.energy = 80;
        this.love = 80;
    }

    food() {
        image(this.foodDisplay, 40, 400);
    }

    sleep() {
        image(this.sleepEmote, 300, 300);
    }

    pat() {
        image(this.loveEmote, 300, 300);
    }
}