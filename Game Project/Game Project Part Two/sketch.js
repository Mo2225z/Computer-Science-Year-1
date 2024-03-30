/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var speed = 1

var speed2 = 1

var speed3 = 1

var speed4 = 1

var gameChar_x;
var gameChar_y;

var gameChar_x2;
var gameChar_y2;

var gameChar_x3;
var gameChar_y3;

var gameChar_x4;
var gameChar_y4;

var gameChar_x5;
var gameChar_y5;

var gameChar_x6;
var gameChar_y6;

function setup()
{
	createCanvas(400, 600);
    
    gameChar_x = 45;
	gameChar_y = 135;
    
    gameChar_x2 = 245;
	gameChar_y2 = 137;
    
    gameChar_x3 = 45;
    gameChar_y3 = 337;
    
    gameChar_x4 = 245;
    changeDirection = false;
	gameChar_y4 = 337;
    
    gameChar_x5 = 45;
	gameChar_y5 = 537;
    
    gameChar_x6 = 245;
	gameChar_y6 = 537;
    
    
}

function draw()
{
	background(255);

	//Standing, facing frontwards
    
    

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	//Add your code here ...
  
    //Face
    
    fill(255,255,0);
    ellipse(gameChar_x, gameChar_y - 30, 50);
    
    //Eyes
    
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 35, 5);
    
    ellipse(gameChar_x -10, gameChar_y - 35, 5);
    
    fill(200,0,0);
    ellipse(gameChar_x, gameChar_y - 15, 10);
    
    //Mouth
    
    fill(0);
    triangle(gameChar_x - 20, gameChar_y -25, gameChar_x + 20, gameChar_y -25, gameChar_x, gameChar_y - 8);
    
    //Tongue
    
    fill(200,0,0);
    ellipse(gameChar_x, gameChar_y - 15, 10);
    

    

    
    

	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

    
	//Add your code here ...
    
    
    
    fill(255,255,0);
    ellipse(gameChar_x2, gameChar_y2 - 30, 50);
    
    fill(0);
    ellipse(gameChar_x2 + 10, gameChar_y2 - 35, 5);
    
    ellipse(gameChar_x2 -10, gameChar_y2 - 35, 5);
    
    fill(200,0,0);
    ellipse(gameChar_x2, gameChar_y2 - 15, 10);
    
    fill(0);
    triangle(gameChar_x2 - 20, gameChar_y2 -25, gameChar_x2 + 20, gameChar_y2 -25, gameChar_x2, gameChar_y2 - 8);
    
     fill(200,0,0);
    ellipse(gameChar_x2, gameChar_y2 - 15, 10);
    
    gameChar_y2 = gameChar_y2 + speed;
    
		if(gameChar_y2 - 5 >= 150 || gameChar_y2 + 5 <= 100)
            
             speed = -speed;
            

    

    
    
    
    
	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	//Add your code here ...
   
  fill(255,255,0);
    ellipse(gameChar_x3, gameChar_y3 - 30, 50);
    
    fill(0);
    ellipse(gameChar_x3 - 10, gameChar_y3 - 35, 5);
    
    fill(255,255,255);
    triangle(gameChar_x3 - 25, gameChar_y3 -30, gameChar_x3 + 2, gameChar_y3 -25, gameChar_x3 - 22, gameChar_y3 -15);
    
    if(gameChar_x3 > width || gameChar_x3 < 0) {
        
        
        speed2 = speed2 * -1;
    }

   
    gameChar_x3 = gameChar_x3 + speed;
            
    
    
    
    

    


    
	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	//Add your code here ...

    fill(255,255,0);
    ellipse(gameChar_x4, gameChar_y4 - 30, 50);
    
    fill(0);
    ellipse(gameChar_x4 + 10, gameChar_y4 - 35, 5);
    
    fill(255,255,255);
    triangle(gameChar_x4 +25, gameChar_y4 -30, gameChar_x4, gameChar_y4 -25, gameChar_x4 +22, gameChar_y4 -15);
    
    
        if(gameChar_x4>300){
		changeDirection=true}
    
    else if (gameChar_x4<=230){
		changeDirection=false}
    
    if (gameChar_x4>=0 && changeDirection == false){
		gameChar_x4=gameChar_x4 + 1}
    
    else if(changeDirection == true){
		gameChar_x4=gameChar_x4 - 1}

    

    
    
    
    

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	//Add your code here ...
    
      fill(255,255,0);
    ellipse(gameChar_x5, gameChar_y5 - 30, 50);
    
    fill(0);
    ellipse(gameChar_x5 + 10, gameChar_y5 - 35, 5);
    
    fill(255,255,255);
    triangle(gameChar_x5 +25, gameChar_y5 -30, gameChar_x5, gameChar_y5 -25, gameChar_x5 +22, gameChar_y5 -15);
    
     ellipse(gameChar_y5, gameChar_y5 - 15, 10);
    
      gameChar_y5 = gameChar_y5 + speed3;
    
       gameChar_x5 = min(gameChar_x5 + 0.5, 300)
    
		if(gameChar_y2 - 5 >= 150 || gameChar_y2 + 5 <= 100)
            
             speed3 = -speed3;
    
    
    
    
	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	//Add your code here ...
    
    fill(255,255,0);
    ellipse(gameChar_x6, gameChar_y6 - 30, 50);
    
    fill(0);
    ellipse(gameChar_x6 - 10, gameChar_y6 - 35, 5);
    
    fill(255,255,255);
    triangle(gameChar_x6 - 25, gameChar_y6 -30, gameChar_x6 + 2, gameChar_y6 -25, gameChar_x6 - 22, gameChar_y6 -15);
    
   gameChar_y6 = gameChar_y6 + speed;

    gameChar_x6 = max(gameChar_x6 - 0.5, 25)
    
    
		if(gameChar_y6 - 5 >= 150 || gameChar_y6 + 5 <= 100);
            {
                
                speed4 = -speed4;
                
            }
             
            
    
    

}
