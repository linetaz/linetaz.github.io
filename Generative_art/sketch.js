let sticks= [];
let walkers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(135, 206, 235);
  frameRate(30);
  saveCanvas

}


function draw() {
  for (let i = 0; i < 1; i++) {
    sticks.push(new Stick(random(width), random(height)));
  }

  for (let stick of sticks) {
    stick.move();
    stick.display();
  }


  for (let i = 0; i < 10; i++) {
    walkers.push(new Walker(random(width), random(height)));
  }

  for (let walker of walkers) {
    walker.move();
    walker.display();
  }
}




class Stick {
  constructor(x, y) {
    this.start = createVector(x, y); //līnijas sākumpunkts
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
    let minHue = 50;
    let maxHue = 160;

    let hue = Math.floor(random(minHue, maxHue + 1));

    let saturation = Math.random() * 100; 
    let lightness = Math.random() * 50 + 10;


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


