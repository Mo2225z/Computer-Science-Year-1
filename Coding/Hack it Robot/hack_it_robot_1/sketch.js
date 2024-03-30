function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 1000);
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(150);
	rect(100, 100, 300, 300, 20);
    
    fill(150);
	rect(105, 400, 300, 300, 20);
    //left arm
    rect(5, 450, 100, 60);
    
    //right arm
    rect(405, 450, 100, 60);
    
    //middle part with box
    
    rect(200, 450, 100, 100);
    
    //Traingle 2
    
    fill(0);
    triangle(300, 600, 250, 570, 200, 600);

    // Circle in the box
    fill(0);
    ellipse(250, 500, 60, 60);
    
    //right leg 
     fill(150);
     rect(300, 700, 90, 120);
    //left leg
    rect(115, 700, 90, 120);

   

	//robots antenna
	fill(250, 250, 0);
	ellipse(250, 70, 60, 60);

	fill(200, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 80, 80);
	point(175, 200);
	ellipse(325, 200, 80, 80);
	point(325, 200);
    
	//robots nose
	fill(255, 0, 0);
	triangle(250, 220, 300, 300, 200, 300);

	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	noFill(300);
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();
}