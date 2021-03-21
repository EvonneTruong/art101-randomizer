// You look into an ornate mirror

//what dnd class are you
let class = ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

//What dnd race are you picking from; general groups only
let race = ["Common", "Exotic", "Monstrous", "Unearthed Arcana", "Eberron", "Plane Shift", "Ravnica", "Theros"];

// character backgrounds on
let characterbg = ["Acolyte", "Anthropologist", "Archaeologist", "Charlatan", "City Watch", "Clan Crafter", "Cloistered Scholar", "Courtier",
  "Criminal", "Entertainer", "Faceless", "Faction Agent", "Far Traveler", "Folk Hero",
  "Gladiator", "Guild Artisan", "Guild Merchant", "Haunted One", "House Agent", "Hermit", "Inheritor",
  "Investigator", "Knight", "Knight og the Order", " Marine", "Mercenary Veteran", "Noble", "Outlander",
  "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urban Bounty Hunter", "Urchin"];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(0);
  textSize(32);

  text("click to see who", 50, 50);

}

function draw() {

}

function randomizer() {
  animating = false;

  if (adventurer[0]) {
    // pulls random name and then takes it out
    background(random(200, 255));
    randomIndex = int(random(adventurer.length));
    // text(adventurer[randomIndex].name + " " + adventurer[randomIndex].who , 50, 50);
    // adventurer.splice(randomIndex, 1);
    text(`${adventurer[randomIndex].name}
    ${adventurer[randomIndex].who}`, 50, 50);
    adventurer.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("They have all gone on their way", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
