///
/// Generating computational pallettes.
/// by Evan Raskob <e.raskob@gold.ac.uk>
//
/// - Demonstrating how to use HSB to create pallettes.
/// - Use this as a template for your assignment.

/// Different pallettes are implemented in separate functions
/// so you can choose which to run in your main draw() loop.
/// Each one takes in a start x and y coordinate and the size
/// of the pallette to draw on the screen, so you can draw
/// multiple pallettes at the same time in different areas.

///---------------------------------------------------------
///---------------YOUR TASK-----------------------------------
///---------------------------------------------------------

/// Look for lines that start with '// FINISH THIS'

/// 1. Look over all the code
/// 2. Finish the createAnalogousPalette() function according to the instructions
/// 3. Create 4 different color palettes using createAnalogousPalette() and
///   createMonochromaticPalette() and draw them using drawPalette(). Explain the
///   theory behind each one in a brief comment when you create it (at least give
///   the name of the colour scheme). Try to use terms from the class readings
///   and your previous experiments.
///   See also http://printingcode.runemadsen.com/lecture-color/

///---------------------------------------------------------------------

/**
 * Draw any array of colours, i.e. a palette.
 *
 * @param {Array} palette Array of colour values to draw
 * @param {Number} startX Start x coordinate for pallette
 * @param {Number} startY Start y coordinate for pallette
 * @param {Number} size Size of the entire pallette to draw on the screen in pixels
 */

//This moves my random Palette
var moveX = 0;

function drawPallette(palette, startX, startY, size) {
  let numberOfColors = palette.length; // total colours to draw

  // size of each of the pallette's color swatches in pixels
  let swatchSize = size / numberOfColors;

  push(); // save drawing state
  translate(startX, startY); // move to start x,y position

  for (let colorIndex = 0; colorIndex < numberOfColors; colorIndex++) {
    noStroke();
    rectMode(CORNER);

    // draw color square
    fill(palette[colorIndex]);
    rect(0, 0, swatchSize, swatchSize);

    // move drawing cursor to next position for next loop
    translate(swatchSize, 0);
  }
  pop(); // return to original drawing state
}

///---------------------------------------------------------

// A monochromatic color scheme. That means it is all the same colour (hue),
// with different shades represented by using fixed intervals of brightness.
// Note that the saturation stays the same throughout.

/**
 * @param {Number} hue Hue angle for this color range, from 0-359
 * @param {Number} sat how "colorful" or gray this color is, from 0-100
 * @param {Number} numberOfColors number of colors in this pallette
 * @returns {Array} An array of colour values
 */
function createMonochromaticPalette(hue, sat, numberOfColors) {
  let palette = []; // empty array to fill with colours and return at end
  let maxBrightness = 255; // max brightness value for a colour

  colorMode(HSB); // correct color mode for color() function

  // for all shades of this colour, calculate colour values and add to array
  for (let colorIndex = 0; colorIndex < numberOfColors; colorIndex++) {
    let currentBrightness = (maxBrightness * colorIndex) / numberOfColors;
    let currentColor = color(hue, sat, currentBrightness);

    palette.push(currentColor);
  }

  // return array of colours
  return palette;
}

///---------------------------------------------------------
/// Finish this function! See below:
///---------------------------------------------------------

// Analogous colors: This is a polychromatic color scheme using
// fixed intervals of changing hue angles to generate a pallette
// of multiple hues (colors) that are close to one another.
//
// In other words, to create a pallette of 6 colours, start with
// a hue angle (say 0) and increase it by a fixed amount (say
// 30 degrees) 6 times to create 6 different color swatches of
// hues 0, 30, 60, 90, 120, 150. Brightness and saturation stay the same.

/**
 * @param {Number} hue Hue angle for this color range, from 0-359
 * @param {Number} sat how "colorful" or gray this color is, from 0-100
 * @param {Number} bright brightness of colours, from 0-255
 * @param {Number} hueInterval interval between hue values for each colour (hue is 0-360 total)
 * @param {Number} numberOfColors number of colors in this pallette
 * @returns {Array} An array of colour values
 */
