let cars = [];
let maxCars = 8;
let maxTimer = 10 * 60;
let timer = 0;
let frogPos;
let state = 0;
let f1;
let song1, song2;

function preload() {
  song1 = loadSound("assets/Title.mp3");
  song2 = loadSound("assets/Game.mp3");
}

function setup() {

  createCanvas(800, 600);
  dojo = loadImage("assets/dojo.png")
  enemy = loadImage("assets/enemy.png")
  katana = loadImage("assets/katana.png")
  title = loadImage("assets/Title.jpeg")
  sun = loadImage("assets/sunset.jpeg")
  moon = loadImage("assets/night.jpeg")
  win = loadImage("assets/win.png")
  lose = loadImage("assets/lose.png")

  f1 = loadFont("assets/PumpkinStory.ttf");

  //song1.loop();
  song1.pause();
  //song2.loop();
  song2.pause();
  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);

}

function draw() {

  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      background('black');
      image(title, width / 2, height / 2, 800, 600);
      textSize(48);
      textFont(f1);
      fill('white');
      text("Click to Begin", width / 2, height / 2);
      textSize(36);
      text("Your enemies won't waver! Defeat them before they overpower you!", width / 2, height / 2 - 100, 400, 300);
      break;

    case 2:
      song1.pause();
      song2.play();
      state = 3;
      break;

    case 3:
      image(dojo, width / 2, height / 2);
      game();
      timer++;
      if (timer > maxTimer) {
        timer = 0;
        state = 6;
      }
      break;

    case 4:
      song2.pause();
      song1.play();
      state = 5;
      break;

    case 5: //win
      image(sun, width / 2, height / 2, 800, 600);
      image(win, width / 2 + 250, height / 2 + 100, 250, 400);
      fill('black');
      textSize(36);
      textFont(f1);
      text("Honor may not win power, but it wins respect. And respect earns power. (Click to Continue)", width / 2 - 100, height / 2 - 100, 300, 300);
      break;

    case 6:
      song2.pause();
      song1.play();
      state = 7;
      break;

    case 7: //lose
      image(moon, width / 2, height / 2, 800, 600);
      image(lose, width / 2 + 250, height / 2 + 100, 250, 400);
      fill('red');
      textSize(36);
      textFont(f1);
      text("Where life is more terrible than death, it is then the truest valor to dare to live. (Click to Try Again)", width / 2 - 100, height / 2 - 100, 300, 300);
      break;
  }

}

function mouseReleased() {
  switch (state) {
    case 1:
      state = 2;
      break;

    case 5:
      resetTheGame();
      state = 1;
      break;

    case 7:
      resetTheGame();
      state = 1;
      break;
  }
}

function resetTheGame() {
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function game() {
  image(dojo, width / 2, height / 2);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  //check to see array = 0
  if (cars.length == 0) {
    state = 4;
  }

  //this is frog
  checkForKeys();
  fill('green');
  image(katana, frogPos.x, frogPos.y, 75, 75);
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 6;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 6;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 6;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 6;

  //if (frogPos.x > width) frogPos.x = 0;
}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {
    //fill(this.col);
    //rect(this.pos.x, this.pos.y, this.width, 25);
    // textSize(this.width) ;
    // text("BOOHOO", this.pos.x, this.pos.y);
    image(enemy, this.pos.x, this.pos.y, 70, 70);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
function touchStarted() {
  getAudioContext().resume();
}
