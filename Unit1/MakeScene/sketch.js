function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,204,255);
  text(mouseX + ", " + mouseY, 30, 30);
  fill(60,180,38);
    rect(0,260,400,400);
  fill('yellow');
  ellipse(width/2+147, height/2-135, 40,40)
  stroke('yellow')
  strokeWeight(3)
    strokeCap(PROJECT)
  line(347,40,347,30);
  line(347,90,347,100);
  line(322,65,312,65);
  line(372,65,382,65);
   strokeWeight(0)
  fill('white');
    ellipse(width/2+30,height/2-140,150,35);
    ellipse(width/2-83,height/2-160,120,20);
  fill(187,129,65);
    rect(42,135,170,150);
  rect(48,62,20,60);
 fill(85,52,43)
    triangle(23,135,127,25,231,135);
    rect(48,62,20,2);
    rect(134,230,30,55);
  rect(73,167,35,35);
  rect(157,167,35,35);
  fill('yellow');
    ellipse(width/2+100,height/2+65,20,20);
  fill('green');
    rect(299,275,2,34);
fill('orange')
  arc(width/2+88,height/2+65, 10, 10, 4, PI + QUARTER_PI, OPEN);
  arc(width/2+92,height/2+73, 10, 10, 4, PI + QUARTER_PI, OPEN);
  arc(width/2+100,height/2+78, 10, 10, 4, PI + QUARTER_PI, OPEN);
  arc(width/2+108,height/2+76, 10, 10, 4, PI + QUARTER_PI, OPEN);
    arc(width/2+112,height/2+69, 10, 10, 4, PI + QUARTER_PI, OPEN);
      arc(width/2+111,height/2+60, 10, 10, 4, PI + QUARTER_PI, OPEN);
    arc(width/2+106,height/2+54, 10, 10, 4, PI + QUARTER_PI, OPEN);
     arc(width/2+98,height/2+52, 10, 10, 4, PI + QUARTER_PI, OPEN);
    arc(width/2+92,height/2+58, 10, 10, 4, PI + QUARTER_PI, OPEN);

}
