import Button from "./button.js";
import Care from "./care.js";

let Background1 = loadImage('assets/heart-background.png');
let startPic = loadImage('assets/start-button.png');
let textBox = loadImage('assets/text-box.png');
let Buttons = loadImage('assets/buttons.png');
let Font = loadFont('assets/ARCADECLASSIC.TTF');
let startButton = new Button(150, 300, 260, 70);
let care = new Care(foodScreen, sleepZ, heart, textBox);
let loop = 0;
let state = "start";

//Food
let foodScreen = loadImage('assets/food-screen.png');
let foodButton = new Button(420, 10, 130, 50);
let pizzaButton = new Button(100, 425, 80, 80);
let cupcakeButton = new Button(220, 425, 80, 80);
let sushiButton = new Button(380, 425, 80, 80);
let nom = loadImage('assets/nom.png');
let feedingTime = 0;
let eating = false;
let full = false;

//Sleep
let sleepZ = loadImage('assets/sleep.png');
let sleepButton = new Button(420, 65, 130, 50);
let napTime = 0;
let nap = false;
let hyped = false;

//Pat
let heart = loadImage('assets/heart.png');
let patButton = new Button(420, 120, 130, 50);
let socializing = 0;
let patting = false;
let annoyed = 0;

//Characters
let CinnaPic = loadImage('assets/Cinnamoroll.png');
let KuroPic = loadImage('assets/Kuromi.png');
let MeloPic = loadImage('assets/MyMelody.png');
let kuroButton = new Button(10, 120, 210, 210);
let cinnaButton = new Button(130, 370, 290, 140);
let meloButton = new Button(360, 120, 180, 210);
let chosenOne;
let name;
let namePreview;


function mouseClicked() {
   //Start screen
   if (startButton.hitTest() && state == "start"){
      state = "characterChoice";
      } else if (state == "characterChoice") {

         //Character choice
      if (kuroButton.hitTest()) {
         chosenOne = KuroPic;
         name = "Kuromi";
         state = "game";
         }
      if (cinnaButton.hitTest()) {
         chosenOne = CinnaPic;
         name = "Cinnamoroll";
         state = "game";
         }
      if (meloButton.hitTest()) {
         chosenOne = MeloPic;
         name = "MyMelody";
         state = "game";
         }
      }
   
   //Feeding
   if (care.hunger <= 90) {
   if (foodButton.hitTest()) {
      care.foodValue = true;
      full = false;
      }
   } else {full = true;}
   if (care.foodValue == true) {
   if (pizzaButton.hitTest()) {
      care.foodValue = false;
      console.log("Pizza!");
      eating = true;
      care.hunger = care.hunger + 10;
      care.level = care.level + 1;
      }
   if (cupcakeButton.hitTest()) {
         care.foodValue = false;
         console.log("Cupcake!");
         eating = true;
         care.hunger = care.hunger + 10;
         care.level = care.level + 1;
      }
   if (sushiButton.hitTest()) {
      care.foodValue = false;
      console.log("Sushi!");
      eating = true;
      care.hunger = care.hunger + 10;
      care.level = care.level + 1;
      }
   }

   //Sleeping
   if (care.energy <= 90) {
   if (sleepButton.hitTest()) {
      care.energy = care.energy + 10;
      nap = true;
      hyped = false;
      care.level = care.level + 1;
      }
   } else {hyped = true;}

   //Patting
   if (care.love <= 90) {
   if (patButton.hitTest()) {
      care.love = care.love + 10;
      patting = true;
      annoyed = false;
      care.level = care.level + 1;
      }
   } else {annoyed = true;}
}



function draw() {
   clear();
   image(Background1, 0, 0);
  
   //Start screen
   if (state == "start"){
      image(startPic, 150, 300);
      textSize(30);
      text("START", 230, 345);
   }
   else if (state == "characterChoice") {

      //Character choice
      textSize(30);
     text("Choose your character!", 130, 60);

     //Name when hovering
     if (kuroButton.hitTest()) {
      namePreview = "Kuromi";
      }
   if (cinnaButton.hitTest()) {
      namePreview = "Cinnamoroll";
      }
   if (meloButton.hitTest()) {
      namePreview = "MyMelody";
      }
      textSize(20);
      text(namePreview, 230, 90);
      image(KuroPic, 10, 120);
      image(CinnaPic, 130, 370);
      image(MeloPic, 360, 120);
   }

   //Tamagotchi
   else if (state == "game") {
   image(chosenOne, 180, 180);
   image(Buttons, 420, 10);
   care.stats();
   textSize(14);
   text("FOOD", 465, 40);
   text("SLEEP", 463, 95);
   text("PAT", 470, 150);


   //Decrease of parameters
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

   //nom emote
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

   //sleep emote
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

   //pat emote
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

   //notification when full
   if (full == true) {
      care.textBox();
      text(name + " is not hungry anymore!", 80, 450);
   }

   //level
   if (level = 10){
      care.level();
   }

}
}

window.draw = draw;
window.mouseClicked = mouseClicked;
