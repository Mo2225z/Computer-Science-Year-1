/*

The Game Project - 4

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var item;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4 - 6;
	gameChar_x = 50;
	gameChar_y = floorPos_y;
    
    isleft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    item ={x_pos: 835, y_pos: 426, size: 5, isFound: false};
    canyon = {x_pos: 100, y_pos: 426, width: 100};
    
    
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

//	draw the canyon
//
//    Pit with Lava
    
	noStroke();
	fill(153,76,0);
	rect(canyon.x_pos , canyon.y_pos,canyon.width - 25,canyon.width + 20);
    
   
    

    
    // Super Dragon ball
    
    
    if (item.isFound == false)
        
     {
      
    noStroke();
    fill(255,153,34);
	ellipse(item.x_pos, item.y_pos - 35,item.size + 75,item.size + 75);
    
    noStroke();
    fill(255,128,0);
    triangle(item.x_pos
             ,item.y_pos - 57
             ,item.x_pos + 15
             ,item.y_pos - 34
             ,item.x_pos - 15
             ,item.y_pos - 34);
    
    triangle(item.x_pos
             ,item.y_pos - 19
             ,item.x_pos + 15
             ,item.y_pos - 34
             ,item.x_pos - 15
             ,item.y_pos - 34);
    
    triangle(item.x_pos + 25
             ,item.y_pos - 44
             ,item.x_pos + 5
             ,item.y_pos - 44
             ,item.x_pos + 15
             ,item.y_pos - 34);
    
    triangle(item.x_pos - 25
             ,item.y_pos - 44
             ,item.x_pos - 5
             ,item.y_pos - 44
             ,item.x_pos - 15
             ,item.y_pos - 34);
    
    triangle(item.x_pos + 15
             ,item.y_pos - 14
             ,item.x_pos + 10
             ,item.y_pos - 34
             ,item.x_pos
             ,item.y_pos  - 19);
    
    triangle(item.x_pos -15
             ,item.y_pos - 14
             ,item.x_pos
             ,item.y_pos - 19
             ,item.x_pos - 10
             ,item.y_pos - 34);
      
      
      }
    
    

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        
    fill(255,255,0);
    ellipse(gameChar_x, gameChar_y - 25, 50);
    
    fill(0);
    ellipse(gameChar_x - 10, gameChar_y - 30, 5);
    
    fill(100,155,255);
    triangle(gameChar_x - 30, gameChar_y -25, gameChar_x , gameChar_y -20, gameChar_x - 21, gameChar_y -10);
        
   

	}
	else if(isRight && isFalling)
	{
        
    // add your jumping-right code
        
            
    fill(255,255,0);
    ellipse(gameChar_x, gameChar_y - 25, 50);
    
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 30, 5);
    
    fill(100,155,255);
    triangle(gameChar_x +25, gameChar_y -25, gameChar_x, gameChar_y -20, gameChar_x +22, gameChar_y -10);
        
        
        
 

	}
	else if(isLeft)
	{
		// add your walking left code
        
    fill(255,255,0);
    ellipse(gameChar_x, gameChar_y - 25, 50);
    
    fill(0);
    ellipse(gameChar_x - 10, gameChar_y - 30, 5);
    
    fill(255,255,255);
    triangle(gameChar_x - 25, gameChar_y -25, gameChar_x , gameChar_y -20, gameChar_x - 21, gameChar_y -10);

	}
	else if(isRight)
	{
		// add your walking right code
        
    fill(255,255,0);
    ellipse(gameChar_x, gameChar_y - 25, 50);
    
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 30, 5);
    
    fill(255,255,255);
    triangle(gameChar_x +25, gameChar_y -25, gameChar_x, gameChar_y -20, gameChar_x +22, gameChar_y -10);
        

    

	}
	else if(isFalling || isPlummeting)
	{
    // add your jumping facing forwards code
        
   	// add your standing front facing code
        
    //Face
    
    fill(255,255,0);
    ellipse(gameChar_x, gameChar_y - 25, 50);
    
    //Eyes
    
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 30, 5);
    
    ellipse(gameChar_x -10, gameChar_y - 30, 5);
    
    fill(200,0,0);
    ellipse(gameChar_x, gameChar_y - 10, 10);
    
    //Mouth
    
    fill(0);
    triangle(gameChar_x - 20, gameChar_y -20, gameChar_x + 20, gameChar_y -20, gameChar_x, gameChar_y - 3);
    
    //Tongue
    
    fill(200,0,0);
    ellipse(gameChar_x, gameChar_y - 10, 10);
        
        
        

	}
	else
	{
		// add your standing front facing code
        
    //Face
    
    fill(255,255,0);
    ellipse(gameChar_x, gameChar_y - 25, 50);
    
    //Eyes
    
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 30, 5);
    
    ellipse(gameChar_x -10, gameChar_y - 30, 5);
    
    fill(200,0,0);
    ellipse(gameChar_x, gameChar_y - 10, 10);
    
    //Mouth
    
    fill(0);
    triangle(gameChar_x - 20, gameChar_y -20, gameChar_x + 20, gameChar_y -20, gameChar_x, gameChar_y - 3);
    
    //Tongue
    
    fill(200,0,0);
    ellipse(gameChar_x, gameChar_y - 10, 10);
        
        

	}
    
    
    //Lava
    
    noStroke();
    fill(248,58,12);
    rect(canyon.x_pos,canyon.y_pos + 106,canyon.width - 25, canyon.width - 50);
    
    triangle(canyon.x_pos + 15
             ,canyon.y_pos + 94
             ,canyon.x_pos
             ,canyon.y_pos + 110
             ,canyon.x_pos + 25
             ,canyon.y_pos + 109);
    
    triangle(canyon.x_pos + 40
             ,canyon.y_pos + 94
             ,canyon.x_pos + 25
             ,canyon.y_pos + 109
             ,canyon.x_pos + 55
             ,canyon.y_pos + 109);
    
    triangle(canyon.x_pos + 65
             ,canyon.y_pos + 94
             ,canyon.x_pos + 50
             ,canyon.y_pos + 109
             ,canyon.x_pos + 76
             ,canyon.y_pos + 109);
    
    
    
    
    

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if (isLeft)
        
        {
            gameChar_x -= 5;
            
        }
    
     if (isRight)
        
        {
            gameChar_x += 5;
            
        }
    
    if (isFalling)
      if(gameChar_y <= floorPos_y)  
          {
              
              gameChar_y +=3;
          }
     
    else {
         
              isFalling = false;
        
        
    }
    
    
    if(item.isFound == false && dist(item.x_pos,item.y_pos, gameChar_x, gameChar_y) < 15 )
        {
            
            
            item.isFound = true;
            
        }
    
    
     console.log(isPlummeting)
    if (isPlummeting == false && gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + 75)
        if(gameChar_y >= floorPos_y)
    
    {
        
        isPlummeting = true;
        
    }
    
    if (isPlummeting == true)
        
        {
            
            gameChar_x = constrain(gameChar_x, canyon.x_pos + 25 , canyon.x_pos + canyon.width + canyon.width - 150);
            gameChar_y += 6
            
        }

        
    
    if (gameChar_y > 525)
        
        {
            isPlummeting = false;
            gameChar_x = canyon.x_pos - 50;
            gameChar_y = floorPos_y;
            
            
        }
    
   
    
    
    

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    if (keyCode == 65)
        
        {
            isLeft = true;
            
        }
    
    
     if (keyCode == 68)
        
        {
            isRight = true;
            
        }

    if (key == "W" || keyCode == 32)
    if (gameChar_y >= floorPos_y)
    {
        isFalling = true;
        gameChar_y -= 100;
        
    }
    
    
       
    
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
      if (keyCode == 65)
        
        {
            isLeft = false;
            
        }
    
     if (keyCode == 68)
        
        {
            isRight = false;
            
        }
    
    
    
    
    
}
