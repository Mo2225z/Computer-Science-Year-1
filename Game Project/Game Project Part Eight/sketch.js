/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scroll_pos;
var gameChar_world_x;

//variables for interactivity
var is_left;
var is_right;
var is_falling;
var is_plummeting;
var game_score;
var lives;
var background_shifter;
var background_mover;
var background_speed;
var emit;
var moveplat;
var is_contact;
var is_jump;

//Global variables for objects and arrays
var clouds;
var mountain;
var canyon;
var collectable;
var flagpole;
var wall;
var sun;
var platforms;
var enemies;

//variables for sounds
var jump_sound;
var collect_sound;
var canyon_fall;
var complete;
var game_over;
var back;
var death;

function preload() {
  soundFormats("mp3", "wav");

  //load your sounds here
  jump_sound = loadSound("assets/Jump.wav");
  jump_sound.setVolume(0.1);

  collect_sound = loadSound("assets/Collect.mp3");
  collect_sound.setVolume(0.2);

  canyon_fall = loadSound("assets/Wilhelm.wav");
  canyon_fall.setVolume(0.1);

  complete = loadSound("assets/Complete.wav");
  complete.setVolume(0.1);

  game_over = loadSound("assets/GameOver.wav");

  back = loadSound("assets/Back.mp3");
  death = loadSound("assets/Death.wav");
}

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;

  //This is the background music
  for (var i = 0; i < 10; i++) {
    back.play(i * 424);
    back.setVolume(0.05);
  }

  //This is for the lives
  lives = 4;

  //Variable for moving platform
  moveplat = 0.2;

  //Function starts game
  startGame();
}

function draw() {
  background(background_shifter, background_shifter, background_mover); // fill the sky blue

  //This will make it so there is a daytime and a nightime;
  background_shifter -= background_speed;
  background_mover -= background_speed;

  if (background_mover < -50) {
    background_speed = -background_speed;
  }

  if (background_mover > 255) {
    background_speed = -background_speed;
  }

  //stars

  if (background_mover < 0) {
    draw_stars();
  } else background_mover > 4;

  {
  }

  //Draw sun

  render_sun();

  noStroke();
  fill(186, 149, 97);
  rect(0, floorPos_y, width, height / 4); // draw some green ground

  push();
  translate(scroll_pos, 0);

  //Draw clouds.

  draw_clouds();

  //Draw mountains.

  draw_mountains();

  //Draw trees.

  draw_trees();

  //Draw canyons.

  for (var i = 0; i < canyon.length; i++) {
    draw_canyon(canyon[i]);
    check_canyon(canyon[i]);
  }

  //Draw collectable items.

  for (var i = 0; i < collectable.length; i++) {
    check_collectable(collectable[i]);

    if (collectable[i].isFound == false) {
      draw_collectable(collectable[i]);
    }
  }

  //Draw flagpole

  render_flagpole(flagpole.x_pos, flagpole.y_pos, flagpole.size);
  if (flagpole.isReached == false) {
    check_flagpole();
  }

  flagpole.size += flagpole.speed;

  if (flagpole.size > 60) {
    flagpole.speed = -flagpole.speed;
  }

  if (flagpole.size < 40) {
    flagpole.speed = -flagpole.speed;
  }

  //Draw brick wall

  render_wall();

  //Draw and update Particles
  emit.updateParticles();

  // Draw platforms
  draw_platform();

  // Draw enemies
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].draw();
    if (i % 2 == 0) {
      enemies[i].jump();
    }

    if (enemies[i].is_contact(gameChar_world_x, gameChar_y) == true) {
      startGame();
      death.play();
      death.setVolume(0.5);
    }
  }

  pop();

  //Draw game character.

  drawGameChar();

  // Logic to make the game character move or the background scroll.
  if (is_left) {
    if (gameChar_x > width * 0.2) {
      gameChar_x -= 5;
    } else {
      scroll_pos += 5;
    }
  }

  if (is_right) {
    if (gameChar_x < width * 0.8) {
      gameChar_x += 5;
    } else {
      scroll_pos -= 5; // negative for moving against the background
    }
  }

  //variable to let the character jump on the platform
  is_jump = false;
  //character can jump on the platform
  for (var i = 0; i < platforms.length; i++) {
    if (
      gameChar_world_x > platforms[i].x &&
      gameChar_world_x < platforms[i].x + platforms[i].length
    ) {
      var d = platforms[i].y - gameChar_y;
      if (d >= 0 && d < 5) {
        is_jump = true;
      }
    }
  }

  // Logic to make the game character rise and fall.
  if (is_falling)
    if (gameChar_y <= floorPos_y) {
      is_contact = false;
      for (var i = 0; i < platforms.length; i++) {
        if (
          is_contact == false &&
          platforms[i].check(gameChar_world_x, gameChar_y)
        ) {
          is_contact = true;
          break;
        }
      }
      if (is_contact == false) {
        gameChar_y += 3;
      }
    } else {
      is_falling = false;
    }

  //Falling through canyon Code
  if (is_plummeting == true) {
    gameChar_y += 15;
    canyon_fall.play();
  }

  //Resets game if character fall down the canyon
  if (gameChar_y > 540 && lives > 0) {
    startGame();
  }

  //Text to draw game score

  fill(255, 0, 0);
  textSize(20);
  text("Score:" + game_score, 50, 50);

  //text for lives
  text("Lives:", 50, 70);

  //Draw lives
  for (var i = 0; i < lives; i++) {
    fill(255, 0, 0);
    triangle(108 + 15 * i, 69.5, 103 + 15 * i, 63.5, 113 + 15 * i, 63.5);

    arc(105.5 + 15 * i, 63.5, 5, 5, PI, 0);
    arc(110.5 + 15 * i, 63.5, 5, 5, PI, 0);
  }

  //Game over
  if (lives < 1) {
    fill(255, 0, 0);
    text("Game Over. Press space to continue.", width / 2 - 150, height / 2);
    textSize();
    return;
  }

  //Level complete
  if (flagpole.isReached == true) {
    fill(255, 0, 0);
    text(
      "Level complete. Press space to continue. ",
      width / 2 - 150,
      height / 2
    );
    is_right = false;
    textSize();
    return;
  }

  ///Stops character going past the wall

  if (gameChar_world_x < -975) {
    is_left = false;
  }

  // Update real position of gameChar for collision detection.
  gameChar_world_x = gameChar_x - scroll_pos;
}

