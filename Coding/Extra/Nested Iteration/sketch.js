function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
    for(var h = 0 ; h < 3 ; h++)
       {
      
        for(var i = 0 ; i < 10 ; i+= 3)
        {
          ellipse(30 + i * 30, 30 + h * 40, 30, 30); 
          
        }
         
       }
  
  
}