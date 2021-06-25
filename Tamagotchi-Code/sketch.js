import Button from "./button.js";
import Care from "./care.js";

let Background1 = loadImage('assets/heart-background.png');
let startPic = loadImage('assets/start-button.png');
let textBox = loadImage('assets/text-box.png');
let Buttons = loadImage('assets/buttons.png');
let sleepZ = loadImage('assets/sleep.png');
let foodScreen = loadImage('assets/food-screen.png');
let heart = loadImage('assets/heart.png');
let Font = loadFont('assets/ARCADECLASSIC.TTF');
let startButton = new Button(150, 350, 260, 70);
let restartButton = new Button(150, 350, 260, 70);
let care = new Care(foodScreen, sleepZ, heart, textBox);
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
let full = false;
let fullTextBox = 0;

//Sleep
let sleepButton = new Button(420, 65, 130, 50);
let napTime = 0;
let nap = false;
let hyped = false;
let hypedTextBox = 0;

//Pat
let patButton = new Button(420, 120, 130, 50);
let socializing = 0;
let patting = false;
let annoyed = 0;
let annoyedTextBox = 0;

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
      } else if (restartButton.hitTest() && state == "failed"){
         state = "start";
      }
   
   //Feeding
   if (care.hunger <= 90) {
   if (foodButton.hitTest()) {
      care.foodValue = true;
      }
   } else if (care.hunger > 90 && foodButton.hitTest())
   {full = true;}

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
   } else if (care.energy > 90 && sleepButton.hitTest()) {hyped = true;}

   //Patting
   if (care.love <= 90) {
   if (patButton.hitTest()) {
      care.love = care.love + 10;
      patting = true;
      annoyed = false;
      care.level = care.level + 1;
      }
   } else if (care.love > 90 && patButton.hitTest()) {annoyed = true;}
}



function draw() {
   clear();
   image(Background1, 0, 0);
  
   //Start screen
   if (state == "start"){
      image(startPic, 150, 350);
      textSize(30);
      text("START", 230, 395);
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
   if (loop >= 50) {
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

   if (care.hunger <= 0 || care.energy <= 0 || care.love <= 0) {
      state = "failed";
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
   if(full == true){
      fullTextBox = fullTextBox + 1;
   }
   if(fullTextBox >= 50){
      fullTextBox = 0;
      full = false;
   }

   if (fullTextBox >= 1) {
      care.textBox();
      text(name + " is not hungry anymore!", 80, 450);
   }

   //notification when hyped
   if(hyped == true){
      hypedTextBox = hypedTextBox + 1;
   }
   if(hypedTextBox >= 50){
      hypedTextBox = 0;
      hyped = false;
   }

   if (hyped == true) {
      care.textBox();
      text(name + " is too hyped to sleep!", 80, 450);
   }

   //notification when annoyed
   if(annoyed == true){
      annoyedTextBox = annoyedTextBox + 1;
   }
   if(annoyedTextBox >= 50){
      annoyedTextBox = 0;
      annoyed = false;
   }

   if (annoyed == true) {
      care.textBox();
      text(name + "'s social battery is empty! They need some space.", 80, 450);
   }

   //level
   if (care.level == 10){
      care.level();
   }

}

   else if (state == "failed") {
      textSize(50);
      fill(255, 0, 0);
      text("FAILED", 195, 150);
      fill(0, 0, 0);
      textSize(25);
      text("Oh no! " + name + " didn't feel well.", 110, 250);
      text("You should take better care of them next time.", 30, 300);
      image(startPic, 150, 350);
      textSize(30);
      text("RESTART", 210, 395);
   }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
