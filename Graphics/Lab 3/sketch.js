/**
 * Cells workshop starter for IS51030B Graphics
 * Create a 3D sphere-shaped container of virtual "cells"
 *
 * by Evan Raskob, 2021 <e.raskob@gold.ac.uk>
 */

// add a color property to the cell
// add a texture to the cell

let cells = []; // array of cells objects
let redCell = null; // variabale for redcell texture
let blueCell = null; //variable for bluecell texture

/**
 * Initialise the cells array with a number of new Cell objects
 *
 * @param {Integer} maxCells Number of cells for the new array
 * @returns {Array} array of new Cells objects
 */
function createCellsArray(maxCells) {
  // EXERCISE: finish this function. It should:
  // Create an empty new array, fill it with maxCells number of cells, return the array

  // steps:

  // 1. create new variable for empty array (to return at end)
  // 2. add a new Cell to the array *maxCells* times (for loop?)
  // 2b. maybe use random vectors for position and velocity
  // 3. return the array variable

  //using Maxcells to push random cells into the cell array to draw the cells below,
  for (let i = 0; i < maxCells; i++) {
    //Creating a new cell object then pushing into the cell array
    cells.push(
      new Cell({
        position: p5.Vector.random3D().mult(2),
        velocity: p5.Vector.random2D(),
        diameter: random(20, 40),
        life: round(random(0, 100)),
      })
    );
  }
  //returning the newly created cells array
  return cells;
}

/**
 * Exercise: draw each of the cells to the screen
 * @param {Array} cellsArray Array of Cell objects to draw
 */
function drawCells3D(cellsArray) {
  // Loop through the cells array, for each cell:
  // 1. update the cell (call the update function)
  // 2. draw the cell (first push the drawing matrix)
  // 2.1. translate to cell's position
  // 2.2 draw a sphere with the cell diameter
  // 2.3 pop the drawing matrix

  //loop through cells array
  for (let i = 0; i < cellsArray.length; i++) {
    //update the cells array
    cellsArray[i].update();
    //push current matrix
    push();
    //get positions from the cell array
    let position = cellsArray[i].getPosition();
    //use positions to translate the array on x, y and z
    translate(position.x, position.y, position.z);
    //checking if cell life is below 20 and adding a blue texture and red if above
    if (cellsArray[i].getLife() < 20) {
      translate(position.x, position.y + 100, position.z);
      //Rotate the x,y and z by the frame count
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      rotateZ(frameCount * 0.01);
      //adding texture to the shape
      texture(blueCell);
      torus(cellsArray[i].getDiameter());
    } else {
      //adding texture to the shape
      texture(redCell);
      sphere(cellsArray[i].getDiameter());
    }
    //draw the sphere using cell arrray diameter
    pop();
  }
}

/**
 * Check collision between two cells (overlapping positions)
 * @param {Cell} cell1
 * @param {Cell} cell2
 * @returns {Boolean} true if collided otherwise false
 */
function checkCollision(cell1, cell2) {
  // Exercise: finish this (see the online notes for a full explanation)
  //
  // 1. find the distance between the two cells using p5.Vector's dist() function
  // 2. if it is less than the sum of their radii, they are colliding
  // 3. return whether they are colliding, or not

  //Get diamaters from the celll arrays
  let r1 = cell1.getDiameter();
  let r2 = cell2.getDiameter();
  //get Positions from the cell arrays
  let pos1 = cell1.getPosition();
  let pos2 = cell2.getPosition();
  //find distance
  let d = p5.Vector.dist(pos1, pos2);

  //check if colliding with other cells using the radius of both cells
  if (d < (r1 + r1) / 2) {
    //return if the cells are colliding
    return true;
  }
}

/**
 * Collide two cells together
 * @param {Array} cellsArray Array of Cell objects to draw
 */
function collideCells(cellsArray) {
  // 1. go through the array
  for (let cell1 of cellsArray) {
    for (let cell2 of cellsArray) {
      if (cell1 !== cell2) {
        // don't collide with itself or *all* cells will bounce!
        if (checkCollision(cell1, cell2)) {
          // get direction of collision, from cell2 to cell1
          let collisionDirection = p5.Vector.sub(
            cell1.getPosition(),
            cell2.getPosition()
          ).normalize();
          //random collision directions for speed of the cells so some appear faster than others
          collisionDirection.mult(random(1, 2));
          cell2.applyForce(collisionDirection);
          cell1.applyForce(collisionDirection.mult(-1)); // opposite direction
        }
      }
    }
  }
}

