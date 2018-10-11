
var base_slider;
var base_text;
var step = 0;




function setup() {

  createCanvas(700, 400);
  var base_div = createDiv("Base value: ");
  var base_text = createElement("input", type="text");
  var base_e = createButton("e");
  var base_pi = createButton("Pi");
  base_slider = createSlider(0, 200, 1);
  base_div.id("base");
  base_text.parent("base");
  base_slider.style('width', '80px');













}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  step += 0.02;
  var val = base_slider.value();

  if (val == 200){
    createP("abby fink hella cute");
  }
  noFill();
  ellipse(0,0,200*cos(step),200*sin(step));
  ellipse(0,0,200 * sin(step), 200 * cos(step));
}
