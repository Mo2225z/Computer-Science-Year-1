function HelperFunctions() {
  //p5.dom click click events. Notice that there is no this. at the
  //start we don't need to do that here because the event will
  //be added to the button and doesn't 'belong' to the object

  //event handler for the clear button event. Clears the screen
  select("#clearButton").mouseClicked(function () {
    //???
    //Resets background by creating a new canvas each time
    canvasContainer = select("#content");
    let c = createCanvas(
      canvasContainer.size().width,
      canvasContainer.size().height =  495
    );
    c.parent("#content");

    //call loadPixels to update the drawing state
    //this is needed for the mirror tool
    loadPixels();
  });

  //event handler for the save image button. saves the canvsa to the
  //local file system.
  select("#saveImageButton").mouseClicked(function () {
    //???
    //Saves Canvas
    saveCanvas("Picture", "png");
  });
}
