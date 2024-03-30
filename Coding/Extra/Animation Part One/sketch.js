var count;

function setup() {
  createCanvas(400, 400);
  count = 0;

}

function draw() {
  count += 1;
  //background(220);
  stroke(1);
  fill(mouseX, 0, mouseY)
  ellipse(mouseX, mouseY, 40);
  
  // fill(255);
  // noStroke();
  // rect(0,0,50,50);
  // text(count, 10,10);
}
