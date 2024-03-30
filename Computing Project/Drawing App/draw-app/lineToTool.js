
//This constructor function tool allows the user to draw straight lines and preview the line to the current mouse position before drawing the line to the pixel array.
function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
	let startMouseX = -1;
	let startMouseY = -1;
	let drawing = false;
    //draws the lines to the screen
	this.draw = function(){
     //only draw when mouse is pressed
		if(mouseIsPressed){
            //if it's the start of drawing a new line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                //Save the current pixel array
				loadPixels();
			}

			else{
                //Update the screen with the saved pixels array to hide any previous lines when mouse was pressed and released which will stop a build up off many lines from happening.
				updatePixels();
                //Draw the line
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
            //Set drawing back to false if it's true and set startMouseX/startMouseX to -1;
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
