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



}

function draw() {

}

function mousePressed() {
  background( random(200,255))
  randomIndex = int(random(adventurer.length));
  text(adventurer[randomIndex].name, 50, 50);
  adventurer.splice(randomIndex, 1);
}