// ---------------------
// Key control functions
// ---------------------

function keyPressed() {
  console.log("press" + keyCode);
  console.log("press" + key);

  //turning left
  if (keyCode == 65 && lives > 0 && flagpole.isReached == false) {
    is_left = true;
  }

  //turning right

  if (keyCode == 68 && lives > 0 && flagpole.isReached == false) {
    is_right = true;
  }

  //Jumping
  if ((keyCode == 87 || keyCode == 32) && lives > 0)
    if (gameChar_y >= floorPos_y && flagpole.isReached == false) {
      is_falling = true;
      gameChar_y -= 100;
      jump_sound.play(0, random(0.5, 2));
    }
  //Jumping on platform
  if ((keyCode == 87 || keyCode == 32) && is_jump == true) {
    gameChar_y -= 100;
    jump_sound.play(0, random(0.5, 2));
  }
}

function keyReleased() {
  console.log("release" + keyCode);
  console.log("release" + key);

  if (keyCode == 65) {
    is_left = false;
  }

  if (keyCode == 68) {
    is_right = false;
  }
}

// ------------------------------
// Game character render function
// ------------------------------

//Function to draw the game character.

function drawGameChar() {
  // draw game character

  if (is_left && is_falling) {
    // add your jumping-left code

    //face
    noStroke();
    fill(255, 255, 0);
    ellipse(gameChar_x, gameChar_y - 25, 50);

    //eye
    fill(0);
    ellipse(gameChar_x - 10, gameChar_y - 30, 5);

    //mouth
    fill(100, 155, 255);
    triangle(
      gameChar_x - 26,
      gameChar_y - 25,
      gameChar_x,
      gameChar_y - 20,
      gameChar_x - 22,
      gameChar_y - 10
    );
  } else if (is_right && is_falling) {
    // add your jumping-right code

    //face
    noStroke();
    fill(255, 255, 0);
    ellipse(gameChar_x, gameChar_y - 25, 50);

    //eyes

    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 30, 5);

    //Mouth
    fill(100, 155, 255);
    triangle(
      gameChar_x + 25,
      gameChar_y - 25,
      gameChar_x,
      gameChar_y - 20,
      gameChar_x + 22,
      gameChar_y - 10
    );
  } else if (is_left) {
    // add your walking left code
    //Face
    noStroke();
    fill(255, 255, 0);
    ellipse(gameChar_x, gameChar_y - 25, 50);
    //Eye
    fill(0);
    ellipse(gameChar_x - 10, gameChar_y - 30, 5);
    //Mouth
    fill(255, 255, 255);
    triangle(
      gameChar_x - 25,
      gameChar_y - 25,
      gameChar_x,
      gameChar_y - 20,
      gameChar_x - 21,
      gameChar_y - 10
    );
  } else if (is_right) {
    //add your walking right code
    //Face
    noStroke();
    fill(255, 255, 0);
    ellipse(gameChar_x, gameChar_y - 25, 50);
    //eye
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 30, 5);
    //Mouth
    fill(255, 255, 255);
    triangle(
      gameChar_x + 25,
      gameChar_y - 25,
      gameChar_x,
      gameChar_y - 20,
      gameChar_x + 22,
      gameChar_y - 10
    );
  } else if (is_falling || is_plummeting) {
    //add your jumping facing forwards code

    //add your standing front facing code

    //Face
    noStroke();
    fill(255, 255, 0);
    ellipse(gameChar_x, gameChar_y - 25, 50);

    //Eyes

    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 30, 5);

    ellipse(gameChar_x - 10, gameChar_y - 30, 5);

    fill(200, 0, 0);
    ellipse(gameChar_x, gameChar_y - 10, 10);

    //Mouth

    fill(0);
    triangle(
      gameChar_x - 20,
      gameChar_y - 20,
      gameChar_x + 20,
      gameChar_y - 20,
      gameChar_x,
      gameChar_y - 3
    );

    //Tongue

    fill(200, 0, 0);
    ellipse(gameChar_x, gameChar_y - 10, 10);
  } else {
    // add your standing front facing code

    //Face
    noStroke();
    fill(255, 255, 0);
    ellipse(gameChar_x, gameChar_y - 25, 50);

    //Eyes

    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 30, 5);

    ellipse(gameChar_x - 10, gameChar_y - 30, 5);

    fill(200, 0, 0);
    ellipse(gameChar_x, gameChar_y - 10, 10);

    //Mouth

    fill(0);
    triangle(
      gameChar_x - 20,
      gameChar_y - 20,
      gameChar_x + 20,
      gameChar_y - 20,
      gameChar_x,
      gameChar_y - 3
    );

    //Tongue

    fill(200, 0, 0);
    ellipse(gameChar_x, gameChar_y - 10, 10);
  }
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

