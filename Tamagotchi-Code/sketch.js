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
let pizzaButton = new Button(100, 425, 80, 80);
let cupcakeButton = new Button(220, 425, 80, 80);
let sushiButton = new Button(380, 425, 80, 80);

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
   if (pizzaButton.hitTest()) {
      foodValue = false;
      console.log("Pizza!");
   }
   if (cupcakeButton.hitTest()) {
         foodValue = false;
         console.log("Cupcake!");
   }
   if (sushiButton.hitTest()) {
      foodValue = false;
      console.log("Sushi!");
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
   }



  /* if (sleepValue == true) {
      care.sleep();
   }

   if (patValue == true) {
      care.pat();
   }
}*/


}

window.draw = draw;
window.mouseClicked = mouseClicked;
