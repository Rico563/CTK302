let f1, f2, f3;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("NewFonts/GoodMood.otf");
  f2 = loadFont("NewFonts/Nougat.ttf");
  f3 = loadFont("NewFonts/PumpkinStory.ttf");
  textAlign(CENTER);
}

function draw() {
background(100);
textSize(48);
textFont (f1);
text('hello', width/2, height/2-70);

textFont(f2);
text('who are',width/2, height/2);

textFont(f3);
text('YOU', width/2, height/2+70);




}