function draw_clouds() {
  for (var i = 0; i < clouds.length; i++) {
    /// Clouds
    noStroke();
    fill(255);
    ellipse(
      clouds[i].x_pos + 75,
      clouds[i].y_pos - 20,
      clouds[i].size + 25,
      clouds[i].size + 25
    );
    ellipse(
      clouds[i].x_pos + 125,
      clouds[i].y_pos - 20,
      clouds[i].size + 50,
      clouds[i].size + 25
    );
    ellipse(
      clouds[i].x_pos + 25,
      clouds[i].y_pos - 20,
      clouds[i].size + 50,
      clouds[i].size + 25
    );

    // This moves the clouds
    var cloud_move = 2;
    clouds[i].x_pos += cloud_move;

    if (clouds[i].x_pos > 3400) {
      clouds[i].x_pos = -1500;
    }
  }
}

// Function to draw mountains objects.

function draw_mountains() {
  for (var i = 0; i < mountain.length; i++) {
    //Mountain

    noStroke();
    fill(244, 164, 96);

    triangle(
      mountain[i].x_pos + 70,
      mountain[i].y_pos - 159,
      mountain[i].x_pos + 30,
      mountain[i].y_pos + 1,
      mountain[i].x_pos + 100,
      mountain[i].y_pos + 1
    );

    triangle(
      mountain[i].x_pos + 125,
      mountain[i].y_pos - 219,
      mountain[i].x_pos + 80,
      mountain[i].y_pos + 1,
      mountain[i].x_pos + 160,
      mountain[i].y_pos + 1
    );

    triangle(
      mountain[i].x_pos + 180,
      mountain[i].y_pos - 159,
      mountain[i].x_pos + 140,
      mountain[i].y_pos + 1,
      mountain[i].x_pos + 220,
      mountain[i].y_pos + 1
    );

    rect(
      mountain[i].x_pos,
      mountain[i].y_pos - 39,
      mountain[i].size,
      mountain[i].size - 10
    );

    rect(
      mountain[i].x_pos + 200,
      mountain[i].y_pos - 39,
      mountain[i].size,
      mountain[i].size - 10
    );

    //Snow on mountain

    fill(255, 255, 255);

    triangle(
      mountain[i].x_pos + 70,
      mountain[i].y_pos - 162,
      mountain[i].x_pos + 62,
      mountain[i].y_pos - 127,
      mountain[i].x_pos + 76,
      mountain[i].y_pos - 127
    );

    triangle(
      mountain[i].x_pos + 125,
      mountain[i].y_pos - 222,
      mountain[i].x_pos + 118,
      mountain[i].y_pos - 187,
      mountain[i].x_pos + 130,
      mountain[i].y_pos - 187
    );

    triangle(
      mountain[i].x_pos + 180,
      mountain[i].y_pos - 162,
      mountain[i].x_pos + 173,
      mountain[i].y_pos - 132,
      mountain[i].x_pos + 187,
      mountain[i].y_pos - 132
    );
  }
}

