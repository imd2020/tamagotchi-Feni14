import Button from "./button.js";
import Care from "./care.js";

let Background1 = loadImage('assets/heart-background.png');
let startPic = loadImage('assets/start-button.png');
let Buttons = loadImage('assets/buttons.png');
let foodScreen = loadImage('assets/food-screen.png');
let sleepZ = loadImage('assets/sleep.png');
let heart = loadImage('assets/heart.png');
let Font = loadFont('assets/ARCADECLASSIC.TTF');
let startButton = new Button(150, 300, 260, 70);
let care = new Care(foodScreen, sleepZ, heart);
let loop = 0;
let state = "start";

//Food
let foodButton = new Button(420, 10, 130, 50);
let pizzaButton = new Button(100, 425, 80, 80);
let cupcakeButton = new Button(220, 425, 80, 80);
let sushiButton = new Button(380, 425, 80, 80);
let nom = loadImage('assets/nom.png');
let feedingTime = 0;
let eating = false;

//Sleep
let sleepButton = new Button(420, 65, 130, 50);
let napTime = 0;
let nap = false;

//Pat
let patButton = new Button(420, 120, 130, 50);
let socializing = 0;
let patting = false;

//Characters
let CinnaPic = loadImage('assets/Cinnamoroll.png');
let KuroPic = loadImage('assets/Kuromi.png');
let MeloPic = loadImage('assets/MyMelody.png');
let kuroButton = new Button(10, 120, 210, 210);
let cinnaButton = new Button(130, 370, 290, 140);
let meloButton = new Button(360, 120, 180, 210);
let chosenOne;


function mouseClicked() {
   if (startButton.hitTest() && state == "start"){
      state = "characterChoice";
      } else if (state == "characterChoice") {
      if (kuroButton.hitTest()) {
         chosenOne = KuroPic;
         state = "game";
         }
      if (cinnaButton.hitTest()) {
         chosenOne = CinnaPic;
         state = "game";
         }
      if (meloButton.hitTest()) {
         chosenOne = MeloPic;
         state = "game";
         }
      }
   
   if (care.hunger <= 90) {
   if (foodButton.hitTest()) {
      care.foodValue = true;
      }
   }
   if (care.foodValue == true) {
   if (pizzaButton.hitTest()) {
      care.foodValue = false;
      console.log("Pizza!");
      eating = true;
      care.hunger = care.hunger + 10;
      }
   if (cupcakeButton.hitTest()) {
         care.foodValue = false;
         console.log("Cupcake!");
         eating = true;
         care.hunger = care.hunger + 10;
      }
   if (sushiButton.hitTest()) {
      care.foodValue = false;
      console.log("Sushi!");
      eating = true;
      care.hunger = care.hunger + 10;
      }
   }

   if (care.energy <= 90) {
   if (sleepButton.hitTest()) {
      care.energy = care.energy + 10;
      nap = true;
      }
   }

   if (care.love <= 90) {
   if (patButton.hitTest()) {
      care.love = care.love + 10;
      patting = true;
      }
   }
}



function draw() {
   image(Background1, 0, 0);
  
   if (state == "start"){
      image(startPic, 150, 300);
      textSize(30);
      text("START", 230, 345);
   }
   else if (state == "characterChoice") {
     text("Choose your character!", 130, 70);
      image(KuroPic, 10, 120);
      image(CinnaPic, 130, 370);
      image(MeloPic, 360, 120);
   }
   else if (state == "game") {
   image(chosenOne, 130, 200);
   image(Buttons, 420, 10);
   care.stats();

   textSize(14);
   text("FOOD", 465, 40);
   text("SLEEP", 463, 95);
   text("PAT", 470, 150);

   if (loop >= 100) {
      loop = 0;
   }
   loop = loop + 1;

   if (loop == 1) {
   if(care.hunger >= 5) {
   care.hunger = care.hunger - 5;
   }
   if(care.energy >= 5) {
   care.energy = care.energy - 5;
   }
   if(care.love >= 5) {
   care.love = care.love - 5;
   }
   }


   if(eating == true){
      feedingTime = feedingTime + 1;
   }
   if(feedingTime >= 30){
      feedingTime = 0;
      eating = false;
   }

   if(feedingTime >= 1){
      image(nom, 100, 100);
   }

   if (care.foodValue == true) {
      care.food();   
   }

   if (nap == true) {
      napTime = napTime + 1;
   }
   if (napTime >= 30){
      napTime = 0;
      nap = false;
   }

   if(napTime >= 1){
      care.sleep();
   }

   if (patting == true) {
      socializing = socializing + 1;
   }
   if (socializing >= 30){
      socializing = 0;
      patting = false;
   }

   if(socializing >= 1){
      care.pat();
   }

}
}

window.draw = draw;
window.mouseClicked = mouseClicked;
