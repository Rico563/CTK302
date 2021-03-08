let state = 0;
let timer = 0;

function setup() {
  createCanvas(1000, 500);
  textAlign(CENTER);
  textSize(36);
}

function draw() {
  switch (state) {
    case 0:
      background('red');
      text("What do gynecologist's and deaf people have in common?", width / 2, height / 2);
      break;

    case 1:
      background('green');
      text("They both read lips", width / 2, height / 2);
      break;
  }

  timer++;
  if (timer > 3 + 60) {
    timer = 0;
    state++;
    if (state > 1) {
      state = 0;
    }
  }

}