// Function to draw trees objects.
function draw_trees() {
  for (var i = 0; i < tree_pos.length; i++) {
    //Trees
    noStroke();
    fill(150, 75, 0);
    rect(
      tree_pos[i].x,
      tree_pos[i].y - 100,
      tree_pos[i].size * 2 - 70,
      tree_pos[i].size * 2 + 1
    );

    fill(0, 128, 0);
    ellipse(
      tree_pos[i].x + 15,
      tree_pos[i].y - 110,
      tree_pos[i].size * 2,
      tree_pos[i].size * 2
    );
  }
}

//Stops trees from overlapping once drawn
function check_trees() {
  //Random trees
  var num_tree = 100;

  for (var i = 0; i < num_tree; i++) {
    var d = random(-1024, 3048);
    var tree = { x: d, y: 432, size: 50 };
    // Stops trees from overlapping
    var overlapping = false;
    for (var j = 0; j < tree_pos.length; j++) {
      for (var x = 0; x < canyon.length; x++) {
        var other = tree_pos[j];
        var otherCanyon = canyon[x];
        var d = dist(tree.x, tree.y, other.x, other.y);
        var a = dist(tree.x, tree.y, otherCanyon.x_pos, otherCanyon.y_pos);
        if (d < tree.size + other.size) {
          overlapping = true;
        }
        if (a < tree.size + otherCanyon.size) {
          overlapping = true;
        }
      }
    }

    if (overlapping == false) {
      tree_pos.push(tree);
    }
  }
}

// ---------------------------------
// canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function draw_canyon(t_canyon) {
  //canyon
  noStroke();
  fill(153, 76, 0);
  rect(
    t_canyon.x_pos,
    t_canyon.y_pos,
    t_canyon.size * 2 - 25,
    t_canyon.size * 2 + 50
  );

  noStroke();
  fill(248, 58, 12);
  rect(
    t_canyon.x_pos,
    t_canyon.y_pos + 106,
    t_canyon.size * 2 - 25,
    t_canyon.size * 2 - 50
  );

  var r = random(-5, 5);

  //Lava
  triangle(
    t_canyon.x_pos + 15,
    t_canyon.y_pos + 94 + r,
    t_canyon.x_pos,
    t_canyon.y_pos + 110,
    t_canyon.x_pos + 25,
    t_canyon.y_pos + 109
  );

  triangle(
    t_canyon.x_pos + 40,
    t_canyon.y_pos + 94 + r,
    t_canyon.x_pos + 25,
    t_canyon.y_pos + 109,
    t_canyon.x_pos + 55,
    t_canyon.y_pos + 109
  );

  triangle(
    t_canyon.x_pos + 65,
    t_canyon.y_pos + 94 + r,
    t_canyon.x_pos + 50,
    t_canyon.y_pos + 109,
    t_canyon.x_pos + 76,
    t_canyon.y_pos + 109
  );

  triangle(
    t_canyon.x_pos + 90,
    t_canyon.y_pos + 94 + r,
    t_canyon.x_pos + 75,
    t_canyon.y_pos + 109,
    t_canyon.x_pos + 101,
    t_canyon.y_pos + 109
  );
}

