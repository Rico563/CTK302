function setup() {
  createCanvas(400, 800);
}

function draw() {

  background('red');
  strokeWeight(2);
  fill(255, 213, 154);
  rect(0, 240, 400, 800);
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
  fill('black');
  textSize(12);
  strokeWeight(1);
  let s = 'This is Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez. Normally, Stick people are pretty dull and boring people. Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez is different. After watching the Disney movie "Soul", he wants to do more than to be just another stickman. He found a drumset on Ebay and got to playing. All the neighboring stickman and stickwomen heard the unfamiliar sounds and had been drawn the pleasurable rhythm. Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez was getting into the zone and before he new it, literal music notes manifested out of thin air and colors started to change. For once in the world of stick-people kind, it was not boring, and it was all thanks to Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez.'
  text(s, 10, 400, 390, 200);

  if (mouseIsPressed){
    background(65, 105, 225);
    fill(244, 164, 96);
    rect(0, 240, 400, 800);
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
    line(180, 165, 220, 165);
    rect(58, 223, 60, 70, 3);
    fill('grey');
    rect(58, 223, 60, 4, 3);
    line(200, 165, 200, 200);
    fill('green');
    rect(284, 223, 60, 27, 3);
    fill('grey');
    rect(284, 223, 60, 4, 3);
    fill('green');
    line(314, 250, 314, 310);
    fill(255, 222, 173);
    ellipse(width/2,height/2-130,160,160);
    fill('white');
    ellipse(width/2,height/2-310,50,53);
    fill('black');
    rect(199, 117, 2, 73);
    line(200, 130, 238, 140);
    line(200, 130, 162, 140);
    line(238, 140, 264, 130);
    line(162, 140, 135, 130);

    fill(160, 82, 45);
    rect(259, 130, 60, 5);
    rect(87, 130, 60, 5);

    fill('black');
    ellipse(width/2-123,height/2-302,10,10);
  ellipse(width/2-96,height/2-324,10,10);
  ellipse(width/2+123,height/2-331,10,10);
  ellipse(width/2+99,height/2-331,10,10);
  ellipse(width/2-123,height/2-201,10,10);
    rect(79, 98, 3, 30, 2);
    rect(106, 46, 3, 30, 2);
    rect(301, 39, 3, 30, 2);
    rect(325, 39, 3, 30, 2);
    rect(301, 39, 26, 3, 2);
    rect(79, 170, 3, 30, 2);
  stroke('black');
    strokeWeight(2);
    textSize(28);
    text('CTK', width/2-25,height/2-120);
    textSize(12);
    strokeWeight(1);
    let s = 'This is Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez. Normally, Stick people are pretty dull and boring people. Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez is different. After watching the Disney movie "Soul", he wants to do more than to be just another stickman. He found a drumset on Ebay and got to playing. All the neighboring stickman and stickwomen heard the unfamiliar sounds and had been drawn the pleasurable rhythm. Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez was getting into the zone and before he new it, literal music notes manifested out of thin air and colors started to change. For once in the world of stick-people kind, it was not boring, and it was all thanks to Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez.'
    text(s, 10, 400, 390, 200);
    

  }
  else {

    background('red');
    strokeWeight(2);
    fill(255, 213, 154);
    rect(0, 240, 400, 800);
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
    rect(150, 80, -40, 5);
    rect(246, 80, 40, 5);
    fill('white');
    ellipse(width/2,height/2-310,50,53);
    textSize(12);
    strokeWeight(1);
    let s = 'This is Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez. Normally, Stick people are pretty dull and boring people. Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez is different. After watching the Disney movie "Soul", he wants to do more than to be just another stickman. He found a drumset on Ebay and got to playing. All the neighboring stickman and stickwomen heard the unfamiliar sounds and had been drawn the pleasurable rhythm. Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez was getting into the zone and before he new it, literal music notes manifested out of thin air and colors started to change. For once in the world of stick-people kind, it was not boring, and it was all thanks to Stick-Man Esteban Julio Ricardo Montoya de la Rosa Ramírez.'
    text(s, 10, 400, 390, 200);

}

}
