


//Explanation: Hue and value/light are the most important factors in creating complementary colours.Example being a hue that has zero in value will appear dark and unrecognizable. Hue is more imporant for creating complementary colours reason being that a hue may be high in value or low in value but as long as you can see the hue you will be able to tell if that colour is complementary or not. A dark or light green is still green.  

//The complementary colour will always be on the opposite side of the artists spectrum from the first chosen colour. We consider complementary colours to be opposite as they are the more contrasting hues. I've  chosen green and red for opposite colours as they are both complementary colours to each other.



//Hue: For the red hue you can either use 0 or 360 degrees as the starting hue. 360 - 270 gives you yellow on the colour wheel and 90 plus 270 gives you red. 90 * 4 gives you 360 which is red on the wheel and 360/4 gives you 90 which is yellow. Complementary colours tend to have non fractional mutiples. 


//Reference: https://copicmarkertutorials.com/using-complementary-colors-effectively-video/



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

//inner rect values
let hue, saturation, value;


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

  //Outside red
  leftColor = color(leftHueAngle - hueAngleOffset, 100, 100);
  //Outside Green
  rightColor = color(leftHueAngle - 60, 100, 50);
  

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

    
  //values for first inner rect (green)
  hue = createSlider(0, 360, 120);
  hue.parent(div);
  saturation = createSlider(0, 100, 100);
  saturation.parent(div);
  value = createSlider(0, 100, 50);
  value.parent(div);

   
  //values for second inner rect (red)
  hueSecond = createSlider(0, 360, 360);
  saturationSecond = createSlider(0, 100, 100);
  valueSecond = createSlider(0, 100, 100);
  
  /// ---------Even more advanced-------------------------------- 
  /// Use a button to display or print out or even save values you like:
  /// https://p5js.org/examples/dom-input-and-button.html
    
    
    //button to save values
    valueButton = createButton('Save Colour Values');
    
    //mousePressed callback function
    valueButton.mousePressed(function() {
        
        console.log("The first inner rect values are: ", hue.value(), saturation.value(), value.value());
        console.log("The second inner rect values are: ", hueSecond.value(), saturationSecond.value(), valueSecond.value());
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
    
  //with slider values
  fill(hue.value(), saturation.value(), value.value());
  rect(width/8, height/8, width/4, height/2);  
  fill(hueSecond.value(), saturationSecond.value(), valueSecond.value());
  rect(width/2+width/8, height/8, width/4, height/2);   
}
