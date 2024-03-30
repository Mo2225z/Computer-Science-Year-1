//Displays and handles the colour palette.
function ColourPalette() {
  this.loadColours = function () {
    //using the value from the colour picker as an input parameter for this function
    setColour($("#colourInput").val());
  };

  this.loadBackground = function () {
    //grabbing value from backgroundcolour colourpicker input
    const colourPicker = $("#backgroundColour").val();
    //selecting Canvas element
    const canvas = select("#content");
    //Setting background of canvas to colourpicker input
    canvas.style("background-color", colourPicker);
  };

  const setColour = function (colour) {
    //setting selcted colour to colour
    this.selectedColour = colour;

    //filling the canvas using selcted colour
    fill(this.selectedColour);
    stroke(this.selectedColour);
  };
  //calling this.loadcolours
  this.loadColours();

  //updating this.loadclours everytime the user picks a different colour from the colour picker
  $("#colourInput").change(() => {
    this.loadColours();
  });
  //changing the background value 
  $("#backgroundColour").change(() => {
    //Calling this.loadbackground to change the value of the background when the background colour input value changes
    this.loadBackground();
  });
}
