let startX, startY;
let currentX, currentY;

function setup() {
  createCanvas(500, 500);
  background(220);
  strokeWeight(2);
  frameRate(10); 
  startingPoint();
}

function draw() {
  let {diceA, diceB} = rollDice();

  let length = calculateLineLength(diceA, diceB);

  let direction;
  if ((diceA + diceB) % 2 === 0) {
    direction = 'horizontal';
  } else {
    direction = 'vertical';
  }

  drawLine(diceA, diceB, length, direction);
}

function startingPoint() {
  let {diceA, diceB} = rollDice();

  if (diceA === 6 && diceB === 6) {
    startX = 5; //5 nevis 0 ,lai sākumpunkts nav stūrī neredzams
    startY = 5;
  } else if (diceA === 6) {
    startX = 5;
    startY = diceB * 100;
  } else if (diceB === 6) {
    startX = diceA * 100;
    startY = 5;
  } else {
    startX = diceA * 100;
    startY = diceB * 100;
  }
  ellipse(startX, startY, 5, 5)

  currentX = startX;
  currentY = startY;
}

function rollDice() {
  let diceA = floor(random(1, 7)); 
  let diceB = floor(random(1, 7)); 
  return { diceA, diceB };
}

function calculateLineLength(A, B) {
  if (A === B) {
    return (3*A)*5;
  } else {
    return abs(3*A - B)*5;
  }
}

function drawLine(A, B, length, direction) {
  let newX = currentX;
  let newY = currentY;

  if (direction === 'horizontal') {
    if (A >= B) {
      newX = newX + length;
    } else {
      newX = newX - length;
    }
  } else { 
    if (A >= B) {
      newY = newY - length;
    } else {
      newY = newY + length;
    }
  }
  if (newX < 5 || newX > 495 || newY < 5 || newY > 495) {
    // uzzīmē aplīti līnijas beigās
    ellipse(currentX, currentY, 5, 5);

  
    startingPoint();
  } else {
  
    line(currentX, currentY, newX, newY);

  
    currentX = newX;
    currentY = newY;
  }
}