//Function to check character is over a canyon.
function check_canyon(t_canyon) {
  if (
    is_plummeting == false &&
    gameChar_world_x >= t_canyon.x_pos + 1 &&
    gameChar_world_x <= t_canyon.x_pos + 99
  )
    if (gameChar_y >= floorPos_y) {
      is_plummeting = true;
    } else {
      is_plummeting = false;
    }

  //Stops the char from moving left and right when falling down the canyon
  if (
    gameChar_world_x >= t_canyon.x_pos + 1 &&
    gameChar_world_x <= t_canyon.x_pos + 99
  )
    if (gameChar_y >= floorPos_y) {
      is_right = false;
      is_left = false;
    }
}

// ----------------------------------
// collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function draw_collectable(t_collectable) {
  //Dragon Ball
  noStroke();
  fill(255, 153, 34);
  ellipse(
    t_collectable.x_pos,
    t_collectable.y_pos - 35,
    t_collectable.size + 75,
    t_collectable.size + 75
  );

  noStroke();
  fill(255, 128, 0);
  triangle(
    t_collectable.x_pos,
    t_collectable.y_pos - 57,
    t_collectable.x_pos + 15,
    t_collectable.y_pos - 34,
    t_collectable.x_pos - 15,
    t_collectable.y_pos - 34
  );

  triangle(
    t_collectable.x_pos,
    t_collectable.y_pos - 19,
    t_collectable.x_pos + 15,
    t_collectable.y_pos - 34,
    t_collectable.x_pos - 15,
    t_collectable.y_pos - 34
  );

  triangle(
    t_collectable.x_pos + 25,
    t_collectable.y_pos - 44,
    t_collectable.x_pos + 5,
    t_collectable.y_pos - 44,
    t_collectable.x_pos + 15,
    t_collectable.y_pos - 34
  );

  triangle(
    t_collectable.x_pos - 25,
    t_collectable.y_pos - 44,
    t_collectable.x_pos - 5,
    t_collectable.y_pos - 44,
    t_collectable.x_pos - 15,
    t_collectable.y_pos - 34
  );

  triangle(
    t_collectable.x_pos + 15,
    t_collectable.y_pos - 14,
    t_collectable.x_pos + 10,
    t_collectable.y_pos - 34,
    t_collectable.x_pos,
    t_collectable.y_pos - 19
  );

  triangle(
    t_collectable.x_pos - 15,
    t_collectable.y_pos - 14,
    t_collectable.x_pos,
    t_collectable.y_pos - 19,
    t_collectable.x_pos - 10,
    t_collectable.y_pos - 34
  );
}

// Function to check character has collected an item.

function check_collectable(t_collectable) {
  if (
    t_collectable.isFound == false &&
    dist(
      t_collectable.x_pos,
      t_collectable.y_pos,
      gameChar_world_x,
      gameChar_y
    ) < 15
  ) {
    t_collectable.isFound = true;
    game_score++;
    collect_sound.play();
  }
}

//Draws the flagpole
function render_flagpole(flapole_x, flapole_y, flapole_size) {
  if (flagpole.isReached == false) {
    fill(200, 0, 0);
    ellipse(flapole_x, flapole_y - 70, 100, 140);

    fill(0);
    ellipse(flapole_x, flapole_y - 70, flapole_size + 30, flapole_size + 50);

    fill(255, 0, 255);
    ellipse(flapole_x, flapole_y - 70, 40, flapole_size);
  } else {
    fill(0, 0, 200);
    ellipse(flapole_x, flapole_y - 70, 100, 140);

    fill(0);
    ellipse(flapole_x, flapole_y - 70, flapole_size + 30, flapole_size + 50);

    fill(0, 200, 0);
    ellipse(flapole_x, flapole_y - 70, 40, flapole_size);
  }
}

