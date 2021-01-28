let food, gym, music ;


function setup() {
  createCanvas(800, 800);
  food = loadImage("assets/food.jpeg");
  gym = loadImage("assets/gym.png");
  music = loadImage("assets/music.png");
}

function draw() {
background('lightblue');
image(food, width/2, height/2 , 200, 200);
image(gym, width/2, height/2 - 200, 200, 200);
image(music, width/2, height/2 + 200, 200, 200);

}
