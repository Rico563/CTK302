let x = 0;

function setup() {
  createCanvas(400, 800);
}

function draw() {
  background(220);

  push();
  translate(x, 0);
  avatar();
  pop();
  x = x + 5;
  if (x > width) {
    x = -300;
  }
}
function avatar(){
  fill('yellow');
  triangle(5, 125, 58, 110, 111, 125);
  line(58, 125, 58, 300);
  triangle(299, 125, 342, 115, 385, 125);
  line(342, 125, 342, 135);
  triangle(299, 135, 342, 145, 385, 135);
  line(342, 145, 342, 300);
  fill('blue');
  rect(130, 140, 50, 45, 3);
  fill('white');
  rect(130, 140, 50, 4, 3);
  fill('blue');
  rect(220, 140, 50, 45, 3);
  fill('white');
  rect(220, 140, 50, 4, 3);
  fill('blue');
  line(180, 165, 220, 165);
  rect(58, 223, 60, 70, 3);
  fill('white');
  rect(58, 223, 60, 4, 3);
  line(200, 165, 200, 200);
  fill('blue');
  rect(284, 223, 60, 27, 3);
  fill('white');
  rect(284, 223, 60, 4, 3);
  fill('blue');
  line(314, 250, 314, 310);
  fill('grey');
  ellipse(width/2,height/2-130,160,160);
  fill('black');
  rect(199, 117, 2, 73);
  line(200, 130, 238, 120);
  line(200, 130, 162, 120);
  line(238, 120, 246, 80);
  line(162, 120, 150, 80);

  fill(160, 82, 45);
  rect(150, 80, 40, 5);
  rect(246, 80, -40, 5);
  fill('white');
  ellipse(width/2,height/2-310,50,53);

}