//Function to check if the character has reached the flagpole
function check_flagpole() {
  var flagpole_dist = dist(
    flagpole.x_pos,
    flagpole.y_pos,
    gameChar_world_x,
    gameChar_y
  );

  if (flagpole.isReached == false && flagpole_dist < 50) {
    flagpole.isReached = true;
    complete.play();
  }
}

// Function for a brick wall
function render_wall() {
  fill(188, 74, 60);
  stroke(0);

  //Rows
  for (var i = 0; i < 6; i++) {
    //Columns
    for (var j = 0; j < 10; j++) {
      rect(wall.x_pos + i * 40, wall.y_pos - 200 + j * 20, wall.size, 20);
    }
  }
}

//Function to draw the sun and rotate sun

function render_sun() {
  push();
  translate(970, 360);
  rotate(sun.move);
  fill(253, 184, 19);
  ellipse(sun.x_pos - 30, sun.x_pos - 300, 100);

  sun.move += sun.speed;

  if (sun.move < -2.5) {
    sun.speed = -sun.speed;
  }

  if (sun.move >= 0) {
    sun.speed = -sun.speed;
  }

  pop();
}

//draws the stars
function draw_stars() {
  for (var i = 0; i < stars.length; i++) {
    fill(255, 255, 255);
    ellipse(stars[i].x, stars[i].y, stars[i].size * 2);

    stars[i].size += stars[i].speed;

    if (stars[i].size > 6) {
      stars[i].speed = -stars[i].speed;
    }

    if (stars[i].size < 4) {
      stars[i].speed = -stars[i].speed;
    }
  }
}

// checks if stars are overlapping and only pushes the non overlapping ones into the star array
function check_stars() {
  var num_stars = 500;

  for (var i = 0; i < num_stars; i++) {
    var d = random(-2000, 3000);
    var s = random(0, height);
    var star = { x: d, y: s, size: 5, speed: 0.1 };
    // Stops stars from overlapping
    var overlapping = false;
    for (var j = 0; j < stars.length; j++) {
      var other = stars[j];
      var d = dist(star.x, star.y, other.x, other.y);

      if (d < star.size + other.size) {
        overlapping = true;
      }
    }

    if (overlapping == false) {
      stars.push(star);
    }
  }
}