/**
 * Constrain cells to sphere world boundaries.
 * @param {Array} cellsArray Array of Cell objects to draw
 */
function constrainCells(cellsArray, worldCenterPos, worldDiameter) {
  // 1. go through the array
  for (let cell of cellsArray) {
    cell.constrainToSphere(worldCenterPos, worldDiameter);
  }
}

//Handle life function to delete cells
function handleLife(cellsArray) {
  //loooping through cells array backwards in order to avoid index passing errors which is caused by looping foward
  for (let i = cellsArray.length - 1; i > 0; i--) {
    //checking if the life is below 0
    if (cellsArray[i]._life < 0) {
      //Delete the cells;
      cellsArray.splice(i, 1);
    }
  }
}

//function to create baby cells after cells have died
function mitosis(cellsArray) {
  //check if cells life is less than 10 add new cells with a 50% chance
  if (random() > 0.55) {
    //baby cell creation.
    let baby = new Cell({
      position: p5.Vector.random3D().mult(2),
      velocity: p5.Vector.random2D(),
      diameter: random(20, 40),
      life: round(random(0, 100)),
    });
    //push new cells into array
    cellsArray.push(baby);
  }
  //call the handleLife function to delete parent cells
  handleLife(cellsArray);
}
//function that draws a colour changing 3D shape that moves on the screen
function shape3D() {
  //pushing the current matrix
  push();
  //set stroke weight
  strokeWeight(3);
  fill(237, 34, 93);
  //set Material for 3D shape
  normalMaterial();
  //rotate the x,y,z coordinates using the frame count
  rotateY(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  //Controls the size of the shape
  size = 5;
  //translate the z coordinate to move the 3D shape
  translate(0, 0, 150);
  //loop from o to two pi and increment by 0.1 each time
  for (let u = 0; u < TWO_PI; u += 0.1) {
    //begining a shape for a vertex to draw the 3D shape
    beginShape(TRIANGLE_STRIP);
    for (let v = -PI; v < PI; v += 0.1) {
      //creating variables for x, y and z positions of the 3D shape
      x = cos(u) * (4 + 3.8 * cos(v));
      y = sin(u) * (4 + 3.8 * cos(v));
      z =
        (cos(v) + sin(v) - 1) * (1 + sin(v)) * log(1 - (PI * v) / 10) +
        7.5 * sin(v);
      //using the x, y and z positions to draw the vertex. It's proportional to the size variable
      vertex(size * x, size * y, size * z);
      //creating variables for x and y positions of the 3D shape
      x = cos(u + 0.1) * (4 + 3.8 * cos(v));
      y = sin(u + 0.1) * (4 + 3.8 * cos(v));
      //using the x andz positions to draw the vertex. It's proportional to the size variable
      vertex(size * x, size * y, size * z);
    }
    //closing the shape
    endShape(CLOSE);
  }
  //poping the current state to avoid having fill fucntion mess with the lighting
  pop();
}

//Preload images for texture
function preload() {
  //redcell image
  redCell = loadImage("Images/red.png");
  //blue cell image
  blueCell = loadImage("Images/blue.png");
}

function setup() {
  createCanvas(800, 600, WEBGL);
  // This is for part 2: creating a list of cells
  cells = createCellsArray(15);
}

///----------------------------------------------------------------------------
/// p5js draw function
///---------------------------------------------------------------------------
function draw() {
  orbitControl(); // camera control using mouse

  //lights(); // we're using custom lights here
  directionalLight(180, 180, 180, 0, 0, -width / 2);
  directionalLight(255, 255, 255, 0, 0, width / 2);

  ambientLight(60);
  pointLight(200, 200, 200, 0, 0, 0, 50);
  noStroke();
  background(80); // clear screen
  ambientMaterial(80, 202, 94); // magenta material

  collideCells(cells); // handle collisions
  constrainCells(cells, createVector(0, 0, 0), width); // keep cells in the world
  drawCells3D(cells); // draw the cells
  if (random() > 0.5) {
    handleLife(cells); //handles life of cells and deletes them after a certian life
  }

  if (random() > 0.5) {
    mitosis(cells); //handles cell mitosis by creating new cells after the previous one has died with a 50% chance
  }

  // draw world boundaries
  ambientMaterial(255, 102, 94); // magenta material for subsequent objects
  sphere(width); // this is the border of the world, a little like a "skybox" in video games
  //draws 3D shape
  shape3D();
}
