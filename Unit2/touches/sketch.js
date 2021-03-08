let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  frown = loadImage("assets/frown.jpeg");
  neutral = loadImage("assets/neutral.png");
  happy = loadImage("assets/surprized.png");
  ready = loadImage("assets/ready.jpeg");
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      image (frown, width/2, height/2);
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
       image (neutral, width/2, height/2);
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
      image (happy, width/2, height/2);
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
     image (ready, width/2, height/2);
      break ;


  }

}
