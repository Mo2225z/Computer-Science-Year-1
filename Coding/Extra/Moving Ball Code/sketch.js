var y
var x
var goLeft;
function setup() {
  createCanvas(400, 400);
  goLeft = false;
  x = 40;
  y = 40;
  speed = 3;
}

function draw() {
  background(220);
  
  ellipse(x,y,50,50)
  
  if (goLeft == false)
    
    {
      x = x + speed;
      
    }
  
 if (goLeft == true)
   
   {
     x = x - speed;
     
   }
  
  if (x > 400)
  {
    goLeft = true;
    
  }
  
  if (x < 0)
    
    {
      goLeft = false;
      
    }
  
  
  
  
  
  
  if (goLeft == false)
    
    {
      y = y + speed;
      
    }
  
 if (goLeft == true)
   
   {
     y = y - speed;
     
   }
  
  if (y > 400)
  {
    goLeft = true;
    
  }
  
  if (y < 0)
    
    {
      goLeft = false;
      
    }
  
    
  
 
  
    
  
  
}