2/**
 * Project 1 - Interactive Image
 * Name: Ameera Ahmad; 10/8;
 * Comments: The image is a 2D design of a brown cat. Using the left and right arrow keys you are able to move the sprite left and right.
 https://learning.oreilly.com/library/view/getting-started-with/9781457186769/ch03.html#ex-3-7
 */

// Global Variables go here
var x=0;
var y=0;
function setup() {
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
}
//movement of sprite 
function draw() {
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) { 
      x--;
    }
    else if (keyCode == LEFT_ARROW) { 
      x++;
    }
  }
  translate(x, y);
  // this function runs again and again (60x per second)
  background(200); //light gray background
  // add your image drawing code here
  //Body color
  fill(153, 102, 0); 
  //Body
  rect(150, 130, 150, 150); 
  //Nose Color
  fill(0); 
  //Nose
  triangle(225, 210, 210, 240, 240, 240); 
  //Whisker
  line(210, 215, 190, 205); 
  line(205, 230, 190, 225); 
  line(240, 230, 255, 225); 
  line(240, 215, 260, 205); 
  //Eye Color
  fill(208,202,140); 
  //Left Eye
  ellipse(195, 170, 30, 30);
  //Eye Color
  fill(167,160,121);
  //Left Eye
  ellipse(197,170,15,15);
  //Eye Color
  fill(208,202,140);
  //Right Eye
  ellipse(250, 170, 30, 30); 
  //Eye Color
  fill(167,160,121);
  //Right Eye
  ellipse(250,170,15,15);
  //Nose Color
  fill(231,84,128);
  //Nose
  arc(225,240, 15, 15, PI, TWO_PI);
  //Mouth Color
  fill(231,84,128);
  //Mouth
    arc(225,255, 35, 30, TWO_PI, PI);
}