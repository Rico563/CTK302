let state = 0;

function setup() {
  createCanvas(600, 500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  switch (state) {
    case 0:
      background('red');
      text("What is Micheal Jackson's favorite demin store?", width / 2, height / 2);
      break;

    case 1:
      background('green');
      text("Billie Jeans!!", width / 2, height / 2);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
