function Spiragraph() {
  //set an icon and a name for the object
  this.icon = "assets/spiragraph.png";
  this.name = "spiragraph";

  const path = [];
  const numCircles = 4;
  //angle to move by
  let angle = 0;
  //intial colour
  const intialColour = Math.random() * 360;
  //setting path colour to intial colour
  let pathColor = intialColour;
  //speed to change the x and y positions
  const speed = -1.3;
  //colorspeed to change colour
  const colorSpeed = 0.5;
  let rainbow = false;

  //Draws the spirograph
  this.draw = function () {
    push();
    colorMode(HSB);
    updatePixels();
    noFill();
    stroke(25);
    //array containing raidus to be used
    const r = [100];
    //array containing x position
    const x = [300];
    // array containing y position
    const y = [300];
    ///this calculates the positions of x y z for circles.
    const calc = this.calcPositions(x, y, r, numCircles);
    //drawing the ellipses using the 4 arrays created above
    for (let i = 0; i < r.length; i++) {
      ellipse(x[i] + 300, y[i] - 45, r[i] * 2, r[i] * 2);
    }
    //pushing x and y array into the path array to draw the lines
    path.push([x[numCircles - 1], y[numCircles - 1]]);
    //this is for the render rainbow
    if (rainbow) {
      pathColor = intialColour;
      //going through path array
      for (let i = 0; i < path.length - 1; i++) {
        //using path colour for the stroke
        stroke(pathColor, 100, 100);
        //drawing the lines using vertex begin shape and end shape
        beginShape();
        vertex(path[i][0] + 300, path[i][1] - 45);
        vertex(path[i + 1][0] + 300, path[i + 1][1] - 45);
        endShape();
        //incremeting path colour by color speed but setting it to mod 360 it doesn't go above 360;
        pathColor = (pathColor + colorSpeed) % 360;
      }
    } else {
      ///using path colour variable for stroke
      stroke(pathColor, 100, 100);
      //using path.x and path.y to to draw the lines
      beginShape();
      for (const point of path) {
        vertex(point[0] + 300, point[1] - 45);
      }
      endShape();
      //incremeting path colour by color speed but setting it to mod 360 it doesn't go above 360;
      pathColor = (pathColor + colorSpeed) % 360;
    }
    //incrementing the angle by 0.1
    angle += 0.1;
    pop();
  };

  this.calcPositions = function (xPos, yPos, radius, number) {
    for (let i = 1; i < number; i++) {
      //previous radius
      const lastR = radius[i - 1];
      //current
      const curr = lastR / 2;
      //sum of previous radius and current
      const rSum = lastR + curr;
      //setting all raidus to current in the raidus array 4 times;
      radius[i] = curr;
      //adding to speed the x position using cosine, power and the speed variable
      xPos[i] = xPos[i - 1] + rSum * cos(angle * Math.pow(speed, i));
      //adding to speed the y position using cosine, power and the speed variable
      yPos[i] = yPos[i - 1] + rSum * sin(angle * Math.pow(speed, i));
    }
  };

  this.unselectTool = function () {
    //clear options
    select(".options").html("");
  };

  this.populateOptions = function () {
    //Selcting the element with options
    //Selcting the element with options
    select("#options").html("<button id='rainbow'></button>");

    //creating button using DOM
    const rainbowButton= select("#rainbow");
    rainbowButton.style("background-image", "url(assets/rainbow.png)");
    rainbowButton.style("width", "47.4px");
    rainbowButton.style("height", "42px");
    //checking if the button has been clicked then setting the check variable to a number
    rainbowButton.mouseClicked(function () {
      //Setting rainbow to true when rainbow button is clicked
      rainbow = true;
    });
    //creating button using DOM
    const randomLines = createButton("");
    randomLines.parent("#options");
    randomLines.style("background-image", "url(assets/randomLines.jpg)");
    randomLines.style("margin-left", "6px");
    randomLines.style("width", "45px");
    randomLines.style("height", "42px");
    //checking if the button has been clicked then setting the check variable to a number
    randomLines.mouseClicked(function () {
      //Setting rainbow to false when randomlines button is clicked
      rainbow = false;
    });
  };
}
