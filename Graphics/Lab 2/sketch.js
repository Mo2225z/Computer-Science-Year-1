//Title: The batman who laughs

//The theme is madness as batman slowly turns insane from the jokers influence.

//Refferences:

//I was inspired by the scott synders created comic book 'the batman who laughs' which depicts the dark knight slowing his grasp on sanity and eventually becoming a cold blooded killer.
//
//link : https://comicnewbies.com/2017/11/15/the-batman-who-laughs-kills-the-bat-family/

//I took inspiration from Rahul Mohites work in using draw sections of an image to create a glitch effect in order to make my own version

//link: https://learn.gold.ac.uk/pluginfile.php/1775001/mod_page/content/4/Rahul%20Mohit%20glitch.gif

// Art made by Rocksteady.
// source: https://www.godisageek.com/reviews/batman-arkham-knight-review/
let Batman;

// Joker Smile, from https://paintbynumbers.uk/products/joker-smiley-face-new-paint-by-number/
let Smile;

///Created by Francyspa
let Batarang; // source img: https://www.pngitem.com/middle/xwhbiw_batarang-drawing-for-free-download-on-arkham-knight/

//Made by Adam Linardi
//source: https://www.pngitem.com/middle/hboxJx_jokers-smile-tattoo-on-hand-clipart-png-download/
let Joker;
//Made by jokerpbr
let Face; //source: https://twitter.com/jokerpbr

///-------------------------------------------------------
/// --- MASKING-------------------------------------------
///
/**
 * Turn an image into a black and white mask using a threshold
 * filter to make all lighter pixels white and all darker ones black.
 * This permanently modifies the image, in memory!
 *
 * @param {p5.Image} srcImage Source image to turn into a black/white mask image
 */
function createMask(srcImage) {
  //-------------------------------------------------------
  // --- FILTERING ----------------------------------------
  // filter images -- must be done AFTER create canvas
  // https://p5js.org/reference/#/p5/filter
  //
  srcImage.filter(BLUR, 2); // make this image slightly blurry
  srcImage.filter(THRESHOLD); // turn white/black only
  srcImage.filter(ERODE); // reduce light areas
}

/// --- PRELOAD ------------------------
/// This is useful to load an image  or do a task that is important to run
/// *before* the sketch is loaded. preload() runs once *before* setup

function preload() {
  // load images from the assets folder
  Batman = loadImage("Images/Batman.jpg");

  Smile = loadImage("Images/Smile.jpg");

  Joker = loadImage("Images/Joker.png");

  Batarang = loadImage("Images/Batarang.jpg"); // PNG files have transparency, JPGs don't

  Face = loadImage("Images/Face.png");

  pixelDensity(1); // if you are on a very large screen, this can
  // help your images scale to the proper size when drawn
}

///
/// Setup -------------------------
///
function setup() {
  // tell us something out out images
  console.info("Image dimensions");
  console.info("----------------");

  console.info("Batman:" + Batman.width + "/" + Batman.height);

  console.info("Smile:" + Smile.width + "/" + Smile.height);

  console.info("Joker:" + Joker.width + "/" + Joker.height);

  createCanvas(Batman.width, Batman.height); // create a canvas EXACTLY the size of our image
}

/**
 * This is a slightly more convenient way to
 *  draw Smile's eye on the canvas.
 *
 * @param {Number} x center coordinate on canvas to start drawing
 * @param {Number} y center coordinate on canvas to start drawing
 * @param {Number} w (optional) width of image to draw on canvas
 * @param {Number} h (optional) height of image to draw on canvas
 */
function drawSmileEye(x, y, w, h) {
  // https://p5js.org/reference/#/p5/image

  image(
    Smile,
    x - w / 2,
    y - h / 2, // subtracting 1/2 the dimensions
    // centers the image
    w,
    h,
    262,
    308, // start coordinates of her left eye
    112,
    82 // width and height of eye
  );
}

