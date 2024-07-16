var number_of_stars = 4000;
stars = []
var logo;

class Star {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = random(1.5,2);
    this.offset = random(-5, 5);
  }
  
  display() {
    stroke(255);
    this.offset += 0.05;
    strokeWeight(this.size);
    point(this.x + 3*sin(this.offset), this.y + 3*cos(this.offset), this.z);
  }
}

function setup() {
  createCanvas(600, 600, WEBGL);
  logo = loadImage("logo.png");
  var r = width / 3;
  for(var i=0;i<number_of_stars;i++) {
    var found = true;
    var x,y,z;
    while(found) {
      var s = random(TWO_PI);
      var t = random(TWO_PI);
      x = r * cos(s) * sin(t);
      y = r * sin(s) * sin(t);
      z = r * cos(t);
      if(y*y > random(160*160)){
        found = false;
      }
    }
    stars[i] = new Star(x, y, z);
      
  }
}

function draw() {
  background(0);
  push();
  rotateY(millis() / 4000);
  for(var i=0;i<number_of_stars;i++) {
    stars[i].display();
  }
  pop();
  scale(1/4);
  image(logo, -logo.width/2, -logo.height/2);
}


