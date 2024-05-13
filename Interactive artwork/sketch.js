let cracks =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255); // Blue background
}

function draw() {
  // Draw all the cracks
  for (let i = 0; i < cracks.length; i++) {
    cracks[i].display();
  }
}

function mouseClicked() {
  // Add a new crack at the mouse position
  cracks.push(new Crack(mouseX, mouseY));
}

class Crack {
    constructor(x, y) {
      this.start = createVector(x, y); // Starting point of the crack
      this.numSegments = random(1, 8); // Random number of segments
      this.maxLength = random(30, 100); // Maximum length of each segment
      //this.opacity = 255; // Initial opacity
      //this.speed = random(1, 3); // Random speed
      this.generateSegments();
    }
  
    generateSegments() {
        this.segments = []; // Array to store line segments
        let currentPos = this.start;
        for (let i = 0; i < this.numSegments; i++) {
        let nextPos = p5.Vector.random2D().mult(random(0.5, 1) * this.maxLength); //random direction and lenght
        nextPos.add(currentPos);
        this.segments.push(nextPos);
        currentPos = nextPos;
        }
    }
  
    display() { 
        beginShape();
        noFill();
        stroke(255); // White stroke
        strokeWeight(random(1, 3));
        for (let i = 1; i < this.segments.length; i++) {
            let x = this.segments[i].x;
            let y = this.segments[i].y;
            vertex(x, y);

      }
      endShape();
      //update crack position
      let lastSegment = this.segments[this.segments.length - 1];
      lastSegment.add(p5.Vector.random2D().setMag(this.speed));
    }
  }
  
  function mouseClicked() {
    // Create cracks at the mouse position
    for (let i = 0; i < 5; i++) { // Generate 5 cracks
      cracks.push(new Crack(mouseX, mouseY));
    }
  }