function startGame() {
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  //Variable to control the background scrolling.
  scroll_pos = 0;

  // Variable to store the real position of the gameChar in the game
  // world. Needed for collision detection.
  gameChar_world_x = gameChar_x - scroll_pos;

  // Boolean variables to control the movement of the game character.
  is_left = false;
  is_right = false;
  is_falling = false;
  is_plummeting = false;

  //This is for the game score
  game_score = 0;

  //Variables used to change from daylight to night.
  background_shifter = 150;
  background_mover = 255;
  background_speed = 0.1;

  //Object for clouds
  clouds = [
    {
      x_pos: -150,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: -450,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: 150,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: -750,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: 450,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: 750,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: 450,
      y_pos: 170,
      size: 50,
    },

    {
      x_pos: 1174,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: 1474,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: 1774,
      y_pos: 70,
      size: 50,
    },

    {
      x_pos: 2174,
      y_pos: 70,
      size: 50,
    },
    {
      x_pos: 2474,
      y_pos: 70,
      size: 50,
    },
    {
      x_pos: 2774,
      y_pos: 70,
      size: 50,
    },
  ];

  //Object for mountain
  mountain = [
    {
      x_pos: -295,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: -600,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: -900,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 40,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 400,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 750,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 1075,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 1400,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 1750,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 2060,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 2400,
      y_pos: 432,
      size: 50,
    },

    {
      x_pos: 2734,
      y_pos: 432,
      size: 50,
    },
  ];

  // Object for canyon
  canyon = [
    {
      x_pos: -200,
      y_pos: 433,
      size: 65,
    },

    {
      x_pos: -525,
      y_pos: 433,
      size: 65,
    },

    {
      x_pos: -900,
      y_pos: 433,
      size: 65,
    },

    {
      x_pos: 50,
      y_pos: 433,
      size: 65,
    },

    {
      x_pos: 900,
      y_pos: 433,
      size: 65,
    },

    {
      x_pos: 1224,
      y_pos: 433,
      size: 65,
    },

    {
      x_pos: 1624,
      y_pos: 433,
      size: 65,
    },

    {
      x_pos: 2024,
      y_pos: 433,
      size: 65,
    },

    {
      x_pos: 2424,
      y_pos: 433,
      size: 65,
    },
    {
      x_pos: 2824,
      y_pos: 433,
      size: 65,
    },
  ];

  //Object for collectable
  collectable = [
    {
      x_pos: -20,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: -310,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: -710,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: 310,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: 710,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: 1360,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: 1560,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: 1760,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: 2160,
      y_pos: 432,
      size: 5,
      isFound: false,
    },
    {
      x_pos: 2360,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: 2560,
      y_pos: 432,
      size: 5,
      isFound: false,
    },

    {
      x_pos: 2760,
      y_pos: 432,
      size: 5,
      isFound: false,
    },
  ];

  flagpole = {
    x_pos: 3200,
    y_pos: 432,
    isReached: false,
    size: 50,
    speed: 0.4,
  };

  wall = {
    x_pos: -1250,
    y_pos: 432,
    size: 40,
  };

  sun = {
    x_pos: 0,
    y_pos: 0,
    move: 0,
    speed: -0.0008,
  };

  //Initialise arrays of scenery objects.
  tree_pos = [];
  check_trees();

  //Stars array
  stars = [];
  check_stars();

  //removes one off lives
  lives--;

  //game over music
  if (lives < 1) {
    game_over.play();
    game_over.setVolume(0.1);
  }

  //This starts the emitter with arguments to control where the particles appear, speed, size and the colour
  emit = new Emitter(210, height - 215, 0, -1, 5, color(226, 88, 34, 255));
  emit.startEmitter(200, 200);

  //platforms array
  platforms = [];

  for (var i = 0; i < canyon.length; i++) {
    platforms.push(create_platform(canyon[i].x_pos, floorPos_y - 65, 100));
  }

  //Enemies array
  enemies = [];

  for (var j = 0; j < canyon.length; j++) {
    if (j > 6 || (j < 3 && j > 1)) {
      enemies.push(
        new Enemy(
          canyon[j].x_pos + 100,
          floorPos_y,
          80,
          2,
          canyon[j].x_pos + 190,
          432
        )
      );
    }
  }
}

function Particle(x, y, xSpeed, ySpeed, size, colour) {
  ///variables used in the particles
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.size = size;
  this.colour = colour;
  this.age = 0;

  //draws the particles
  this.drawParticle = function () {
    for (var i = 0; i < 2; i++) {
      noStroke();
      fill(this.colour);
      ellipse(this.x + i * 620, this.y, this.size);
      fill(0, 0, 0);
      rect(200 + i * 620, 432, 20, -65);
      triangle(220 + i * 620, 367, 240 + i * 620, 367, 220 + i * 620, 385);
      triangle(200 + i * 620, 367, 180 + i * 620, 367, 200 + i * 620, 385);
    }
  };

  /// speed and the age of the particles
  this.updateParticle = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.age++;
  };
}

/// creates the particles
function Emitter(x, y, xSpeed, ySpeed, size, colour) {
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.size = size;
  this.colour = colour;

  this.startParticles = 0;
  this.lifetime = 0;

  this.particles = [];

  /// Function to make it easier to add particles with arguments
  this.addParticle = function () {
    var p = new Particle(
      random(this.x - 10, this.x + 10),
      random(this.y - 10, this.y + 10),
      random(this.xSpeed - 1, this.xSpeed + 1),
      random(this.ySpeed - 1, this.ySpeed + 1),
      random(this.size - 4, this.size + 4),
      this.colour
    );

    return p;
  };
  //adds start particles to the particles array
  (this.startEmitter = function (startParticles, lifetime) {
    this.startParticles = startParticles;
    this.lifetime = lifetime;

    for (var i = 0; i < startParticles; i++) {
      this.particles.push(this.addParticle());
    }
  }),
    // deletes and adds new particles
    (this.updateParticles = function () {
      var deadParticles = 0;
      for (var i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].drawParticle();
        this.particles[i].updateParticle();
        if (this.particles[i].age > random(0, this.lifetime)) {
          this.particles.splice(i, 1);
          deadParticles++;
        }
      }

      if (deadParticles > 0) {
        for (var i = 0; i < deadParticles; i++) {
          var p = this.addParticle();
          this.particles.push(p);
        }
      }
    });
}

