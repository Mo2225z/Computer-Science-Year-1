/*

The Game Project

3 - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var lava;

var pipe;

var item;

// This is for the falling apples and when testing the mouseX and MouseY you might want to include this as well
var treeApple;

var canyon;
var collectable;

var mountain;
var cloud;


var sun;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = 50;
	gameChar_y = 437;

	treePos_x = 800;
	treePos_y = floorPos_y;
    
    treeApple = {x: 800, y: 320 , size: 10, falling: 320}
    
    canyon = {x_pos: 0, width: 100, y_pos: 440};
    
    lava = {triange_x: 0, triange_y: 535, rect_x: 0, rect_y: 532};
    
    //Green Pipe
    pipe = {rect_x: 0, rect_y: 445};
    
    //Collectable Item
    item ={x_pos: 100, y_pos: 85, size: 25};
    
    mountain = {x_pos: 400, y_pos: floorPos_y, size: 50};
    
    cloud = {x_pos: 60, y_pos: 135, size: 50, rain_y: 120};
    
    sun = {x_pos: 100, y_pos: 100, size: 100, radius: 100};
    
}

function draw()
{
    
       
    
    
    //Snow
    
    fill(0,0,200)
    ellipse(cloud.snow_x + 40,cloud.snow_y,cloud.size - 40, cloud.size - 40);
    ellipse(cloud.snow_x + 100,cloud.snow_y,cloud.size - 40, cloud.size - 40);
    ellipse(cloud.snow_x + 160,cloud.snow_y, cloud.size - 40, cloud.size - 40);
    
    cloud.snow_y  = cloud.snow_y + 0.5;
    
    
   //Background
    
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, width - floorPos_y); //draw some green ground
    
    
    
    
//Sun in the sky
    
    
    fill(255,255,0);
    ellipse(sun.x_pos + 800, sun.y_pos - 5, sun.radius , sun.size);

    
    
    
    
    //Mountain 
    
    


    noStroke();
	fill(150,75,0);
    
	triangle(mountain.x_pos + 70
             ,mountain.y_pos - 162
             ,mountain.x_pos + 30
             ,mountain.y_pos + 8
             ,mountain.x_pos + 100
             ,mountain.y_pos + 8);
    
    triangle(mountain.x_pos + 125
             ,mountain.y_pos - 222
             ,mountain.x_pos + 80
             ,mountain.y_pos + 8
             ,mountain.x_pos + 160
             ,mountain.y_pos + 8);
    
    triangle(mountain.x_pos + 180
             ,mountain.y_pos - 162
             ,mountain.x_pos + 140
             ,mountain.y_pos + 8
             ,mountain.x_pos  + 220
             ,mountain.y_pos + 8);
    
    rect(mountain.x_pos
         ,mountain.y_pos - 32
         ,50
         ,40);
    
    rect(mountain.x_pos + 200
         ,mountain.y_pos  - 32
         ,50
         ,40)
    
    //Snow on mountain
    
    fill(255,255,255);
    
    triangle(mountain.x_pos + 70
             ,mountain.y_pos  - 162
             ,mountain.x_pos + 62
             ,mountain.y_pos - 127
             ,mountain.x_pos + 77
             ,mountain.y_pos  - 127);
    
    triangle(mountain.x_pos + 125
             ,mountain.y_pos - 222
             ,mountain.x_pos + 118
             ,mountain.y_pos  - 187
             ,mountain.x_pos + 131
             ,mountain.y_pos - 187);
    
    triangle(mountain.x_pos + 180
             ,mountain.y_pos - 162
             ,mountain.x_pos + 173
             ,mountain.y_pos  - 132
             ,mountain.x_pos + 187
             ,mountain.y_pos - 132);
    

    
   
    
    
    
    
     //Rain

    
    
    fill(0,0,200)
    ellipse(120,cloud.rain_y,10,10);
    ellipse(140,cloud.rain_y,10,10);
    ellipse(160,cloud.rain_y,10,10);
    
    
    cloud.rain_y = cloud.rain_y + 1;

   //Cloud 1
    


	noStroke();
	fill(255);
	ellipse(cloud.x_pos + 75, cloud.y_pos - 20,cloud.size + 25,cloud.size + 25);
    ellipse(cloud.x_pos + 125, cloud.y_pos - 20,cloud.size + 50,cloud.size + 25);
    ellipse(cloud.x_pos + 25,  cloud.y_pos - 20,cloud.size + 50,cloud.size + 25);
    


    

    
    
    
    
    
    
    
    
    //Tree
    
    
  	noStroke();
	fill(150,75,0);
    rect(treePos_x,treePos_y - 100,30,100);
    
    fill(0,128,0);
    ellipse(treePos_x + 15,treePos_y - 110,100,100);
    
//    
    
    //Green Apples
    fill(0,255,0);
    ellipse(treeApple.x,treeApple.falling,treeApple.size, treeApple.size);
    ellipse(treeApple.x - 15 ,treeApple.y,treeApple.size, treeApple.size);
    ellipse(treeApple.x + 50,treeApple.y,treeApple.size, treeApple.size);
    ellipse(treeApple.x + 15,treeApple.y - 20,treeApple.size, treeApple.size);
    ellipse(treeApple.x + 25,treeApple.y,treeApple.size, treeApple.size);
    ellipse(treeApple.x,treeApple.y + 30,treeApple.size, treeApple.size);
    ellipse(treeApple.x + 35,treeApple.y + 30,treeApple.size, treeApple.size);
    
    treeApple.falling = min(treeApple.falling + 1, floorPos_y)
    

    
    
    
//    
//    fill(150,75,0);
//    rect(treePos_x + 150,treePos_y + 45 ,30,100);
//    
//    fill(0,128,0);
//    ellipse(treePos_x + 165, treePos_y + 20,100,100);
    
    
    // Red apples 
    fill(255,0,0);

    
    
    
    
    
    //Canyon
    
    
    //Pit with Lava
	noStroke();
	fill(153,76,0);
	rect(canyon.x_pos + 100, canyon.y_pos,canyon.width - 25 ,120);
    
    //lava
    noStroke();
    fill(248,58,12);
    rect(lava.rect_x + 100,lava.rect_y,75,50);
    triangle(lava.triange_x + 115,lava.triange_y - 15,lava.triange_x + 100,lava.triange_y + 2,lava.triange_x + 125,lava.triange_y);
    triangle(lava.triange_x + 140,lava.triange_y - 15,lava.triange_x + 125,lava.triange_y,lava.triange_x + 155,lava.triange_y);
    triangle(lava.triange_x + 162,lava.triange_y - 15,lava.triange_x + 150,lava.triange_y,lava.triange_x + 175,lava.triange_y);
    
    //Mario Pipe
    
    stroke(0,0,0);
    fill(0,175,0);
    rect(pipe.rect_x + 100,pipe.rect_y,75,-75);
    rect(pipe.rect_x + 87, pipe.rect_y - 70,100,-25);
    
    noStroke
    fill(0,100,0);
    rect(pipe.rect_x +  110,pipe.rect_y - 95,25,25)
    
    
    
    //Item (Dragon ball)
    
    
    noStroke();
    fill(255,153,34);
	ellipse(item.x_pos + 635, item.y_pos + 310,item.size + 50,item.size + 50);
    
    noStroke();
    fill(255,128,0);
    triangle(item.x_pos + 635, item.y_pos + 287,item.x_pos + 650,item.y_pos + 310,item.x_pos + 620,item.y_pos + 310);
    triangle(item.x_pos + 635,item.y_pos + 325,item.x_pos + 650,item.y_pos + 310,item.x_pos + 620, item.y_pos + 310);
    triangle(item.x_pos + 660, item.y_pos + 300,item.x_pos + 640, item.y_pos + 300,item.x_pos + 650, item.y_pos + 310);
    triangle(item.x_pos + 610,item.y_pos + 300,item.x_pos + 630,item.y_pos + 300,item.x_pos + 620,item.y_pos + 310);
    triangle(item.x_pos + 650,item.y_pos + 330,item.x_pos + 645,item.y_pos + 310,item.x_pos + 635,item.y_pos + 325);
    triangle(item.x_pos + 620,item.y_pos + 330,item.x_pos + 635,item.y_pos + 325,item.x_pos + 625,item.y_pos + 310);
    
    
    
     
    //Character (Pac Man)
    
    
    //Face 
    
    
    stroke(0);
    
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
    
    
    
    

}

function mousePressed()
{

    
    gameChar_x = mouseX;
    
    gameChar_y = mouseY;
    
        

}
