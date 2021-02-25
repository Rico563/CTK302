let state = -1;
var mic;
var vol;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);
  vol = (mic.getLevel().toFixed(2));

  switch (state) {
    case -1:
      text("please click", width / 2, height / 2);
      break;

    case 0:
      text("shhhh!!!", width / 2, height / 2);
      if (vol > .08) {
        state = 1;
      }
      break;

    case 1:
      background('red');
      text("QUIET DOWN!!", width / 2, height / 2);
      timer++;
      if (timer > 3 * 60) {
        state = 0;
        timer = 0;
      }

      break;
  }
}

function mouseReleased() {
  if (state == -1) {
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
