function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   var d = dist(mouseX, mouseY, 200, 200);
  
  if (d < 100)  {
      
    
    fill (255,0,0);
    
    
  }
  
  else {
    
    fill (0);
    
  }
  
  
  
  console.log(d);
  ellipse(200,200,200);
  
}