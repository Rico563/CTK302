let f1, f2;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("NewFonts/GoodMood.otf");
  textAlign(CENTER);
}

function draw() {
background(100);
textSize(48);
textFont (f1);
text('hello', width/2, height/2);



}
