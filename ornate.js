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
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to see who", 50, 50);

}

function draw() {
  if(animating == true){
    ellipse (random(width), random(height), random(50,200))
    noStroke();
  }

}

function randomizer(){
animating = false;

  if (adventurer[0]) {
    // pulls random name and then takes it out
    background(random(200, 255));
    randomIndex = int(random(adventurer.length));
    // text(adventurer[randomIndex].name + " " + adventurer[randomIndex].who , 50, 50);
    // adventurer.splice(randomIndex, 1);
    text(`${adventurer[randomIndex].name}
    ${adventurer[randomIndex].who}` , 50, 50);
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
