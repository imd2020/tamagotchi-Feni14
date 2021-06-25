export default class Care {
    constructor(foodDisplay, foodEmote, sleepEmote, loveEmote, box) {
        this.foodDisplay = foodDisplay;
        this.foodEmote = foodEmote;
        this.sleepEmote = sleepEmote;
        this.loveEmote = loveEmote;
        this.box = box;
        this.foodValue = false;
        this.sleepValue = false;
        this.hunger = 80;
        this.energy = 80;
        this.love = 80;
        this.levelScore = 0;
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

    nom() {
        image(this.foodEmote, 100, 120);
    }

    sleep() {
        image(this.sleepEmote, 100, 120);
    }

    pat() {
        image(this.loveEmote, 100, 120);
    }

    textBox() {
        image(this.box, 40, 400);
    }
}