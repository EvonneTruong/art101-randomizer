class Spark {
  constructor(_xPos, _yPos, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
  }

  display(){
    push();
    scale(this.size);
  translate (this.xPos, this.yPos)

    //create the image
    fill(246,55,90);
    noStroke();
    beginShape();
    vertex(80,100);
     quadraticVertex(85, 85, 100, 80);
      quadraticVertex(85, 75, 80, 60);
     quadraticVertex(75, 75, 60, 80);
    quadraticVertex(75, 85, 80,100);
    endShape();
  }
}
