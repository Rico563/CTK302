let myState = 0;
let myTimer = 0;
let car;

function setup() {
  createCanvas(500, 500);
  car = loadImage("assets/Porsche911.jpeg");
  rio = loadImage("assets/rio.jpeg");
  cena = loadImage("assets/Cena.jpg");
  imageMode(CENTER);
}

function draw() {
  switch (myState) {

    case 0:
      background('silver');
      image (car, width/2, height/2);
      myTimer++;
      if (myTimer > 3 * 60) {
        myTimer = 0;
        myState = 1;
      }
      break;

    case 1:
      background('purple');
      image (rio, width/2, height/2);
      myTimer++;
      if (myTimer > 1 * 60) {
        myTimer = 0;
        myState = 2;
      }
      break;

    case 2:
      background('orange');
      image (cena, width/2, height/2);
      myTimer++;
      if (myTimer > 2 * 60) {
        myTimer = 0;
        myState = 0;
      }
      break;

    }
  }
