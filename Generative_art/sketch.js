let cracks = [];
let walkers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(135, 206, 235);
  frameRate(30);

}


function draw() {
  for (let i = 0; i < 1; i++) {
    cracks.push(new Crack(random(width), random(height)));
  }

  for (let crack of cracks) {
    crack.move();
    crack.display();
  }


  for (let i = 0; i < 10; i++) {
    walkers.push(new Walker(random(width), random(height)));
  }

  for (let walker of walkers) {
    walker.move();
    walker.display();
  }
}




class Crack {
  constructor(x, y) {
    this.start = createVector(x, y); // Starting point of the crack
    this.end = createVector(x + random(-100, 100), y + random(-100, 300));
  }
 
  move() {
    this.start.x += random(-1, 1);
    this.start.y += random(1, 100);
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }

  display() {
    stroke(0);
    strokeWeight(1);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}



class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.col = this.generateRandomGreenColor();
  }

  generateRandomGreenColor() {
    // Define your specific hue range for greens (e.g., 90-150)
    let minHue = 50;
    let maxHue = 160;

    // Generate a random hue within the specified range
    let hue = Math.floor(random(minHue, maxHue + 1));

    // Generate random saturation and lightness
    let saturation = Math.random() * 100; // 0-100%
    let lightness = Math.random() * 50 + 10; // 10-100%

    // Convert HSL values to RGB and return color object
    return color(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  display() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, 10, 5);
  }
}


