function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

  function draw() {
    background('red');
    strokeWeight(2);
    fill(255, 213, 154);
    rect(0, 240, 400, 400);
    fill('yellow');
    triangle(5, 125, 58, 110, 111, 125);
    line(58, 125, 58, 300);
    triangle(299, 125, 342, 115, 385, 125);
    line(342, 125, 342, 135)
    triangle(299, 135, 342, 145, 385, 135);
    line(342, 145, 342, 300)
    fill('blue')
    rect(130, 140, 50, 45, 3);
    fill('white');
    rect(130, 140, 50, 4, 3);
    fill('blue');
    rect(220, 140, 50, 45, 3);
    fill('white');
    rect(220, 140, 50, 4, 3);
    fill('blue');
    line(180, 165, 220, 165)
    rect(58, 223, 60, 70, 3);
    fill('white');
    rect(58, 223, 60, 4, 3);
    line(200, 165, 200, 200);
    fill('blue');
    rect(284, 223, 60, 27, 3);
    fill('white');
    rect(284, 223, 60, 4, 3);
    fill('blue')
    line(314, 250, 314, 310);
    fill('grey')
    ellipse(width / 2, height / 2 + 70, 160, 160);
    fill('white');
    ellipse(width / 2, height / 2 - 110, 50, 53);
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
    ellipse(width / 2, height / 2 - 110, 50, 53);



    if (mouseIsPressed) {
      background(65, 105, 225);
      fill(244, 164, 96);
      rect(0, 240, 400, 400);
      fill('orange');
      triangle(5, 125, 58, 110, 111, 125);
      line(58, 125, 58, 300);
      triangle(299, 125, 342, 115, 385, 125);
      line(342, 125, 342, 135);
      triangle(299, 135, 342, 145, 385, 135);
      line(342, 145, 342, 300);
      fill(50, 205, 50);
      rect(130, 140, 50, 45, 3);
      fill('grey');
      rect(130, 140, 50, 4, 3);
      fill(50, 205, 50);
      rect(220, 140, 50, 45, 3);
      fill('grey');
      rect(220, 140, 50, 4, 3);
      fill(34, 139, 34);
      line(180, 165, 220, 165)
      rect(58, 223, 60, 70, 3);
      fill('grey');
      rect(58, 223, 60, 4, 3);
      line(200, 165, 200, 200);
      fill('green');
      rect(284, 223, 60, 27, 3);
      fill('grey');
      rect(284, 223, 60, 4, 3);
      fill('green')
      line(314, 250, 314, 310);
      fill(255, 222, 173);
      ellipse(width / 2, height / 2 + 70, 160, 160);
      fill('black');

      fill('white');
      ellipse(width / 2, height / 2 - 110, 50, 53);
      rect(199, 117, 2, 73);
      line(200, 130, 238, 140);
      line(200, 130, 162, 140);
      line(238, 140, 264, 130);
      line(162, 140, 135, 130);

      fill(160, 82, 45);
      rect(259, 130, 60, 5);
      rect(87, 130, 60, 5);

      fill('black');
      ellipse(width / 2 - 123, height / 2 - 102, 10, 10);
      ellipse(width / 2 - 96, height / 2 - 124, 10, 10);
      ellipse(width / 2 + 123, height / 2 - 131, 10, 10);
      ellipse(width / 2 + 99, height / 2 - 131, 10, 10);
      ellipse(width / 2 - 123, height / 2 - 1, 10, 10);
      rect(79, 98, 3, -30, 2);
      rect(106, 76, 3, -30, 2);
      rect(301, 69, 3, -30, 2);
      rect(325, 69, 3, -30, 2);
      rect(301, 39, 26, 3, 2);
      rect(79, 200, 3, -30, 2);
      stroke('black');
      strokeWeight(2);
      text('CTK', width / 2 - 30, height / 2 + 80);
      textSize(28);
    }
      // when the mouse isn't pressed!


    // this shows mouse location - comment it out when you're done!


  }






  // record the mouse location in console when clicked
