var duckImage;

var ducks_x;
var ducks_y;


function setup() {
  createCanvas(400, 400);
  duckImage = loadImage("rubber-duck.png");
  
  ducks_x = [100,200,300,400,500];
  ducks_y = [200,200,200,200,200];
 
}

function draw() {
  background(80,100,180);
  
  //draw the ducks
  for(var i = 0; i < 5; i++){
   image(duckImage,ducks_x[i],ducks_y[i],50,50);
  }
  
  fill(100,50,0);
  rect(0,250,width,200);
  
  for(var i = 0; i < 5; i++){
    ducks_x[i] += 2;
    if(ducks_x[i] > width){
      ducks_x[i] = -200;
    }
  }
  

  
  
}