let canvas;

function setup() {
  canvas = createCanvas(500, 500); // Create a 500x500 canvas
  centerCanvas(canvas);
  background(255);                                               
}

function centerCanvas(canvas) {
  // Calculate the center position
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  // Position the canvas
  canvas.position(x, y);
}

function draw() {

  let diceA = floor(random(1, 7)); // Random number between 1 and 6 for dice A
  let diceB = floor(random(1, 7)); // Random number between 1 and 6 for dice B

  // Calculate coordinates based on the value of dice A and dice B
  let startX = (diceA == 6) ? 0 : diceA * 100;
  let startY = (diceB == 6) ? 0 : diceB * 100;

  // Determine the length of the line
  let length;
  if (diceA != diceB) {
    length = abs(diceA - diceB) * 10;
  } else {
    length = 2 * diceB * 10;
  }

  // Determine the direction and draw the line
  stroke(0); // Set the stroke color to black
  strokeWeight(2); // Set the stroke weight

  if ((diceA + diceB) % 2 == 0) { // Sum is even
    if (diceA >= diceB) {
      line(startX, startY, startX + length, startY); // Horizontal to the right
    } else {
      line(startX, startY, startX - length, startY); // Horizontal to the left
    }
  } else { // Sum is odd
    if (diceA >= diceB) {
      line(startX, startY, startX, startY - length); // Vertical upward
    } else {
      line(startX, startY, startX, startY + length); // Vertical downward
    }
  }

  // For debugging purposes, we can log the values and coordinates
  console.log(`Dice A: ${diceA}, Dice B: ${diceB}`);
  console.log(`Coordinates: (${startX}px, ${startY}px)`);
  console.log(`Line length: ${length}px`);
}

// Ensure the canvas is re-centered if the window is resized
function windowResized() {
  centerCanvas(canvas);
}