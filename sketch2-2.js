// You meet an adventurer
let adventurer = [{
  name: "Gin-Gin Mule",
  who: "The Thrill Seeking Singer"
}, {
  name: "Ozerin Everlight",
  who: "The Charming Drifter"
}, {
  name: "Asphodel Nettle",
  who: "The Ghostly Protector"
}, {
  name: "Helios Sterling",
  who: "The Crafty Scholar"
}, {
  name: "Ura Azir-Keiran",
  who: "The Curious Tinkerer"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to see who", 50, 50);

}

function draw() {

}

function mousePressed() {

  if (adventurer[0]) {
    // pulls random name and then takes it out
    background(random(200, 255));
    randomIndex = int(random(adventurer.length));
    text(adventurer[randomIndex].name, 50, 50);
    adventurer.splice(randomIndex, 1);
  } else{
    background(random(200, 255));
    text("They have all gone their way", 50, 50);
  }
}
