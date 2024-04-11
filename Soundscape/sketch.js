let userHasClicked = false;

let mmetalSound;
function preload() {
  metalSound = loadSound('assets/metal.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(46);
  textFont('Courier New');
  textAlign(CENTER);
  metalSound.setVolume(0)

}

function draw() {

    background('hotpink');

    if (userHasClicked == false) {
      text(
        'Hi, please click to continue!',
        width / 2,
        height / 2
      )
    } else {
      if (metalSound.isPlaying() == false) {
      metalSound.play();
    }

    let targetVolume = map( //
      mouseX, //pele kustas no 0 lidz width
      0,
      width,
      0,  //skalums no 0 lidz 1
      1
    )
    metalSound.setVolume(targetVolume)

  }

}


function mouseClicked() {
  userHasClicked = true;
}




