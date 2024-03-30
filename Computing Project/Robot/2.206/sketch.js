var myRobot;

function setup() {
	// put setup code here
	createCanvas(500, 500);
    angleMode(DEGREES);
    
    noseColour = color(255,0,0);
	myRobot = new Robot("grey", false, "Marvin", 0, noseColour);
	//add dom controls

}

function draw() {
	// put drawing code here
	background(50);
	myRobot.drawRobot();
}

function Robot(colour, transmitting, name, rotation, noseColour) {
	this.colour = colour;
	this.rotation = rotation;
	this.transmitting = transmitting;
	this.name = name;
    this.noseColour = noseColour;
    
    var self = this;
    
    var transmitButton = createButton("On");
    transmitButton.parent("#Div");
    transmitButton.mousePressed(function(){
        
        self.transmitting = !self.transmitting;
        
    });
    
    var rotateBall = createSlider(0, 360, 0);
    rotateBall.parent("#Div");
    rotateBall.input(function(){
        
        self.rotation = this.value();
        
        
    });
    
    var NameChanger = createInput("Marvin");
    NameChanger.parent("#Div")
    NameChanger.input(function(){
        
        self.name = this.value();
        
    })
    
    var NosecolourChanger = ["Red", "Yellow", "Green"];
    var NoseSelector = createSelect();
    NoseSelector.parent("#Div");
    
    for(var i = 0; i < NosecolourChanger.length; i++)
        {
            
            NoseSelector.option(NosecolourChanger[i]);
            
        }
    
    NoseSelector.input(function() {
        
        self.noseColour = this.value();
        
    });
    
    console.log(this.noseColour);
    
    
    
    
    


	this.drawRobot = function() {
		translate(width / 2, height / 2);
		//robots head
        rotate(this.rotation);
		fill(this.colour);
		strokeWeight(4);
		rect(-150, -150, 300, 300, 20);

		//robots antenna
		if (this.transmitting) {
			fill(250, 250, 0);
		} else {
			fill(255, 255, 200);
		}

		ellipse(0, -180, 60, 60);

		fill(200, 0, 200);
		rect(-40, -170, 80, 30);

		//robots eyes
		fill(255);
		ellipse(-75, -50, 80, 80);
		point(-75, -50);
		ellipse(75, -50, 80, 80);
		point(75, -50);


		//robots nose
		fill(this.noseColour);
		triangle(0, -30, -50, 50, 50, 50);
        
        fill(255, 0, 0);
		//robots ears
		rect(-170, -70, 30, 100);
		rect(140, -70, 30, 100);

		//robots mouth
		noFill();
		beginShape();
		vertex(-75, 90);
		vertex(-50, 120);
		vertex(-25, 90);
		vertex(0, 120);
		vertex(25, 90);
		vertex(50, 120);
		vertex(75, 90);
		endShape();
        
        
        //Text for name;
        
        fill(0);
        textSize(50);
        text(this.name, -70, 200, 50);
	}
}