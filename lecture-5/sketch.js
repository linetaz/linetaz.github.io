let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage("./photo.jpg");
}


function setup() {
    createCanvas(
        windowWidth, windowHeight
    );
    
}

function draw() {

    image(img, 0, 0, width, height);   // Draw the image.


    if (
        mouseX < width/2
        &&           //AND operator
        mouseY < height/2
        )  {
       circle(mouseX, mouseY, 50);
    } 

    if (
        mouseX > width/2
        &&           //AND operator
        mouseY > height/2
        )  {
       square(mouseX, mouseY, 50);
    } 

}
