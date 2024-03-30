function Eraser() {
  //set an icon and a name for the object
  this.icon = "assets/eraser.jpg";
  this.name = "eraser";
  //variable to check if mouse has been pressed
  let check = false;
  //Draws the eraser
  this.draw = function () {
    ///push current state
    push();
    ///Tenary operator to check if the mouse was pressed;
    mouseIsPressed == true ? (check = true) : (check = false);
    //if mouse is pressed the eraser will display
    if (check) {
      //no Stroke because I don't want that to appear for the actual eraser
      noStroke();
      const colourPicker = $("#backgroundColour").val();
      fill(colourPicker);
      //grabbing value from background colour picker
      //this will erase any work on the canvas
      ellipse(mouseX, mouseY, 60, 60);
    }
    ///pop the current state to avoid filling other objects in the program
    pop();
  };

  //using unselect to the remove the eraser icon once the tool is unselected
  this.unselectTool = function () {
    //clear options
    select("#content").style("cursor", "default");
  };

  //populating options (Drawing the icon for the mouse);
  this.populateOptions = function () {
    //selcting the canvas
    const canvas = select("#content");
    //image to mouse pointer via CSS on the canvas
    canvas.style("cursor", "url(assets/eraser-icon.png),auto");
  };
 
  $("#backgroundColour").change(() => {
    //call this.draw to change the fill of the eraser
    this.draw();
  });
}
