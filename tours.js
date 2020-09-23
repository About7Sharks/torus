let detailX;
let detailY;
function setup() {
    createCanvas(320, 400, WEBGL);
    detailX=createSlider(2,25,3);
    detailY=createSlider(2,17,3);
    // detailX.position(10, height + 5);
    // detailY.position(10, height + 25)
    // detailY.style('width', '80px');
    // detailX.style('width', '80px');
  }
  
  function draw() {
    background(205, 102, 94);
    rotateY(millis() / 1000);
    torus(30, 15, detailX.value(), detailY.value());
  }