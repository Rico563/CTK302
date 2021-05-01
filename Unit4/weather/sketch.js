// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temp = 0;
var humidity = 0;
var pressure = 0;
var lat = 0;
var lon = 0;


function setup() {
  createCanvas(500, 500);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago%20Heights,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=f5d70e2cce025be7dd3ced952222b8f3'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humidity = weather.main.humidity;
  pressure = weather.main.pressure;
  lat = weather.coord.lat;
  lon = weather.coord.lon;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('#0798e9');
      fill('black');
      textSize(16);
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temp, 20, 60);
      text("humidity is " + humidity, 20, 80);
      text("pressure is " + pressure, 20, 100);
      text("latitude is " + lat, 20, 120);
      text("longitude is " + lon, 20, 140);


      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);


      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}
