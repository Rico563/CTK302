let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  //rect(x, 100, 100, 100);
  textSize(48);
  text("It's a me, Mario!", x, height/2);
  x = x + 5;

  x++;

  if ( x > width) {
    x = -200;
  }

}
