let diceA, diceB;
let startX, startY;
let endX, endY;

function setup() {
  createCanvas(500, 500);
  background(220);
  rollDice();

  if (diceA >= 1 && diceA <= 5 && diceB >= 1 && diceB <= 5) {
    startX = diceA * 100;
    startY = diceB * 100;

  } if (diceA == 6) {
    startX = 0;
    startY = diceB * 100;
  } if (diceB == 6) {
    startX = diceA * 100;
    startY = 0;
  } if (diceA == 6 && diceB == 6) {
    startX = 0;
    startY = 0;
  }

  
}

function draw() {
  ellipse(startX, startY, 5, 5);
}


function rollDice() {
  diceA = int(random(1, 7));
  diceB = int(random(1, 7));

  console.log("Dice A:", diceA);
  console.log("Dice B:", diceB);
}