

//Ground subraction: Allows both inner rectangles to appear lighter and darker by using the relationship between the rectangles and the ground, the ground being the outer rectanges. The values common to both with their grounds are reduced making one blue rectangle appear darker than the other. Example being the blue rectangle on the yellow background appearing darker since the common lighter value between both is reduced. 


/// Albers contrast squares
/// by Evan Raskob <e.raskob@gold.ac.uk>
//
/// - Demonstrating using HSB colour mode in p5js.
/// - Learning about saturation, lightness and hue using
///     background contrast.


// Colours for right square, left square, and 
// centre square that sits in both.
// NOTE: these are of object type p5.Color

let leftColor, rightColor, centreColor;


function setup() {
  createCanvas(400, 400);
  
  // We can use HSB mode as follows 
  // from (https://p5js.org/reference/#/p5/colorMode):
  // Setting colorMode(HSB) lets you use the HSB system instead.
  // By default, this is colorMode(HSB, 360, 100, 100, 1). 
  // You can also use HSL instead of HSB.

  colorMode(HSB);

  let leftHueAngle = 180; // set this to something fun. 0 is red.

  // Offset for right square colour: some fraction of 
  // a circle. 180 is opposite color, 360 goes back to the same 
  // colour (360 rotation)
  let hueAngleOffset = 360/2; 
    
   //Yellow outer circle
  leftColor = color(leftHueAngle - 120, 100, 80);
  //Purple outer circle
  rightColor = color(leftHueAngle + 120, 100, 40);

  ///
  /// ----------EXERCISE FOR YOU TO DO---------------------------
  /// Try changing this to change the centre squares until
  /// they both look like different colours. Find 2 combinations
  /// of colours for outer and centre squares. What parameters
  /// worked best, and why?

  centreColor = color(140, 70, 60);

  /// ----------More advanced------------------------------------
  /// You can add slider GUI (graphical user interface) elements
  /// to help chose colours instead of typing them in.
  /// See: https://p5js.org/examples/dom-slider.html
  /// Create 3 sliders, one for each of hue angle, saturation, and value
  /// that you use in the color(hue, saturation, value) above.
  /// Make sure to use text() or console.log() to print out the values
  /// when you find one you like!
  
    
  //Create a div to store elements
  var div = createDiv();
    
  //values for first inner rect (blue)
  hue = createSlider(0, 360, 210);
  hue.parent(div);
  saturation = createSlider(0, 100, 100);
  saturation.parent(div);
  value = createSlider(0, 100, 53);
  value.parent(div);
  
  /// ---------Even more advanced-------------------------------- 
  /// Use a button to display or print out or even save values you like:
  /// https://p5js.org/examples/dom-input-and-button.html
    
    valueButton = createButton('Save Colour Values');
    
    valueButton.mousePressed(function() {
        
        console.log("The first inner rect values are: ", hue.value(), saturation.value(), value.value());
    })

  
  ///-----OTHER WAYS TO DO THIS--------------------------------------------------------
  /// There's another way to do this using ES6 syntax...
  /// uncomment the code below to use it.
  /// For this cool trick -- write a string as `my string` and you
  /// can put a variable in it using ${variable}
  /// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  
  /// hsl color is a string with hue angle (0-360),
  /// saturation (0-100%), value (0-100%)
  
  // leftColor = color(`hsl(${leftHueAngle}, 80%, 80%)`);
  
  // right colour is complimentary (180 degrees away form leftHue)
  //rightColor = color(`hsl(${leftHueAngle+hueAngleOffset}, 80%, 80%)`);
  
  // EXERCISE:
  // try changing this to change the centre squares
  // centreColor = color(`hsl(140, 70%, 60%)`);
  ///-------------------------------------------------------------

}

function draw() {
  background(0);
  
  noStroke();
  rectMode(CORNER);
  fill(leftColor);
  rect(0,0,width/2,height);
  fill(rightColor);
  rect(width/2,0,width/2,height);  
  
  // Draw a smaller rectangle (of a single colour) in the middle 
  // of both squares and experiment with centreColour (above) 
  // until you find a colour that looks different in both but is
  // actually the same colour. What did you change? Share the value.
    
  fill(hue.value(), saturation.value(), value.value());
  rect(width/8, height/8, width/4, height/2);  
  rect(width/2+width/8, height/8, width/4, height/2);   
}
