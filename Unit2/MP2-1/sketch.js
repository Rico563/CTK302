let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/BorrachoTeRecuerdo.mp3");
  song2 = loadSound("assets/F-ckUpSomeCommas.mp3");
  song3 = loadSound("assets/VerySuperstitious.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}


function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(100);
  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      background('red');
      strokeWeight(2);
      fill(255, 213, 154);
      rect(0, 240, 800, 800);
      fill('brown');
      rect(0, 430, 800, 800);
      fill(244, 164, 96);
      rect(0, 615, 800, 800);
      line(50, 430, 50, 615);
      line(150, 430, 150, 615);
      line(250, 430, 250, 615);
      line(350, 430, 350, 615);
      line(450, 430, 450, 615);
      line(550, 430, 550, 615);
      line(650, 430, 650, 615);
      line(750, 430, 750, 615);
      line(0, 580, 100, 615);
      line(0, 530, 200, 615);
      line(0, 480, 300, 615);
      line(0, 430, 400, 615);
      line(100, 430, 500, 615);
      line(200, 430, 600, 615);
      line(300, 430, 700, 615);
      line(400, 430, 800, 615);
      line(500, 430, 800, 565);
      line(600, 430, 800, 515);
      line(700, 430, 800, 465);
      fill('yellow');
      triangle(205, 125, 258, 110, 311, 125);
      line(258, 125, 258, 300);
      triangle(499, 125, 542, 115, 585, 125);
      line(542, 125, 542, 135)
      triangle(499, 135, 542, 145, 585, 135);
      line(542, 145, 542, 300)
      fill('blue')
      rect(330, 140, 50, 45, 3);
      fill('white');
      rect(330, 140, 50, 4, 3);
      fill('blue');
      rect(420, 140, 50, 45, 3);
      fill('white');
      rect(420, 140, 50, 4, 3);
      fill('blue');
      line(380, 165, 420, 165)
      rect(258, 223, 60, 70, 3);
      fill('white');
      rect(258, 223, 60, 4, 3);
      line(400, 165, 400, 200);
      fill('blue');
      rect(484, 223, 60, 27, 3);
      fill('white');
      rect(484, 223, 60, 4, 3);
      fill('blue')
      line(514, 250, 514, 310);
      fill('grey')
      ellipse(width / 2, height / 2 - 130, 160, 160);
      fill('black');
      rect(399, 117, 2, 73);

      fill('white');
      ellipse(width / 2, height / 2 - 310, 50, 53);
      fill('grey');

      rect(50, 0, 10, 25);
      rect(40, 25, 50, 30, 10, 5, 5, 10);

      rect(750, 0, 10, 25);
      rect(720, 25, 50, 30, 5, 10, 10, 5);

      fill('black');
      textSize(28);
      text('CTK', width / 2 - 25, height / 2 - 120);
      line(400, 130, 438, 120);
      line(400, 130, 362, 120);
      line(438, 120, 446, 80);
      line(362, 120, 350, 80);

      fill(160, 82, 45);
      rect(350, 80, 40, 5);
      rect(406, 80, 40, 5);
      fill('white');
      ellipse(width / 2, height / 2 - 310, 50, 53);
      ellipse(width / 2, height / 2 + 250, 50, 53);
      line(400, 678, 400, 750);
      line(400, 700, 440, 690);
      line(400, 700, 360, 690);
      line(400, 750, 370, 790);
      line(400, 750, 430, 790);
      ellipse(width / 2 - 150, height / 2 + 300, 50, 53);
      line(250, 728, 250, 800);
      line(250, 750, 290, 740);
      line(250, 750, 210, 740);
      ellipse(width / 2 - 300, height / 2 + 250, 50, 53);
      line(100, 678, 100, 750);
      line(100, 700, 140, 690);
      line(100, 700, 60, 690);
      line(100, 750, 70, 790);
      line(100, 750, 130, 790);
      ellipse(width / 2 + 150, height / 2 + 300, 50, 53);
      line(550, 728, 550, 800);
      line(550, 750, 590, 740);
      line(550, 750, 510, 740);
      ellipse(width / 2 + 300, height / 2 + 250, 50, 53);
      line(700, 678, 700, 750);
      line(700, 700, 740, 690);
      line(700, 700, 660, 690);
      line(700, 750, 670, 790);
      line(700, 750, 730, 790);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      background('red');
      strokeWeight(2);
      fill(255, 213, 154);
      rect(0, 240, 800, 800);
      fill('brown');
      rect(0, 430, 800, 800);
      fill(244, 164, 96);
      rect(0, 615, 800, 800);
      line(50, 430, 50, 615);
      line(150, 430, 150, 615);
      line(250, 430, 250, 615);
      line(350, 430, 350, 615);
      line(450, 430, 450, 615);
      line(550, 430, 550, 615);
      line(650, 430, 650, 615);
      line(750, 430, 750, 615);
      line(0, 580, 100, 615);
      line(0, 530, 200, 615);
      line(0, 480, 300, 615);
      line(0, 430, 400, 615);
      line(100, 430, 500, 615);
      line(200, 430, 600, 615);
      line(300, 430, 700, 615);
      line(400, 430, 800, 615);
      line(500, 430, 800, 565);
      line(600, 430, 800, 515);
      line(700, 430, 800, 465);
      fill('yellow');
      triangle(205, 125, 258, 110, 311, 125);
      line(258, 125, 258, 300);
      triangle(499, 125, 542, 115, 585, 125);
      line(542, 125, 542, 135)
      triangle(499, 135, 542, 145, 585, 135);
      line(542, 145, 542, 300)
      fill('blue')
      rect(330, 140, 50, 45, 3);
      fill('white');
      rect(330, 140, 50, 4, 3);
      fill('blue');
      rect(420, 140, 50, 45, 3);
      fill('white');
      rect(420, 140, 50, 4, 3);
      fill('blue');
      line(380, 165, 420, 165)
      rect(258, 223, 60, 70, 3);
      fill('white');
      rect(258, 223, 60, 4, 3);
      line(400, 165, 400, 200);
      fill('blue');
      rect(484, 223, 60, 27, 3);
      fill('white');
      rect(484, 223, 60, 4, 3);
      fill('blue')
      line(514, 250, 514, 310);
      fill('grey')
      ellipse(width / 2, height / 2 - 130, 160, 160);
      fill('black');
      rect(399, 117, 2, 73);

      fill('white');
      ellipse(width / 2, height / 2 - 310, 50, 53);
      fill('grey');

      rect(50, 0, 10, 25);
      rect(40, 25, 50, 30, 10, 5, 5, 10);

      rect(750, 0, 10, 25);
      rect(720, 25, 50, 30, 5, 10, 10, 5);

      fill('black');
      textSize(28);
      text('CTK', width / 2 - 25, height / 2 - 120);
      line(400, 130, 438, 140);
      line(438, 140, 464, 130);
      line(400, 130, 362, 120);
      line(362, 120, 350, 80);

      fill(160, 82, 45);

      rect(350, 80, 40, 5);
      rect(459, 130, 60, 5);
      fill('white');
      ellipse(width / 2, height / 2 - 310, 50, 53);
      ellipse(width / 2, height / 2 + 300, 50, 53);
      line(400, 728, 400, 800);
      line(400, 750, 440, 740);
      line(400, 750, 360, 740);
      ellipse(width / 2 - 150, height / 2 + 250, 50, 53);
      line(250, 678, 250, 750);
      line(250, 700, 290, 690);
      line(250, 700, 210, 690);
      line(250, 750, 280, 790);
      line(250, 750, 220, 790);
      ellipse(width / 2 - 300, height / 2 + 300, 50, 53);
      line(100, 728, 100, 800);
      line(100, 750, 140, 740);
      line(100, 750, 60, 740);
      ellipse(width / 2 + 150, height / 2 + 250, 50, 53);
      line(550, 678, 550, 750);
      line(550, 700, 590, 690);
      line(550, 700, 510, 690);
      line(550, 750, 580, 790);
      line(550, 750, 520, 790);
      ellipse(width / 2 + 300, height / 2 + 300, 50, 53);
      line(700, 728, 700, 800);
      line(700, 750, 740, 740);
      line(700, 750, 660, 740);


      fill(44, 215, 67);
      triangle(765, 40, 515, 15, 515, 75);
      fill('grey');
      rect(750, 0, 10, 25);
      rect(720, 25, 50, 30, 5, 10, 10, 5);
      break;

    case 4:
      background('red');
      strokeWeight(2);
      fill(255, 213, 154);
      rect(0, 240, 800, 800);
      fill('brown');
      rect(0, 430, 800, 800);
      fill(244, 164, 96);
      rect(0, 615, 800, 800);
      line(50, 430, 50, 615);
      line(150, 430, 150, 615);
      line(250, 430, 250, 615);
      line(350, 430, 350, 615);
      line(450, 430, 450, 615);
      line(550, 430, 550, 615);
      line(650, 430, 650, 615);
      line(750, 430, 750, 615);
      line(0, 580, 100, 615);
      line(0, 530, 200, 615);
      line(0, 480, 300, 615);
      line(0, 430, 400, 615);
      line(100, 430, 500, 615);
      line(200, 430, 600, 615);
      line(300, 430, 700, 615);
      line(400, 430, 800, 615);
      line(500, 430, 800, 565);
      line(600, 430, 800, 515);
      line(700, 430, 800, 465);
      fill('yellow');
      triangle(205, 125, 258, 110, 311, 125);
      line(258, 125, 258, 300);
      triangle(499, 125, 542, 115, 585, 125);
      line(542, 125, 542, 135)
      triangle(499, 135, 542, 145, 585, 135);
      line(542, 145, 542, 300)
      fill('blue')
      rect(330, 140, 50, 45, 3);
      fill('white');
      rect(330, 140, 50, 4, 3);
      fill('blue');
      rect(420, 140, 50, 45, 3);
      fill('white');
      rect(420, 140, 50, 4, 3);
      fill('blue');
      line(380, 165, 420, 165)
      rect(258, 223, 60, 70, 3);
      fill('white');
      rect(258, 223, 60, 4, 3);
      line(400, 165, 400, 200);
      fill('blue');
      rect(484, 223, 60, 27, 3);
      fill('white');
      rect(484, 223, 60, 4, 3);
      fill('blue')
      line(514, 250, 514, 310);
      fill('grey')
      ellipse(width / 2, height / 2 - 130, 160, 160);
      fill('black');
      rect(399, 117, 2, 73);

      fill('white');
      ellipse(width / 2, height / 2 - 310, 50, 53);
      fill('grey');

      rect(50, 0, 10, 25);
      rect(40, 25, 50, 30, 10, 5, 5, 10);

      rect(750, 0, 10, 25);
      rect(720, 25, 50, 30, 5, 10, 10, 5);

      fill('black');
      textSize(28);
      text('CTK', width / 2 - 25, height / 2 - 120);
      line(400, 130, 438, 120);
      line(400, 130, 362, 120);
      line(438, 120, 446, 80);
      line(362, 120, 350, 80);

      fill(160, 82, 45);
      rect(350, 80, 40, 5);
      rect(406, 80, 40, 5);
      fill('white');
      ellipse(width / 2, height / 2 - 310, 50, 53);
      ellipse(width / 2, height / 2 + 250, 50, 53);
      line(400, 678, 400, 750);
      line(400, 700, 440, 690);
      line(400, 700, 360, 690);
      line(400, 750, 370, 790);
      line(400, 750, 430, 790);
      ellipse(width / 2 - 150, height / 2 + 300, 50, 53);
      line(250, 728, 250, 800);
      line(250, 750, 290, 740);
      line(250, 750, 210, 740);
      ellipse(width / 2 - 300, height / 2 + 250, 50, 53);
      line(100, 678, 100, 750);
      line(100, 700, 140, 690);
      line(100, 700, 60, 690);
      line(100, 750, 70, 790);
      line(100, 750, 130, 790);
      ellipse(width / 2 + 150, height / 2 + 300, 50, 53);
      line(550, 728, 550, 800);
      line(550, 750, 590, 740);
      line(550, 750, 510, 740);
      ellipse(width / 2 + 300, height / 2 + 250, 50, 53);
      line(700, 678, 700, 750);
      line(700, 700, 740, 690);
      line(700, 700, 660, 690);
      line(700, 750, 670, 790);
      line(700, 750, 730, 790);

      fill(209, 128, 48);
      triangle(45, 40, 250, 15, 250, 75);
      fill('grey');
      rect(40, 25, 50, 30, 10, 5, 5, 10);
      rect(50, 0, 10, 25);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      background('red');
      strokeWeight(2);
      fill(255, 213, 154);
      rect(0, 240, 800, 800);
      fill('brown');
      rect(0, 430, 800, 800);
      fill(244, 164, 96);
      rect(0, 615, 800, 800);
      line(50, 430, 50, 615);
      line(150, 430, 150, 615);
      line(250, 430, 250, 615);
      line(350, 430, 350, 615);
      line(450, 430, 450, 615);
      line(550, 430, 550, 615);
      line(650, 430, 650, 615);
      line(750, 430, 750, 615);
      line(0, 580, 100, 615);
      line(0, 530, 200, 615);
      line(0, 480, 300, 615);
      line(0, 430, 400, 615);
      line(100, 430, 500, 615);
      line(200, 430, 600, 615);
      line(300, 430, 700, 615);
      line(400, 430, 800, 615);
      line(500, 430, 800, 565);
      line(600, 430, 800, 515);
      line(700, 430, 800, 465);
      fill('yellow');
      triangle(205, 125, 258, 110, 311, 125);
      line(258, 125, 258, 300);
      triangle(499, 125, 542, 115, 585, 125);
      line(542, 125, 542, 135)
      triangle(499, 135, 542, 145, 585, 135);
      line(542, 145, 542, 300)
      fill('blue')
      rect(330, 140, 50, 45, 3);
      fill('white');
      rect(330, 140, 50, 4, 3);
      fill('blue');
      rect(420, 140, 50, 45, 3);
      fill('white');
      rect(420, 140, 50, 4, 3);
      fill('blue');
      line(380, 165, 420, 165)
      rect(258, 223, 60, 70, 3);
      fill('white');
      rect(258, 223, 60, 4, 3);
      line(400, 165, 400, 200);
      fill('blue');
      rect(484, 223, 60, 27, 3);
      fill('white');
      rect(484, 223, 60, 4, 3);
      fill('blue')
      line(514, 250, 514, 310);
      fill('grey')
      ellipse(width / 2, height / 2 - 130, 160, 160);
      fill('black');
      rect(399, 117, 2, 73);

      fill('white');
      ellipse(width / 2, height / 2 - 310, 50, 53);
      fill('grey');

      rect(50, 0, 10, 25);
      rect(40, 25, 50, 30, 10, 5, 5, 10);

      rect(750, 0, 10, 25);
      rect(720, 25, 50, 30, 5, 10, 10, 5);

      fill('black');
      textSize(28);
      text('CTK', width / 2 - 25, height / 2 - 120);
      line(400, 130, 438, 120);
      line(400, 130, 362, 120);
      line(438, 120, 446, 80);
      line(362, 120, 350, 80);

      fill(160, 82, 45);
      rect(350, 80, 40, 5);
      rect(406, 80, 40, 5);
      fill('white');
      ellipse(width / 2, height / 2 - 310, 50, 53);
      ellipse(width / 2, height / 2 + 250, 50, 53);
      line(400, 678, 400, 750);
      line(400, 700, 440, 690);
      line(400, 700, 360, 690);
      line(400, 750, 370, 790);
      line(400, 750, 430, 790);
      ellipse(width / 2 - 150, height / 2 + 300, 50, 53);
      line(250, 728, 250, 800);
      line(250, 750, 290, 740);
      line(250, 750, 210, 740);
      ellipse(width / 2 - 300, height / 2 + 250, 50, 53);
      line(100, 678, 100, 750);
      line(100, 700, 140, 690);
      line(100, 700, 60, 690);
      line(100, 750, 70, 790);
      line(100, 750, 130, 790);
      ellipse(width / 2 + 150, height / 2 + 300, 50, 53);
      line(550, 728, 550, 800);
      line(550, 750, 590, 740);
      line(550, 750, 510, 740);
      ellipse(width / 2 + 300, height / 2 + 250, 50, 53);
      line(700, 678, 700, 750);
      line(700, 700, 740, 690);
      line(700, 700, 660, 690);
      line(700, 750, 670, 790);
      line(700, 750, 730, 790);

      fill(209, 128, 48);
      triangle(45, 40, 250, 15, 250, 75);
      fill('grey');
      rect(40, 25, 50, 30, 10, 5, 5, 10);
      rect(50, 0, 10, 25);
      break;

  }
}


function mouseReleased() {
  state++;
  if (state > 5) state = 0;

  song1.pause();
  song2.pause();
  song3.pause();

}
