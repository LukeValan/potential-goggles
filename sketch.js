let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
  // call the scaleCanvas() function to scale the canvas to fit the screen
  scaleCanvas();
}

function touchMoved() {
  if (touches.length === 2) {
    let touch1 = touches[0];
    let touch2 = touches[1];
    let dx = touch1.x - touch2.x;
    let dy = touch1.y - touch2.y;
    x += dx;
    y += dy;
  }
  return false;
}

function draw() {
  background(220);
  ellipse(x, y, 50, 50);
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
