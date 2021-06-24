import Button from "./button.js";
import Care from "./care.js";
import Character from "./character.js";
//import Start from "./startScreen.js";

let Background1 = loadImage('assets/heart-background.png');
let Buttons = loadImage('assets/buttons.png');
let foodScreen = loadImage('assets/food-screen.png');
let sleepZ = loadImage('assets/sleep.png');
let heart = loadImage('assets/heart.png');
let care = new Care(foodScreen, sleepZ, heart);
//let Font = loadFont('assets/ARCADECLASSIC.TTF');

//Food
let foodButton = new Button(420, 10, 130, 50);
let foodValue = false;
let exitButton = new Button(400, 400, 20, 20);
//let pizzaButton = new Button(100, 100, 50, 50);

//Sleep
let sleepButton = new Button(420, 65, 130, 50);
let sleepValue = false;

//Pat
let patButton = new Button(420, 120, 130, 50);
let patValue = false;

//Characters
let CinnaPic = loadImage('assets/Cinnamoroll.png');
let KuroPic = loadImage('assets/Kuromi.png');
let MeloPic = loadImage('assets/MyMelody.png');
let Cinnamoroll = new Character(CinnaPic);
let Kuromi = new Character(KuroPic);
let MyMelody = new Character(MeloPic);


function mouseClicked() {
   if (foodButton.hitTest()) {
      foodValue = true;
   }
   if (exitButton.hitTest()) {
      foodValue = false;
      console.log("bye!");
   }
   if (sleepButton.hitTest()) {
      sleepValue = true;
   }
   if (patButton.hitTest()) {
      patValue = true;
   }
}

function draw() {
   image(Background1, 0, 0);
  
   //if(start.start == true) {
   Cinnamoroll.display();
   image(Buttons, 420, 10);
   text("FOOD", 465, 40);
   text("SLEEP", 463, 95);
   text("PAT", 470, 150);


   if (foodValue == true) {
      care.food();

      rect(400, 400, 20, 20);
      rect(100, 100, 50, 50);
   }

  /* if (sleepValue == true) {
      care.sleep();
   }

   if (patValue == true) {
      care.pat();
   }
}*/

}