function createAnalogousPalette(hue, sat, bright, hueInterval, numberOfColors) {
  let palette = []; // empty array to fill with colours and return at end

  colorMode(HSB); // correct color mode for color() function

  for (let i = 0; i < numberOfColors; i++) {
    // FINISH THIS: how do we calculate the current hue?
    let currentHue = (hue + i * hueInterval) % 360; // fix this! It's not 0

    // calculate current colour
    let currentColor = color(currentHue, sat, bright);

    // FINISH THIS: add to the palette array and return it at the end
    // ...
    palette.push(currentColor);
  }

  // FINISH THIS: return the palette at the end
  // ...
  return palette;
}

//--------------------------------------------------------------
/// Global variables

let monochromaticPalette; // this will hold our palette array
let analogousPalette; // this will hold our palette array

// FINISH THIS: save custom palettes into these arrays in the setup() function:

let myPalette1; // this will hold another palette array
let myPalette2; // this will hold another palette array
let myPalette3; // this will hold another palette array

//--------------------------------------------------------------

///-------------------------------------------
///----------SETUP----------------------------
///-------------------------------------------

function setup() {
  /// You can change the size of your drawing canvas if needed!
  createCanvas(500, 400);

  // We can use HSB mode as follows
  // from (https://p5js.org/reference/#/p5/colorMode):
  // Setting colorMode(HSB) lets you use the HSB system instead.
  // By default, this is colorMode(HSB, 360, 100, 100, 1).
  // You can also use HSL instead of HSB.

  colorMode(HSB);

  let hue = 60;
  let sat = 100;
  let bright = 100;
  let hueInterval = 15;
  let numberOfColors = 12;

  // calculate palettes
  monochromaticPalette = createMonochromaticPalette(
    hue,
    sat - 200,
    numberOfColors
  );
  analogousPalette = createAnalogousPalette(
    hue,
    sat,
    bright,
    hueInterval,
    numberOfColors
  );

  // FINISH THIS: create your own palettes:
  //myPalette1 = ???
  //myPalette2 = ???
    
//Looping Palette 
  hue = 0;
  hueInterval = 60;
  myPalette1 = createAnalogousPalette(
    hue,
    sat,
    bright,
    hueInterval,
    numberOfColors
  );

    
//Tetradic Palette
  hueInterval = 90;
  myPalette2 = createAnalogousPalette(
    hue,
    sat,
    bright,
    hueInterval,
    numberOfColors
  );
// Moving Palette
  hue = random(0, 360);
  hueInterval = 60;
  bright = random(80, 100);
  myPalette3 = createAnalogousPalette(
    hue,
    sat,
    bright,
    hueInterval,
    numberOfColors
  );
}

///-------------------------------------------
///----------DRAW----------------------------
///-------------------------------------------

/// draw the pallettes.

function draw() {
  background(0);
  noStroke();

  // Label the pallette. See https://p5js.org/reference/#/p5/text
  fill(180); // gray
  textSize(16);
  text("Monochromatic", 10, 48 - 12);
  drawPallette(monochromaticPalette, 10, 48, 200);

  fill(180); // gray
  textSize(16);
  text("Analogous with hue = 60, interval = 15", 10, 128 - 12);
  // draw with hue = 220
  drawPallette(analogousPalette, 10, 128, 200);

  /// draw other pallettes below -- possibly resize your canvas.
  text("Looping Palette with hue = 0, interval = 60", 10, 200 - 12);
  drawPallette(myPalette1, 10, 200, 200);
 
  //Draws Tetradic Palette
  text("Tetradic Palette with hue = 0, interval = 90", 10, 275 - 12);
  drawPallette(myPalette2, 10, 275, 200);
    
    
  ///draws moving Palette which changes the hues randomly
  text("Moving random Palette (Refresh the page to see the effect)", 10, 350 - 12);
  //Forloop to move the x position of the Palette
  for (var i = 0; i < 50; i++) {
    drawPallette(myPalette3, moveX + i * 15, 350, 100);
    if (moveX + width >= width) {
      moveX = 0 - 250;
    }
  }

  moveX += 2;
}
