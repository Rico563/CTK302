let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(48);
}

function draw() {
  switch (state) {
    case 0:
    background('red');
    text("joke", width / 2, height/2);
    break;

    case 1:
    background('green');
    text("joke ends", width/2, height/2);
    break;
  }

}

timer++;
if (timer > 3 + 60) {
  state++;

}

function mouseReleased(){
  state++;
  if (state >1) {
    state = 0;
  }
}