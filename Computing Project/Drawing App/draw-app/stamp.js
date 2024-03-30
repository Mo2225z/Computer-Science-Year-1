function Stamp() {
  //set an icon and a name for the object
  this.icon = "assets/stamp.png";
  this.name = "stamp";
  //This is the stamp array containing the stamp object
  const stampArray = [];
  ///I will be using to check if the dom elements have been clicked then updating this variable
  let check = 0;
  //Stamp object
  const stampsObject = {
    //drawing Facestamps
    drawFaceStamp: function (x, y) {
      push();
      angleMode(RADIANS);
      //Mouth
      fill(252, 157, 154); //light pink

      //Face
      fill(249, 205, 173); //rosy beige
      ellipse(x, y, 100, 100);

      //Eye 1
      fill(30); //dark gray
      ellipse(x, y, 10, 10);

      //Eye 2
      ellipse(x + 20, y, 10);

      //Mouth
      fill(252, 157, 154); //light pink
      arc(x, y + 20, 30, 30, 0, radians(180), PIE);
      pop();
    },
    //random shaped stamp
    drawRandomStamp: function (x, y) {
      // Push current state
      push();
      fill(random(255), random(255), random(255));
      ellipse(x, y, random(50), random(50));
      //Pop current state
      pop();
    },
    //Heart shaped stamp
    drawHeartShape: function (x, y) {
      //using begin shape to draw the heart
      beginShape();
      vertex(x, y);
      bezierVertex(x - 100 / 2, y - 100 / 2, x - 100, y + 100 / 3, x, y + 100);
      bezierVertex(x + 100, y + 100 / 3, x + 100 / 2, y - 100 / 2, x, y);
      endShape(CLOSE);
    },
  };

  //this will use the object above to draw the stamps
  this.draw = function () {
    //getting the array returned from emit
    const newStampsArray = emit();
    //when the user presses the mouse after selecting one of the buttons then one these switch cases will become valid
    //only works when the mouse is on the canvas to avoid bugs
    if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      switch (check) {
        case 1:
          newStampsArray[1].drawHeartShape(mouseX, mouseY);
          break;
        case 2:
          newStampsArray[1].drawFaceStamp(mouseX, mouseY);
          break;
        case 3:
          newStampsArray[0].drawRandomStamp(mouseX, mouseY);
          break;
        case 4:
          //draws a looped stamps
          push();
          for (let i = 0; i < radians(360); i += radians(40)) {
            push();
            translate(mouseX, mouseY);
            rotate(i);
            translate(0, 150);
            newStampsArray[1].drawRandomStamp(0, 0);
            pop();
          }
          pop();
          break;
      }
    }
  };

  //function pushes object into array;
  const emit = function () {
    for (let i = 0; i < 10; i++) {
      stampArray.push(stampsObject);
    }
    //returns array
    return stampArray;
  };

  this.unselectTool = function () {
    //clear options
    select(".options").html("");
  };

  this.populateOptions = function () {
    //Selcting the element with options
    select("#options").html("<button id='heart'></button>");

    //creating button using DOM
    const heart = select("#heart");
    heart.style("background-image", "url(assets/heart.png)");
    heart.style("width", "50px");
    heart.style("height", "42px");
    //checking if the button has been clicked then setting the check variable to a number
    heart.mouseClicked(function () {
      //setting check to 1 if heart button is clicked
      check = 1;
    });
    //creating button using DOM
    const face = createButton("");
    face.parent("#options");
    face.style("background-image", "url(assets/face.png)");
    face.style("margin-left", "6px");
    face.style("width", "45px");
    face.style("height", "42px");
    //checking if the button has been clicked then setting the check variable to a number
    face.mouseClicked(function () {
    //setting check to 2 if face button is clicked
      check = 2;
    });
    //creating button using DOM
    const randomShapes = createButton("");
    randomShapes.parent("#options");
    randomShapes.style("background-image", "url(assets/random.png)");
    randomShapes.style("margin-left", "5px");
    randomShapes.style("width", "46px");
    randomShapes.style("height", "42px");
    //checking if the button has been clicked then setting the check variable to a number
    randomShapes.mouseClicked(function () {
    //Setting check to 3 if random button is clicked
      check = 3;
    });

    const loop = createButton("");
    loop.parent("#options");
    loop.style("background-image", "url(assets/loop.jpg)");
    loop.style("margin-left", "5px");
    loop.style("width", "46px");
    loop.style("height", "42px");
    //checking if the button has been clicked then setting the check variable to a number
    loop.mouseClicked(function () {
      check = 4;
    });
  };
}