/// function to draw platforms
function draw_platform() {
  for (var i = 0; i < platforms.length; i++) {
    platforms[i].draw();

    if (i % 2 == 0) {
      platforms[i].length -= moveplat;
    }

    if (platforms[i].length < 0) {
      moveplat = -moveplat;
    }

    if (platforms[i].length > 100) {
      moveplat = -moveplat;
    }
  }
}

function create_platform(x, y, length) {
  var p = {
    x: x,
    y: y,
    length: length,

    draw: function () {
      fill(0, 0, 0, 15);
      stroke(255, 0, 0);
      rect(this.x, this.y, this.length, 25);
    },

    check: function (gc_x, gc_y) {
      //checks if gamechar is contact with the platform
      if (gc_x > this.x && gc_x < this.x + this.length) {
        var d = this.y - gc_y;
        if (d >= 0 && d < 5) {
          return true;
        }
      }

      return false;
    },
  };

  return p;
}

//constructor function for enemies
function Enemy(x, y, range, eyes, circles_x, circle_y) {
  this.x = x;
  this.y = y;
  this.range = range;
  this.eyes = eyes;
  this.current_x = x;
  this.current_y = y;
  this.speed = 0.5;
  this.speedy = 0.5;
  this.circle = circles_x;
  this.circle_y = circle_y;

  this.draw = function () {
    ///Enemy
    //Head
    noStroke();
    fill(0, 0, 200);
    ellipse(this.circle, this.circle_y - 39, 59);

    //Body
    noStroke();
    beginShape();
    vertex(this.current_x + 60, this.current_y - 37);
    vertex(this.current_x + 60, this.current_y - 2);
    vertex(this.current_x + 73, this.current_y - 12);
    vertex(this.current_x + 83, this.current_y - 2);
    vertex(this.current_x + 93, this.current_y - 12);
    vertex(this.current_x + 102, this.current_y - 2);
    vertex(this.current_x + 110, this.current_y - 12);
    vertex(this.current_x + 119, this.current_y - 2);
    vertex(this.current_x + 120, this.current_y - 37);
    endShape();
    fill(255);

    //Eyes
    ellipse(this.current_x + 80, this.current_y - 37, 15, 15);
    ellipse(this.current_x + 100, this.current_y - 37, 15, 15);

    //Pupils
    fill(0);
    ellipse(
      this.current_x + 80 + this.eyes,
      this.current_y - 37,
      15 / 2,
      15 / 2
    );
    ellipse(
      this.current_x + 100 + this.eyes,
      this.current_y - 37,
      15 / 2,
      15 / 2
    );
  };

  //Moving right and left enemies
  this.update = function () {
    this.current_x += this.speed;
    this.circle += this.speed;

    if (this.current_x < this.x) {
      this.speed = -this.speed;
      this.eyes = -this.eyes;
    } else if (this.current_x > this.x + this.range) {
      this.speed = -this.speed;
      this.eyes = -this.eyes;
    }
  };

  //Flying enemies
  this.jump = function () {
    this.current_y -= this.speedy;
    this.circle_y -= this.speedy;

    if (this.current_y < this.y - this.range) {
      this.speedy = -this.speedy;
    } else if (this.current_y > this.y + 1) {
      this.speedy = -this.speedy;
    }
  };

  //Checks if gamechar is near enemy
  this.is_contact = function (gc_x, gc_y) {
    var d = dist(gc_x, gc_y, this.circle, this.circle_y);

    if (d < 25) {
      return true;
    } else {
      return false;
    }
  };
}
