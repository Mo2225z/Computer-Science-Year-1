/*

The Game Project 6 - Side scrolling

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds = [
    
    
    {
        x_pos: -150, y_pos: 70, size: 50, rain_y: 120
        
    },
    
    {
        x_pos: -450, y_pos: 70, size: 50, rain_y: 120
        
    },
    
    {
        x_pos: 150, y_pos: 70, size: 50, rain_y: 120
        
    },
    
    
    {
        x_pos: -750, y_pos: 70, size: 50, rain_y: 120
        
    },
    
    {
        
        x_pos: 450, y_pos: 70, size: 50, rain_y: 120
        
    },
    
    {
        
        x_pos: 750, y_pos: 70, size: 50, rain_y: 120
        
    },
    
    
    {
        
        x_pos: 450, y_pos: 170, size: 50, rain_y: 120
        
    },
    
    {
        
        x_pos: 1174, y_pos: 70, size: 50, rain_y: 120
        
    },
    
    {
        
        x_pos: 1474, y_pos: 70, size: 50, rain_y: 120
        
    },
    
    {
        
        x_pos: 1774, y_pos: 70, size: 50, rain_y: 120
        
    }
    
]
    
    
    var mountain = [
        
        
    {
        x_pos: -300, y_pos: 432, size: 50
        
    },  
        
    {
        x_pos: -600, y_pos: 432, size: 50
        
    },  
        
         
    {
        x_pos: -900, y_pos: 432, size: 50
        
    },  
        
    
    
    {
        x_pos: 10, y_pos: 432, size: 50
        
    },
    
    {
        
       x_pos: 400, y_pos: 432, size: 50
        
    },
    
    {
        
        x_pos: 750, y_pos: 432, size: 50
        
    },
        
    {
        
        x_pos: 1034, y_pos: 432, size: 50
        
    },
    
    {
        
        x_pos: 1400, y_pos: 432, size: 50
        
    },
    
    {
        
        x_pos: 1750, y_pos: 432, size: 50
        
    },

    

]
        
        
    var item = [
        
        
        
    {
        x_pos: -310, y_pos: 432, size: 5, isFound: false

    },
    
    {
        x_pos: -510, y_pos: 432, size: 5, isFound: false

    },
        
    {
        x_pos: -710, y_pos: 432, size: 5, isFound: false

    },

    {
        x_pos: 310, y_pos: 432, size: 5, isFound: false

    },

    {

         x_pos: 510, y_pos: 432, size: 5, isFound: false

    },

    {

         x_pos: 710, y_pos: 432, size: 5, isFound: false

    },
        
    {

         x_pos: 1360, y_pos: 432, size: 5, isFound: false

    },
        
    {

         x_pos: 1560, y_pos: 432, size: 5, isFound: false

    },
    
    {

         x_pos: 1760, y_pos: 432, size: 5, isFound: false

    },
        
        
        
        
    
        
    
      
    
]
    
    
            
    var canyon = [
        
        
    {
        x_pos: -150, y_pos: 432, width: 100

    },
    
    {
        x_pos: -475, y_pos: 432, width: 100

    },
    
        
    {
        x_pos: -900, y_pos: 432, width: 100

    },

    {
        x_pos: 50, y_pos: 432, width: 100

    },

    {

        x_pos: 475, y_pos: 432, width: 100

    },

    {

        x_pos: 900, y_pos: 432, width: 100

    },
        
    {
        x_pos: 1224, y_pos: 432, width: 100

    },
    
    {
        x_pos: 1424, y_pos: 432, width: 100

    },
    
    {
        x_pos: 1624, y_pos: 432, width: 100

    },


        
    
      
    
]
    
    
  


var treePos_x;
var treePos_y;
var treePos_size;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;


	// Initialise arrays of scenery objects.
    
    treePos_y = 432;
    treePos_size = 100;
    treePos_x = [-200,-400,-600,200,400,600,800,1124, 1850 ];
    
    
    
    
    
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
     push();
     translate(scrollPos,0); 
                   
                  
    // Draw clouds.
    
    for(var i = 0; i < clouds.length ; i++)
        
        {
            
            noStroke();
            fill(255);
            ellipse(clouds[i].x_pos + 75, clouds[i].y_pos - 20, clouds[i].size + 25, clouds[i].size + 25);
            ellipse(clouds[i].x_pos + 125, clouds[i].y_pos - 20, clouds[i].size + 50, clouds[i].size + 25);
            ellipse(clouds[i].x_pos + 25,  clouds[i].y_pos - 20, clouds[i].size + 50, clouds[i].size + 25);
            
            
        }
    
    

	// Draw mountains.
    
    
   for(var i = 0 ;  i < mountain.length ; i++)
        {
            
            
             noStroke();
	         fill(244, 164, 96);
    
	triangle(mountain[i].x_pos + 70
             ,mountain[i].y_pos - 159
             ,mountain[i].x_pos + 30
             ,mountain[i].y_pos + 1
             ,mountain[i].x_pos + 100
             ,mountain[i].y_pos + 1);
    
    triangle(mountain[i].x_pos + 125
             ,mountain[i].y_pos - 219
             ,mountain[i].x_pos + 80
             ,mountain[i].y_pos + 1
             ,mountain[i].x_pos + 160
             ,mountain[i].y_pos + 1);
    
    triangle(mountain[i].x_pos + 180
             ,mountain[i].y_pos - 159
             ,mountain[i].x_pos + 140
             ,mountain[i].y_pos + 1
             ,mountain[i].x_pos  + 220
             ,mountain[i].y_pos + 1);
    
        rect(mountain[i].x_pos
             ,mountain[i].y_pos - 39
             ,mountain[i].size
             ,mountain[i].size - 10);

        rect(mountain[i].x_pos + 200
             ,mountain[i].y_pos  - 39
             ,mountain[i].size
             ,mountain[i].size - 10);
    
    //Snow on mountain
    
    fill(255,255,255);
    
    triangle(mountain[i].x_pos + 70
             ,mountain[i].y_pos  - 162
             ,mountain[i].x_pos + 62
             ,mountain[i].y_pos - 127
             ,mountain[i].x_pos + 77
             ,mountain[i].y_pos  - 127);
    
    triangle(mountain[i].x_pos + 125
             ,mountain[i].y_pos - 222
             ,mountain[i].x_pos + 118
             ,mountain[i].y_pos  - 187
             ,mountain[i].x_pos + 131
             ,mountain[i].y_pos - 187);
    
    triangle(mountain[i].x_pos + 180
             ,mountain[i].y_pos - 162
             ,mountain[i].x_pos + 173
             ,mountain[i].y_pos  - 132
             ,mountain[i].x_pos + 187
             ,mountain[i].y_pos - 132);
      
        }
    
    
    
    

	// Draw trees.
    

    
    for(var i = 0; i < treePos_x.length ; i++)
        
        {
            
            noStroke();
            fill(150,75,0);
            rect(treePos_x[i],treePos_y - 100,treePos_size - 70,treePos_size + 1);

            fill(0,128,0);
            ellipse(treePos_x[i] + 15 ,treePos_y - 110,treePos_size,treePos_size);
            
            
        }


    
            
    

	// Draw canyons
    
    for(var i = 0 ;  i < canyon.length ; i++)
        {
            
        noStroke();
        fill(153,76,0);
        rect(canyon[i].x_pos , canyon[i].y_pos, canyon[i].width - 25, canyon[i].width + 50);
            
        noStroke();
        fill(248,58,12);
        rect(canyon[i].x_pos,canyon[i].y_pos + 106,canyon[i].width - 25, canyon[i].width - 50);

        triangle(canyon[i].x_pos + 15
                 ,canyon[i].y_pos + 94
                 ,canyon[i].x_pos
                 ,canyon[i].y_pos + 110
                 ,canyon[i].x_pos + 25
                 ,canyon[i].y_pos + 109);

        triangle(canyon[i].x_pos + 40
                 ,canyon[i].y_pos + 94
                 ,canyon[i].x_pos + 25
                 ,canyon[i].y_pos + 109
                 ,canyon[i].x_pos + 55
                 ,canyon[i].y_pos + 109);

        triangle(canyon[i].x_pos + 65
                 ,canyon[i].y_pos + 94
                 ,canyon[i].x_pos + 50
                 ,canyon[i].y_pos + 109
                 ,canyon[i].x_pos + 76
                 ,canyon[i].y_pos + 109);
            
        }
    
  
    
    
    

	// Draw collectable items
    
      for(var i = 0 ;  i < item.length ; i++)
          {
              
            noStroke();
            fill(255,153,34);
            ellipse(item[i].x_pos
                    ,item[i].y_pos - 35
                    ,item[i].size + 75
                    ,item[i].size + 75);

            noStroke();
            fill(255,128,0);
            triangle(item[i].x_pos
                     ,item[i].y_pos - 57
                     ,item[i].x_pos + 15
                     ,item[i].y_pos - 34
                     ,item[i].x_pos - 15
                     ,item[i].y_pos - 34);

            triangle(item[i].x_pos
                     ,item[i].y_pos - 19
                     ,item[i].x_pos + 15
                     ,item[i].y_pos - 34
                     ,item[i].x_pos - 15
                     ,item[i].y_pos - 34);

            triangle(item[i].x_pos + 25
                     ,item[i].y_pos - 44
                     ,item[i].x_pos + 5
                     ,item[i].y_pos - 44
                     ,item[i].x_pos + 15
                     ,item[i].y_pos - 34);

            triangle(item[i].x_pos - 25
                     ,item[i].y_pos - 44
                     ,item[i].x_pos - 5
                     ,item[i].y_pos - 44
                     ,item[i].x_pos - 15
                     ,item[i].y_pos - 34);

            triangle(item[i].x_pos + 15
                     ,item[i].y_pos - 14
                     ,item[i].x_pos + 10
                     ,item[i].y_pos - 34
                     ,item[i].x_pos
                     ,item[i].y_pos  - 19);

            triangle(item[i].x_pos -15
                     ,item[i].y_pos - 14
                     ,item[i].x_pos
                     ,item[i].y_pos - 19
                     ,item[i].x_pos - 10
                     ,item[i].y_pos - 34);
              
              
              
          }
    
          pop();
    
    

	// Draw the game character - this must be last
    
    
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

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
        
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
        
        
        
     
        


    

	}
    
  
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
