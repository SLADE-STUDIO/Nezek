let posX, posY;
let colors;
let eyeOffsetX, eyeOffsetY;

function setup() {
  createCanvas(640, 480);
  posX = width / 2;
  posY = height / 2;
  colors = {
    body: color(200, 100, 100),
    eyes: color(255),
    pupils: color(0),
    legs: color(150, 75, 0),
  };
  eyeOffsetX = 0;
  eyeOffsetY = 0;
}

function draw() {
  background(220);
  drawCharacter(posX, posY);
  animateEyes();
}

function drawCharacter(x, y) {
  // גוף
  fill(colors.body);
  ellipse(x, y, 100, 150);

  // עיניים
  fill(colors.eyes);
  ellipse(x - 20, y - 20, 30, 30);
  ellipse(x + 20, y - 20, 30, 30);

  // אישונים
  fill(colors.pupils);
  ellipse(x - 20 + eyeOffsetX, y - 20 + eyeOffsetY, 10, 10);
  ellipse(x + 20 + eyeOffsetX, y - 20 + eyeOffsetY, 10, 10);

  // פה
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(x, y + 20, 50, 30, 0, PI);

  // רגליים
  strokeWeight(1);
  fill(colors.legs);
  rect(x - 30, y + 75, 20, 40);
  rect(x + 10, y + 75, 20, 40);
}

function animateEyes() {
  eyeOffsetX = map(sin(frameCount * 0.1), -1, 1, -5, 5);
  eyeOffsetY = map(cos(frameCount * 0.1), -1, 1, -5, 5);
}

function mousePressed() {
  changeColors();
}

function changeColors() {
  colors.body = color(random(255), random(255), random(255));
  colors.eyes = color(random(255), random(255), random(255));
  colors.pupils = color(random(255), random(255), random(255));
  colors.legs = color(random(255), random(255), random(255));
}
