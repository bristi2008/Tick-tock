var hr, mn, sc;

function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);


translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();

  strokeWeight(8);
  stroke("blue");
  noFill();
  var scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  stroke("red");
  var mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  stroke("green");
  var hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(scAngle);
  stroke("blue");
  line(0,0,100,0);
  pop();


  push();
  rotate(mnAngle);
  stroke("red");
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("green");
  line(0,0,50,0);
  pop();


  } 