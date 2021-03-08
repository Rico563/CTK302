let state = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background('grey');
      text('state 0', 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(random(255), 0, 0);
          rect(i * 50 + 10, j * 50 + 10, 25, 5);
        }
      }
      break;

    case 1:
      background('red');
      text('state 1', 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(0, random(255), 0);
          rect(i * 50 + 10, j * 50 + 10, 40, 15);
        }
      }
      break;

    case 2:
      background('green');
      text('state 2', 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(0, 0, random(255));
          rect(i * 30 + 10, j * 30 + 10, 10, 25);
        }
      }
      text('state 2', 100, 100);
      break;

    case 3:
      background('blue');
      text('state 3', 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(random(255), random(255), random(255));
          ellipse(i * 50 + 10, j * 50 + 10, 25, 10);
        }
      }
      text('state 3', 100, 100);
      break;

    case 4:
      background('yellow');
      text('state 4', 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          ellipse(i * 60 + 10, j * 40 + 10, 30, 25);
        }
      }
      text('state 4', 100, 100);
      break;
  }
}


function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
