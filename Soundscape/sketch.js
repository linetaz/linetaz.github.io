let userHasClicked = false;

let riverSound;
let birdSound;

let circleRiverX;
let circleRiverY;

let circleBirdsX;
let circleBirdsY;

function preload() {
  riverSound = loadSound('assets/river.wav');
  birdSound = loadSound('assets/birds.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(46);
  textFont('Courier New');
  textAlign(CENTER);
  textStyle(BOLD);
  
  circleRiverX = random(width);
  circleRiverY = random (height);

  circleBirdsX = random(width);
  circleBirdsY = random(height);
}

function draw() {
  background('hotpink');

  circle = (circleRiverX, circleRiverY, 80);
  circle = (circleBirdsX, circleBirdsY, 80);

  if (userHasClicked == false) {
    text(
      'Hi, please click to continue!',
      width / 2,
      height / 2
    )
  } else {
    if (riverSound.isPlaying() == false) {
      riverSound.play();
    }

    let distanceRiver = dist(mouseX, mouseY, circleRiverX, circleRiverY);
    let volumeRiver = map(distancRiver, 0, 200, 1, 0);
    volumeRiver = constrain(volumeRiver, 0, 1);
    riverSound.setVolume(volumeRiver);



  if (birdSound.isPlaying() == false) {
      birdSound.play();
  }
  let distanceBirds = dist(mouseX, mouseY, circleBirdsX, circleBirdsY);
  let volumeBirds = map(distanceBirds, 0, 200, 1, 0);
  volumeBirds = constrain(volumeBirds, 0, 1);
  birdSound.setVolume(volumeBirds);
}


}


function mouseClicked() {
  userHasClicked = true;
}