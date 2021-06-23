import Button from "./button.js";

export default class Food {
    constructor(foodDisplay) {
        this.parameter = 0;
        this.foodDisplay = foodDisplay;
    }

    display() {
        image(this.foodDisplay, 20, 0);
    }

    foodScore() {
        
    }

    foodSelect() {
        if (this.state == true) {
            parameter = parameter + 10;
        }
    }
}