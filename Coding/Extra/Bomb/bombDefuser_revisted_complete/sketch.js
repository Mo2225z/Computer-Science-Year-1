
var bcenterX;
var bcenterY;
var bdiam;
var fuseEndX;
var fuseEndY;
var gameState;
var hotKey;
var hotKey;
var countdown;
var prevKey;

function setup() 
{
    createCanvas(512,512);
    textSize(32);
    strokeWeight(5);
    
    //initialise variables
    bdiam = 250;
    gameState = 0;
    hotKey0 = "F";
    hotKey1 = "G";
    hotKey2 = "H";
    secretKey0 = "L";
    secretKey1 = "O";
    prevKey = "";
    
}


function draw()
{
    ////////////// UPDATE CODE///////////////
    
    //reset variables after random amounts were added
    
    bcenterX = width/2;
    bcenterY = height/2;
    
    if(gameState == 1)
    {
        //wobble the bomb
        bcenterX += random(-2,5);
        bcenterY += random(-5,5);
        countdown -= 10;
        
        if(countdown == 0)
        {
            gameState = 2;
        }
    }
    
    
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam/2 - 30;
    
    ////////////// DRAWING CODE///////////////
    
    background(100);    

    //draw the fuse
    noFill();
    stroke(200,100,0);

    line(
        bcenterX,
        bcenterY - bdiam/2, 
        fuseEndX,
        fuseEndY
        );
    
    if(gameState == 1)
    {
        //draw the flame 
        fill(255,255,0);
        noStroke();
        beginShape();
            vertex(fuseEndX, fuseEndY);
            vertex(fuseEndX + 20, fuseEndY - 20);
            vertex(fuseEndX + 20, fuseEndY - 50);
            vertex(fuseEndX - 10, fuseEndY - 30);
        endShape(CLOSE);
    }
    
    //draw the bomb
    noStroke();
    fill(0);
    ellipse(bcenterX,bcenterY, bdiam, bdiam);
    fill(255);
    quad(
        bcenterX + 40, bcenterY - 60,
        bcenterX + 80, bcenterY - 60,
        bcenterX + 70, bcenterY - 30,
        bcenterX + 50, bcenterY - 30
    );
    
    fill(255);
    

    if(gameState == 0)
    {
        text("Press any key to start", 20, height/2);  
    }
    
    if(gameState == 1)
    {
        text("Press a key to diffuse the bomb", 20, height - 50);
        text(countdown, 30, 50);
    }
    
    if(gameState == 2)
    {
        text("Game over", 20, height/2);  
    }
    
    if(gameState == 3)
    {
        text("You won !", width/2, height/2);  
    }
    
    
    
    
}

function keyPressed()
{
    
    if(gameState == 0)
    {
        gameState = 1;
        countdown = 1000;
    }
    else if(gameState == 1)
    {
        if((key == secretKey1 && prevKey == secretKey0) || (key == secretKey0 && prevKey == secretKey1))
        {
            gameState = 3;
        }
        else if(key == hotKey0 || key == hotKey1 || key == hotKey2)
        {
            countdown += 15;
        }
        else
        {
            if(floor(random(0,5)) == 0)
            {
                gameState = 2;
            }
        }
        
        prevKey = key;
    }
    else if(gameState == 2)
    {
        gameState = 0;
    }
    else if(gameState == 3)
    {
        gameState = 0;
    }

    
    

}







