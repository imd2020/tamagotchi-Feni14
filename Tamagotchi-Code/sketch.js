import Button from "./button.js";
import Care from "./care.js";
import Character from "./character.js";

let Background1 = loadImage('assets/heart-background.png');
let startPic = loadImage('assets/start-button.png');
let Buttons = loadImage('assets/buttons.png');
let foodScreen = loadImage('assets/food-screen.png');
let sleepZ = loadImage('assets/sleep.png');
let heart = loadImage('assets/heart.png');
let Font = loadFont('assets/ARCADECLASSIC.TTF');
let startButton = new Button(150, 300, 260, 70);
let care = new Care(foodScreen, sleepZ, heart);
let time = 0;
let eating = false;
let state = "start";


//Food
let foodButton = new Button(420, 10, 130, 50);
let foodValue = false;
let pizzaButton = new Button(100, 425, 80, 80);
let cupcakeButton = new Button(220, 425, 80, 80);
let sushiButton = new Button(380, 425, 80, 80);
let nom = loadImage('assets/nom.png');

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
   if (startButton.hitTest() && state == "start"){
      state = "characterChoice";
   }
   if (foodButton.hitTest()) {
      foodValue = true;
   }
   if (pizzaButton.hitTest()) {
      foodValue = false;
      console.log("Pizza!");
      eating = true;
   }
   if (cupcakeButton.hitTest()) {
         foodValue = false;
         console.log("Cupcake!");
         eating = true;
   }
   if (sushiButton.hitTest()) {
      foodValue = false;
      console.log("Sushi!");
      eating = true;
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
  
   if (state == "start"){
      image(startPic, 150, 300);
      textSize(30);
      text("START", 230, 345);
   }
  else if (state = "characterChoice") {
   Cinnamoroll.display();
   image(Buttons, 420, 10);
   textSize(14);
   text("FOOD", 465, 40);
   text("SLEEP", 463, 95);
   text("PAT", 470, 150);


   if(eating == true){
      time = time + 1;
   }
   if(time >= 30){
      time = 0;
      eating = false;
   }

   if(time >= 1){
      image(nom, 100, 100);
   }

   if (foodValue == true) {
      care.food();
      
   }
}



  /* if (sleepValue == true) {
      care.sleep();
   }

   if (patValue == true) {
      care.pat();
   }*/
}

window.draw = draw;
window.mouseClicked = mouseClicked;
