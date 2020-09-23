let detailX,detailY,detailR, detailr;

function setup() {
    createCanvas(320, 400, WEBGL);
    detailX=createSlider(2,25,3);
    detailY=createSlider(2,17,3);
    detailR=createSlider(1,30,20);
    detailr=createSlider(1,30,15)
  }
  
  function draw() {
    background(205, 102, 94);
    rotateY(millis() / 1000);
    rotateX(millis() / 1000);
    torus(detailR.value(), detailr.value(), detailX.value(), detailY.value());
}