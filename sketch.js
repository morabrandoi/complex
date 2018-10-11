
// triangle number variables
var tri_slider;
var tri_text;
var active_input_tri = "tri_slider";

function tri_slider_press() {active_input_tri = "tri_slider"; }
function tri_text_press() {active_input_tri = "none"; }


// base variables
var base_slider;
var base_text;
var base_e_but;
var base_pi_but;
var active_input_base = "base_slider";

// call back functions
function base_e_press() { base_text.value(Math.E); active_input_base = "none";}
function base_pi_press() { base_text.value(Math.PI); active_input_base = "none";}
function base_slider_press() {active_input_base = "base_slider"; }
function base_text_press() {active_input_base = "none"; }





var step = 0;

function setup() {
  createCanvas(700, 400);

  // triangle
  var tri_div = createDiv("Triangle Number: ");
  tri_text = createElement("input", type="text");
  tri_slider = createSlider(1, 100, 1, 1);
  tri_div.id("tri_div");
  tri_text.parent("tri_div");
  tri_slider.style('width', '160px');

  // tri events
  tri_slider.mousePressed(tri_slider_press);
  tri_text.mousePressed(tri_text_press);

  // base
  var base_div = createDiv("Base value: ");
  base_text = createElement("input", type="text");
  base_e_but = createButton("e");
  base_pi_but = createButton("pi");
  base_slider = createSlider(-4, 4, 0, 0.01);
  base_div.id("base_div");
  base_text.parent("base_div");
  base_slider.style('width', '160px');
  // base events
  base_e_but.mousePressed(base_e_press);
  base_pi_but.mousePressed(base_pi_press);
  base_slider.mousePressed(base_slider_press);
  base_text.mousePressed(base_text_press);

}

function draw() {
  step += 0.02;
  background(255,245,255);
  translate(width / 2, height / 2);

  if (active_input_base == "base_slider"){
    base_text.value(base_slider.value());
  }
  if (active_input_tri == "tri_slider"){
    tri_text.value(tri_slider.value());
  }


  //base_text
  var base_val = base_text.value();
  var tri_val = tri_text.value();
  if (base_val == -69.420){
    createP("abby fink hella cute");
  }

  noFill();
  ellipse(base_val,0,200 * cos(step * 1.1),200*sin(step));
  ellipse(base_val,0,200 * sin(step), 200 * cos(step * 1.1));
}