/**
 * Draw a mask image onto the screen using SCREEN blend mode.
 * This means the black parts of this image will white out the
 * pixels below it, and the white parts of this image will let the
 * pixels below show through unaltered.
 *
 * @param {p5.Image} img Mask image
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
 */
function drawMask(img, x, y, w, h) {
  // or try screen
  blendMode(SCREEN);
  imageMode(CENTER); // draw using center coordinate
  image(img, x, y, w, h);
}

///-----------------------------
///--- DRAW --------------------
///-----------------------------

function draw() {
  tint(255, 255); // reset tint to full color and no transparency

  imageMode(CORNER);
  // draw the image to fill the canvas exactly
  image(Batman, 0, 0);
  //I will be using these variables for other images so they are positioned correctly even when the background is shaking
  const x = random(0, 20);
  const y = random(0, 15);
  image(Batman, x, y);

  tint(255, 240); // make everything after this a little transparent

  imageMode(CORNER);

  //This causes a jitter effect with batarangs
  let jitter = 0;
  if (second() % 2 === 0) {
    jitter = random(-0.1, 0.1);
  }

  //Transparent Batarangs
  for (let i = 0; i < radians(360); i += radians(40)) {
    push();
    translate(width / 2, height / 2);
    rotate(i + jitter);
    translate(0, 150);
    let x = 0;
    image(Batarang, 0, 0);
    pop();
  }

  //Drawing the sliced smiles
  glitch(Smile, 4);

  //Calling the function which returns an array that I can use to draw the smiles
  let smiles = jokerSmiles();

  //  Drawing Joker Smiles
  for (let i = 0; i < smiles.length; i++) {
    push();
    tint(255, 170);
    drawRandomImageSection(Joker, smiles[i].x, smiles[i].y, smiles[i].radius);
    Joker.filter(INVERT);
    pop();
  }
  //Drawing a masked face using the mask function
  if (second() % 2 === 0) {
    push();
    drawMask(Face, 486 + x, 166 + y, Face.width, Face.height);
    pop();
  }
} // end draw()

function drawRandomImageSection(img, desX, desY, radius) {
  // TO DO: make these variables random, but with sensible numbers based on the image properties. How
  // about using the x/y location to draw patterns? A more advanced function could even take in arguments
  // for a particular area of the screen to draw into.

  frameRate(2);
  let sourceX = 0; //???
  let sourceY = 0; //???
  let sourceWidth = 0; //???
  let sourceHeight = 0; //???

  let destX = desX; //???
  let destY = desY; //???
  let destWidth = radius * 2; //???
  let destHeight = 0; //???

  // How about adding some filters, blending, or other effects?

  // Displays the random part of the image on the screen
  image(
    img,
    destX,
    destY,
    destWidth,
    destHeight,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight
  );
}
//Function that pushes joker object into an array called jokerSmiles;
function jokerSmiles() {
  const jokerSmiles = [];
  //creating joker object
  for (let i = 0; i < 4; i++) {
    let joker = {
      x: random(0, width - Joker.width),
      y: random(0, height - Joker.height),
      radius: 80,
    };
    //Making sure none of these images overlap
    let overlap = false;
    for (j = 0; j < jokerSmiles.length; j++) {
      let other = jokerSmiles[j];
      let d = dist(joker.x, joker.y, other.x, other.y);
      if (d < joker.radius + other.radius) {
        overlap = true;
        break;
      }
    }
    //only push into array if overlap is false
    if (!overlap) {
      jokerSmiles.push(joker);
    }
  }
  //return an array with x and y coordinates of joker smiles to be drawn
  return jokerSmiles;
}

//function uses an image then finds slices of that image to display on the screen to cause a cleaner glitch effect
function glitch(img) {
  //I am using the height and incrementing y by 30
  for (let y = 10; y < height - 10; y += 30) {
    tint(255, 170);
    //I am picking randamn points of x and y from the img
    let stripY = int(random(0, height - 10));
    let strip = img.get(0, stripY, img.width, 10);
    //i ma using strip to create the new image at random locations on x
    image(strip, random(5, width), y);
  }
}
