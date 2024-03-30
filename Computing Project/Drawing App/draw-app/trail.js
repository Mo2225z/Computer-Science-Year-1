function Trail() {
  //set an icon and a name for the object
  ///trail array to store poistions of the trail
  let trail = [];
  //I will be using this to remove elements from the trail array
  let a = 0;

  this.icon = "assets/trail.png";
  this.name = "trail";
  ///I will be using this check to switch between which trails are drawn using the created buttons below
  let check = 0;
  ///drawing the trail
  this.draw = function () {
    //using push and pop in order to make sure that updatePixels only works with this function to avoid interference with other tools
    push();
    updatePixels();
    //pushing mouseX and mouseY positions into the trail array
    trail.push([mouseX, mouseY]);
    //going through the trail array and using the mouseX and mouseY postions to draw the trails
    for (let i = 0; i < trail.length; i++) {
      noStroke();

      switch (check) {
        //checking if check = 1 and drawing an ellispe using trail array
        case 1:
          ellipse(trail[i][0], trail[i][1], 10);
          break;
        case 2:
          //checking if check = 2 and drawing a star using trail array
          star(trail[i][0], trail[i][1], 10, 5, 5);
          break;
      }
      a;
      if (a > 255) {
        //removes elments from trail is a is greater than 255
        trail.shift();
        //this will set a back to zero
        a = 0;
      }
      //incrementing a by 8 each loop
      a += 8;
    }
    pop();
  };

  //creating a star function that creates a star when called using the x/y positions given to the function as a parameter
  const star = function (x, y, radius1, radius2, npoints) {
    //the angle to draw the star
    let angle = TWO_PI / npoints;
    //half angle draw the star
    let halfAngle = angle / 2.0;
    beginShape();
    //looping through array and drawig the star
    for (let a = 0; a < TWO_PI; a += angle) {
      //getting sx and sy postions using the cosine and sin functions while mutiplying by the radius with the angle
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      //creating a vertex with sx and sy positions
      vertex(sx, sy);
      //getting sx and sy postions using the cosine and sin functions while mutiplying by the radius with the half angle
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      //drawing the second vertex using sx and sy positions
      vertex(sx, sy);
    }
    endShape(CLOSE);
  };
  //function called when the tool is unselected
  this.unselectTool = function () {
    //clear options
    select(".options").html("");
    //setting check back to default
    check = 0;
  };
  ///function populates options to be used by the user
  this.populateOptions = function () {
    //Selcting the element with options
    select("#options").html("<button id='heart'></button>");

    //creating button using DOM
    const circle = select("#heart");
    circle.style("background-image", "url(assets/circle.png)");
    circle.style("width", "45px");
    circle.style("height", "41px");
    //checking if the button has been clicked then setting the check variable to a number
    circle.mouseClicked(function () {
      check = 1;
    });
    //creating button using DOM
    const star = createButton("");
    star.parent("#options");
    star.style("background-image", "url(assets/star.png)");
    star.style("margin-left", "6px");
    star.style("width", "45px");
    star.style("height", "40px");
    //checking if the button has been clicked then setting the check variable to a number
    star.mouseClicked(function () {
      check = 2;
    });
  };
}
