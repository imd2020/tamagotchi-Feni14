import Button from "./button.js";

export default class Care {
    constructor(foodDisplay, sleepEmote, loveEmote) {
        this.foodDisplay = foodDisplay;
        this.sleepEmote = sleepEmote;
        this.loveEmote = loveEmote;
        this.foodValue = false;
        this.sleepValue = false;
        this.hunger = 80;
        this.energy = 80;
        this.love = 80;
    }

    stats() {
        textSize(14);        
        text("Hunger: " + this.hunger +"%", 10, 20);
        text("Energy: " + this.energy + "%", 10, 50);
        text("Love: " + this.love + "%", 10, 80);
    }

    food() {
        image(this.foodDisplay, 40, 400);
    }

    sleep() {
        image(this.sleepEmote, 90, 120);
    }

    pat() {
        image(this.loveEmote, 90, 120);
    }
}