let userHasClicked = false;

let riverSound;
let musicSound;
let metalSound;

let circleRiverX;
let circleRiverY;

let circleMusicX;
let circleMusicY;

let squareMetalX;
let squareMetalY;


function preload(){
  riverSound = loadSound("assets/river.wav");
  musicSound = loadSound("assets/music.mp3");
  metalSound = loadSound("assets/metal.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER);
  textStyle(BOLD);

  circleRiverX = random(width);
  circleRiverY = random(height);

  circleMusicX = random(width);
  circleMusicY = random(height);

  squareMetalX = random(width);
  squareMetalY = random(height);
}


function draw() {
  background("blue");

  fill('orange');
  circle(circleRiverX, circleRiverY, 100);

  fill('yellow');
  circle(circleMusicX, circleMusicY, 100);

  fill('red')
  rect(squareMetalX, squareMetalY, 100);

  if (userHasClicked == false){
    fill('black');
    text("Hello, click to start", width/2, height/2);
  } else {

      if(riverSound.isPlaying() == false){
         riverSound.play();
      }

      let distanceRiver = dist(mouseX, mouseY, circleRiverX, circleRiverY);
      let volumeRiver = map(distanceRiver, 0, 200, 1, 0);
      volumeRiver = constrain(volumeRiver, 0, 1);
      riverSound.setVolume(volumeRiver);


      if (musicSound.isPlaying() == false) {
      musicSound.play();
      }
      let distanceMusic = dist(mouseX, mouseY, circleMusicX, circleMusicY);
      let volumeMusic = map(distanceMusic, 0, 200, 1, 0);
      volumeMusic = constrain(volumeMusic, 0, 1);
      musicSound.setVolume(volumeMusic);


    if (metalSound.isPlaying() == false) {
      metalSound.play();
    }
    let distanceMetal = dist(mouseX, mouseY, squareMetalX, squareMetalY);
    let volumeMetal = map(distanceMetal, 0, 200, 1, 0);
    volumeMetal = constrain(volumeMetal, 0, 1);
    metalSound.setVolume(volumeMetal);
  }
}

function mouseClicked(){
  userHasClicked = true;
}