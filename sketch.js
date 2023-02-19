let circleSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // iterate through all touches
  for (let i = 0; i < touches.length; i++) {
    // get touch position and draw a circle there
    let touch = touches[i]
    noStroke();
    fill(random(255), random(255), random(255));
    circle(touch.x, touch.y, circleSize);
  }
}

function touchMoved() {
  return false; // prevent default browser behavior
}
function scaleCanvas() {
  // get the width and height of the screen
  let screenWidth = windowWidth;
  let screenHeight = windowHeight;
  // get the aspect ratio of the canvas
  let canvasAspectRatio = width / height;
  // get the aspect ratio of the screen
  let screenAspectRatio = screenWidth / screenHeight;
  // calculate the new canvas size
  let newWidth, newHeight;
  if (canvasAspectRatio > screenAspectRatio) {
    newWidth = screenWidth;
    newHeight = screenWidth / canvasAspectRatio;
  } else {
    newWidth = screenHeight * canvasAspectRatio;
    newHeight = screenHeight;
  }
  // set the canvas size and position
  let x = (screenWidth - newWidth) / 2;
  let y = (screenHeight - newHeight) / 2;
  let canvasElement = document.getElementsByTagName("canvas")[0];
  canvasElement.style.width = newWidth + "px";
  canvasElement.style.height = newHeight + "px";
  canvasElement.style.position = "absolute";
  canvasElement.style.left = x + "px";
  canvasElement.style.top = y + "px";
}
