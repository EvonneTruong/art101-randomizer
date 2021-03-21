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

let randomIndex;

let spark = [];

function preload() {
  frame = loadImage('frame.png')
}

function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);
  imageMode(CENTER);
  image(frame, 300,300);
  textSize(24);

  spark[0] = new Spark(0, 0);
  spark[1] = new Spark(25, 200, 1.5,);
  spark[2] = new Spark(500, -175, .5,);
  spark[3] = new Spark(50, -175, 1.5,);
  spark[4] = new Spark(-135, 500, .75,);

}

function draw() {

  spark[0].display();
  spark[1].display();
  spark[2].display();
  spark[3].display();
  spark[4].display();
}

function buttonPressed(){}

function sparks(){
  fill(255);
  noStroke();
  beginShape();
  vertex(80,100);
   quadraticVertex(85, 85, 100, 80);
    quadraticVertex(85, 75, 80, 60);
   quadraticVertex(75, 75, 60, 80);
  quadraticVertex(75, 85, 80,100);
  endShape();

  beginShape();
  vertex(180,200);
   quadraticVertex(185, 185, 200, 180);
    quadraticVertex(185, 175, 180, 160);
   quadraticVertex(175, 175, 160, 180);
  quadraticVertex(175, 185, 180,200);
  endShape();

  beginShape();
  vertex(550,160);
   quadraticVertex(555, 145, 570, 140);
    quadraticVertex(555, 135, 550, 120);
   quadraticVertex(545, 135, 530, 140);
  quadraticVertex(545, 145, 550,10);
  endShape();
}

function randomizer() {

}
