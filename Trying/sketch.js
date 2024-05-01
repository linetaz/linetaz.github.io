var shape = false;

function setup() {
    createCanvas(400, 400);
    background(255, 193, 242);
}

function draw() {
    let r = random(0, 255);
    let b = random(0, 255)
    let g = random(0, 255)
    fill(r, b, g);


    if (shape == false) {
        ellipse(mouseX, mouseY, 30, 30);
    }
    if (shape == true) {
        print("test");
        rect(mouseX, mouseY, 30, 30);

    }



}

function mousePressed() {
    shape = true;
}
function keyPressed() {
    clear(255, 193, 242);
}

