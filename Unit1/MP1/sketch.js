function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {


    background(100);
    fill('green');
    ellipse(width/2, height/2, 300, 300);
      stroke('purple');
      strokeWeight(3);
      line(width/2,height/2,0,5);
      line(width/2,height/2,60,5)
      line(width/2,height/2,120,5)
     line(width/2,height/2,180,5)
     line(width/2,height/2,240,5)
     line(width/2,height/2,300,5)
     line(width/2,height/2,360,5)
     line(width/2,height/2,400,5)
     line(width/2,height/2,460,5)
     line(width/2,height/2,520,5)
     line(width/2,height/2,580,5)
     line(width/2,height/2,640,5)
     line(width/2,height/2,700,5)
     line(width/2,height/2,760,5)
    stroke('blue')
     line(width/2,height/2,820,5)
     line(width/2,height/2,880,5)
     line(width/2,height/2,940,5)
     line(width/2,height/2,1000,5)
     line(width/2,height/2,1060,5)
     line(width/2,height/2,1120,5)
     line(width/2,height/2,1180,5)
     line(width/2,height/2,1240,5)
     line(width/2,height/2,1300,5)
     line(width/2,height/2,1360,5)
     line(width/2,height/2,1420,5)


  if (mouseIsPressed) {
    background('red');
    fill('purple');
    ellipse(width/2, height/2, 300, 300);
      stroke('yellow');
      line(width/2,height/2,0,5);
      line(width/2,height/2,60,5)
      line(width/2,height/2,120,5)
     line(width/2,height/2,180,5)
     line(width/2,height/2,240,5)
     line(width/2,height/2,300,5)
     line(width/2,height/2,360,5)
     line(width/2,height/2,400,5)
     line(width/2,height/2,460,5)
     line(width/2,height/2,520,5)
     line(width/2,height/2,580,5)
     line(width/2,height/2,640,5)
     line(width/2,height/2,700,5)
     line(width/2,height/2,760,5)
    stroke('orange')
     line(width/2,height/2,820,5)
     line(width/2,height/2,880,5)
     line(width/2,height/2,940,5)
     line(width/2,height/2,1000,5)
     line(width/2,height/2,1060,5)
     line(width/2,height/2,1120,5)
     line(width/2,height/2,1180,5)
     line(width/2,height/2,1240,5)
     line(width/2,height/2,1300,5)
     line(width/2,height/2,1360,5)
     line(width/2,height/2,1420,5)

  } else {
    // when the mouse isn't pressed!
    fill(0);
    text(mouseX + ", " + mouseY, 40, 40);
  }

  // this shows mouse location - comment it out when you're done!

  
}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
