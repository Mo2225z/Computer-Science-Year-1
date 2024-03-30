var hasCovid;

var hasCough;
var isTired;
var noSenseOfTaste;
var temperature;

function setup() {
  createCanvas(400, 400);
  textSize(32);
  textAlign(CENTER);
  
  //initalise variables
  hasCough = false;
  isTired = false;
  noSenseOfTaste = true;
  
  if(hasCough && isTired && noSenseOfTaste){
    hasCovid = true;
  }
  else{
    hasCovid = false;
  }
}

function draw() {
  
  background(220);
  
  text("NHS Covid checker", width/2, 40);
  
  if(hasCovid == true){
    text("You have COVID 😟", width/2, height/2);
  }
  else{
    text("You don't have COVID 😀", width/2, height/2);
  }
}