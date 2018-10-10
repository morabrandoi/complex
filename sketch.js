var slider;


function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, 169, 25);
  createP("Hello");
  slider.position(10, height + 40);
  slider.style('width', '80px');

}

function draw() {
  var val = slider.value();
  if (val == 169){
    createP("abby fink hellllllla cute");
  }

  background(220);
  translate(width / 2, height / 2);
  ellipse(0,0,val,val);
}
