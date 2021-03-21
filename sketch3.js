// You look into an ornate mirror

//what dnd class are you
let characlass = ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

//What dnd race are you picking from; general groups only
let race = ["Common", "Exotic", "Monstrous", "Unearthed Arcana", "Eberron", "Plane Shift", "Ravnica", "Theros"];

// character backgrounds on
let characterbg = ["Acolyte", "Anthropologist", "Archaeologist", "Charlatan", "City Watch", "Clan Crafter", "Cloistered Scholar", "Courtier",
  "Criminal", "Entertainer", "Faceless", "Faction Agent", "Far Traveler", "Folk Hero",
  "Gladiator", "Guild Artisan", "Guild Merchant", "Haunted One", "House Agent", "Hermit", "Inheritor",
  "Investigator", "Knight", "Knight og the Order", " Marine", "Mercenary Veteran", "Noble", "Outlander",
  "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urban Bounty Hunter", "Urchin"
];

let cl;
let ra;
let charabg;

let wrd1;
let wrd2;
let button;


let spark = [];

function preload() {
  frame = loadImage('frame.png')
}

function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);
  imageMode(CENTER);
  image(frame, 300,300);

  // fill(150)
  // rect(-190,-310, 250,40)
 boxes();

  spark[0] = new Spark(0, 0);
  spark[1] = new Spark(25, 200, 1.5,);
  spark[2] = new Spark(500, -175, .5,);
  spark[3] = new Spark(50, -175, 1.5,);
  spark[4] = new Spark(-135, 500, .75,);

button = createButton('Who are you?');
 button.position(width*0.42, height*0.55);
   button.style ('background-color', '#e1cef2');
button.mousePressed(buttonPressed);
button.style ('')

boxes();
texline1();
// texline2();
}

function draw() {

  spark[0].display();
  spark[1].display();
  spark[2].display();
  spark[3].display();
  spark[4].display();
// fill(150)
//   rect(-190,-300, 250,50)
}

function buttonPressed(){
  cl = int(random(characlass.length));
  ra = int(random(race.length));
  charabg = int(random(characterbg.length));
  wrd1 = characlass[cl] + " of the " + race[ra] + " races.";
  wrd2 = characterbg[charabg] + " background.";

  color1 = random(255)
   color2 = random(255)
   color3 = random(255)

texline2();
}

function boxes(){
  fill(100);
  noStroke();
  rect(width*0.33, height*0.218, 210,40)
  rect(width*0.33, height*0.712, 210,40)
}

function texline1(){
  fill (0)
  textAlign(CENTER);
//unchanging text
text('You see a ...', width*0.5, height*0.2);
text("You suspect you're of the", width*0.5, height*0.7);
}

function texline2(){
   // background(0);
   // //   imageMode(CENTER);
   // // image(frame, -95,-95,700,700);

// texline1();
fill(100)
  rect(-180,-312, 240,40)
  rect(-180,40, 240,40)

  fill (color1, color2, color3);
  textAlign(CENTER);
//changing text
text(wrd1, width* - 0.1, height* -0.48 );
text(wrd2, width* -0.1, height* 0.11 );
}
