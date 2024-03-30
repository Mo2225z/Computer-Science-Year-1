var move = 0;
var speed = 0.05;

var found = false;
function setup() {
  createCanvas(400, 400);
   
}

function draw() {
 background(220);
  
  translate(300,200);
  rotate(move);
  rect(0,-100,50,50);
  
  move = move + speed;
  if(move > 5)
    {
      
      speed = -speed;
      
    }
  
  if(move < 0)
    {
      speed = -speed;
      
    }
  

  
  
  
  
  
  
  console.log(found)
  console.log(move)
}