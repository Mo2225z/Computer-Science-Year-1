/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the code comments. The items should appear next to the text titles.

Each bit of scenery is worth three marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery
3 marks = You went a bit further with your graphics

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.

When you have completed your game scenery upload here as a zip file.


*/

var yPos;

var yPos2;

function setup()
{
    
    
createCanvas(1024, 576);
    
    yPos = 120
    
    yPos2 = 350
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue
    
    //Snow 
    
    fill(255,255,255);
    ellipse(470,yPos,10,10);
    yPos = yPos + 0.5;
    
    ellipse(525,yPos,10,10);
    yPos = yPos + 0.5;
    
    ellipse(580,yPos,10,10);
    yPos = yPos + 0.5;
    
    //Rain
    
    fill(0,0,200)
    ellipse(140,yPos,10,10);
    yPos = yPos + 0.5;
    
    ellipse(200,yPos,10,10);
    yPos = yPos + 0.5;
    
    ellipse(260,yPos,10,10);
    yPos = yPos + 0.5;
    
    //Red Apple falling
    
    
    fill(255,0,0);
    ellipse(930,yPos2,10,10);
    yPos2 = min(yPos2 + 0.5,455);
    
    ellipse(1005,yPos2,10,10);
    yPos2 = min(yPos2 + 0.5,455);
    
    //Green Apple Falling
    
    fill(0,255,0);
    ellipse(835,yPos2,10,10);
    yPos2 = min(yPos2 + 0.5,455);
    
    ellipse(900,yPos2,10,10);
    yPos2 = min(yPos2 + 0.5,455);
    
    
    

    noStroke();
	fill(0,155,0);
	rect(0, 460, 1024, 144); //draw some green ground
    
    
    //Sun in the sky
    fill(255,255,0);
    ellipse(900, 95,100,100);

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	ellipse(200, 100,75,75);
    ellipse(250, 100,100,75);
    ellipse(150, 100,100,75);
   
    
    //Cloud 2 
    
    ellipse(515,100,75,75);
    ellipse(570,100,100,75);
    ellipse(460,100,100,75);
    
    
    

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(150,75,0);
	triangle(470,290,430,460,500,460);
    triangle(525,230,480,460,560,460);
    triangle(580,290,540,460,620,460);
    rect(400,420,50,40);
    rect(600,420,50,40)
    
    //Snow on mountain
    
    fill(255,255,255);
    triangle(470,290,462,325,477,325);
    triangle(525,230,518,265,531,265);
    triangle(580,290,573,320,587,320);
    

	//3. a tree
	//... add your code here

	noStroke();
	fill(150,75,0);
    rect(850,360,30,100);
    
    fill(0,128,0);
    ellipse(865,330,100,100);
    
    //Green Apples
    fill(0,255,0);
    ellipse(850,320,10,10);
    ellipse(860,340,10,10);
    ellipse(870,310,10,10);
    ellipse(885,320,10,10);
    ellipse(885,340,10,10);
    ellipse(865,360,10,10);
    ellipse(835,350,10,10);
    ellipse(830,320,10,10);
    
    //Tree two
    
    fill(150,75,0);
    rect(955,360,30,100);
    
    fill(0,128,0);
    ellipse(970,330,100,100);
    
    // Red apples 
    fill(255,0,0);
    ellipse(940,330,10,10);
    ellipse(985,315,10,10);
    ellipse(1000,320,10,10);
    ellipse(970,345,10,10);
    ellipse(960,320,10,10);
    ellipse(970,300,10,10);
    
    
    
    
    
    
    

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
    
    

	//... add your code here
    
    //Pit with Lava
	noStroke();
	fill(153,76,0);
	rect(100, 460,75,120);
    
    //lava
    noStroke();
    fill(248,58,12);
    rect(100,532,75,50);
    triangle(115,520,100,536,125,535);
    triangle(140,520,125,535,155,535);
    triangle(160,520,150,535,175,535);
    
    //Mario Pipe
    
    stroke(0,0,0);
    fill(0,175,0);
    rect(100,460,75,-75);
    rect(87,385,100,-25);
    
    noStroke
    fill(0,100,0);
    rect(110,360,25,25)
    
    

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	// Super Dragon ball item
    
    noStroke();
    fill(255,153,34);
	ellipse(735, 410,100,100);
    
    noStroke();
    fill(255,128,0);
    triangle(735,387,750,410,720,410);
    triangle(735,425,750,410,720,410);
    triangle(760,400,740,400,750,410);
    triangle(710,400,730,400,720,410);
    triangle(750,430,745,410,735,425);
    triangle(720,430,735,425,725,410);
    
  
    
    
   
}
