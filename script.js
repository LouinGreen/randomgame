//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let c1Button;
let c2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  //noStroke();

  // Set up the home screen
  background("#55874aff");
  fill(255);
  textSize(40);
  text("Congratulations!", width / 2, height / 2 - 100);

  textSize(10);
  text("You have the right to remain silent. Anything you say can and will be used against you.", width / 2, height / 2 - 70);

  textSize(30);
  text("You've been arrested!", width / 2, height / 2 - 10);

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2 + 100);
  a1Button = new Sprite(-150, -150);
  a2Button = new Sprite(-150, -150);
  b1Button = new Sprite(-150, -150);
  b2Button = new Sprite(-150, -150);
  c1Button = new Sprite(-150, -150);
  c2Button = new Sprite(-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 150;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.color = 'white';
  enterButton.text = 'Who Me?';

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("pressed");
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      print("Display screen 2");
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      print("Display screen 5");
      showScreen5();
      screen = 5;
    }
  } else if (screen == 2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
    } else if (b2Button.mouse.presses()) {
      showScreen4();
    }
  } else if (screen == 5) {
    if (c1Button.mouse.presses()) {
      showScreen6();
    } else if (c2Button.mouse.presses()) {
      showScreen7();
    }
  }
  
  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("#55874aff");
  textSize(25);
  text("Yes you! \nSo how'd you wind up here in the first place? \ntravels along…", width/2, height/2 - 100);
  enterButton.pos = {x: -100, y: -100};

  // Add A1 button
  a1Button.pos = {x: width/2 - 100, y: height/2 + 100};
  a1Button.w = 100;
  a1Button.h = 50;
  a1Button.collider = 'k';
  a1Button.color = 'white';
  a1Button.text = 'Path 1';

  // Add A2 button
  a2Button.pos = {x: width/2 + 100, y: height/2 + 100};
  a2Button.w = 100;
  a2Button.h = 50;
  a2Button.collider = 'k';
  a2Button.color = 'white';
  a2Button.text = 'Path 2';
}

function showScreen2() {
  background("#274e13ff");
  text("At the end of Path 1, Betty \nrealizes that she has gone really deep \ninto the forest. Two more paths \nlay out in front of her. She \ndecides to take…", width/2, height/2 - 100);
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -50, y: -50};

  // Add B1 button
  b1Button.pos = {x: width/2 - 100, y: height/2 + 100};
  b1Button.w = 100;
  b1Button.h = 50;
  b1Button.collider = 'k';
  b1Button.color = 'white';
  b1Button.text = 'Path 3';

  // Add B2 button
  b2Button.pos = {x: width/2 + 100, y: height/2 + 100};
  b2Button.w = 100;
  b2Button.h = 50;
  b2Button.collider = 'k';
  b2Button.color = 'white';
  b2Button.text = 'Path 4';
}

function showScreen3() {
  background("#1c360fff");
  text("Path 3 seems to be going on forever. \nHowever, before she gives up, she spots a \ntall tower of something that looks \nlike food. Running up to the tower, \nBetty celebrates as she realizes that s\nhe has found the largest pile of food.", width/2, height/2 - 70);
  b1Button.pos = {x: -100, y: -100};
  b2Button.pos = {x: -150, y: -150};
}

function showScreen4() {
  background("#1c360fff");
  text("As Betty travels through Path 4, she \nencounters a pack of hungry coyotes. \nDesperate to get away, she sprints in a \nrandom direction where sticks, trees, and \npuddles are everywhere. After hours \nof running, she succumbs to the pack.", width/2, height/2 - 80);
  b1Button.pos = {x: -100, y: -100};
  b2Button.pos = {x: -150, y: -150};
}

function showScreen5() {
  background("#274e13ff");
  text("At the end of Path 2, Betty \nrealizes that she has gone really deep \ninto the forest. Two more paths \nlay out in front of her. She decides to take…", width/2, height/2 - 100);
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -50, y: -50};

  // Add C1 button
  c1Button.pos = {x: width/2 - 100, y: height/2 + 100};
  c1Button.w = 100;
  c1Button.h = 50;
  c1Button.collider = 'k';
  c1Button.color = 'white';
  c1Button.text = 'Path 5';

  // Add C2 button
  c2Button.pos = {x: width/2 + 100, y: height/2 + 100};
  c2Button.w = 100;
  c2Button.h = 50;
  c2Button.collider = 'k';
  c2Button.color = 'white';
  c2Button.text = 'Path 6';
}

function showScreen6() {
  background("#1c360fff");
  text("Path 5 seems to be going on forever. \nBetty starts to get tired and the growls \nof her stomach continues to get louder. \nAfter 5 hours, the path seems to \nnot have an end. Betty finds a shady spot \nunder a large tree and decides to sleep.", width/2, height/2 - 80);
  c1Button.pos = {x: -100, y: -100};
  c2Button.pos = {x: -150, y: -150};
}

function showScreen7() {
  background("#1c360fff");
  text("Betty seems to have found a trail of food! \nShe hurriedly follows the trail only to find…\na ginormous stack of food laid out for \nher to devour. Betty sprints and \ndecides to indulge upon all of the \nfood for the rest of the night.", width/2, height/2 - 80);
  c1Button.pos = {x: -100, y: -100};
  c2Button.pos = {x: -150, y: -150};
}