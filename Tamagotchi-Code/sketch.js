import Button from "./button.js";
import Food from "./food.js";
//import Start from "./startScreen.js";

let Background1 = loadImage('assets/heart-background.png');
let Cinnamoroll = loadImage('assets/Cinnamoroll.png');
let Buttons = loadImage('assets/buttons.png');
//let Font = loadFont('assets/ARCADECLASSIC.TTF');
let foodButton = new Button(420, 10, 130, 50);
let foodScreen = loadImage('assets/food-screen.png');
let foodValue = false;
let food = new Food(foodScreen);
let exitButton = new Button(400, 400, 20, 20);
let pizzaButton = new Button(100, 100, 50, 50);


function mouseClicked() {
   if (foodButton.hitTest()) {
      foodValue = true;
   }
   if (exitButton.hitTest()) {
      foodValue = false;
      console.log("bye!");
   }
}

function draw() {
   image(Background1, 0, 0);
   image(Cinnamoroll, 130, 200);
   image(Buttons, 420, 10);
   text("FOOD", 465, 40);
   text("SLEEP", 463, 95);
   text("PAT", 470, 150);


   if (foodValue == true) {
      food.display();

      rect(400, 400, 20, 20);
      rect(100, 100, 50, 50);
   }

}


