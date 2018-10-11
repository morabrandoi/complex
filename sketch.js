
// triangle number variables
var tri_slider;
var tri_text;
var active_input_tri = "tri_slider";
// call back triangle functions
function tri_slider_press() {active_input_tri = "tri_slider"; }
function tri_text_press() {active_input_tri = "none"; }


// base variables
var base_slider;
var base_text;
var base_e_but;
var base_pi_but;
var active_input_base = "base_slider";
// call back base functions
function base_e_press() { base_text.value(Math.E); active_input_base = "none";}
function base_pi_press() { base_text.value(Math.PI); active_input_base = "none";}
function base_slider_press() {active_input_base = "base_slider"; }
function base_text_press() {active_input_base = "none"; }


//complex power variables
var power_a_slider;
var power_b_slider;
var power_a_text;
var power_b_text;
var power_a_e_but;
var power_a_pi_but;
var power_b_e_but;
var power_b_pi_but;
var active_input_a_power = "power_a_slider";
var active_input_b_power = "power_b_slider";

// call back base functions
function power_a_e_press() { power_a_text.value(Math.E); active_input_a_power = "none";}
function power_b_e_press() { power_b_text.value(Math.E); active_input_b_power = "none";}
function power_a_pi_press() { power_a_text.value(Math.PI); active_input_a_power = "none";}
function power_b_pi_press() { power_b_text.value(Math.PI); active_input_b_power = "none";}
function power_a_slider_press() {active_input_a_power = "power_slider"; }
function power_b_slider_press() {active_input_b_power = "power_slider"; }
function power_a_text_press() {active_input_a_power = "none"; }
function power_b_text_press() {active_input_b_power = "none"; }



var step = 0;

function setup() {
  createCanvas(700, 400);

  // triangle
  var tri_div = createDiv("Number of triangles: ");
  tri_text = createElement("input", type="text");
  tri_slider = createSlider(1, 100, 1, 1);
  tri_div.id("tri_div");
  tri_text.parent("tri_div");
  tri_slider.style('width', '260px');
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


  //powers
  var power_div = createDiv("Complex power is: (");
  var a_div = createDiv("a: ");
  var b_div = createDiv("b: ");
  power_a_text = createElement("input", type="text");
  power_b_text = createElement("input", type="text");
  power_a_e_but = createButton("e");
  power_b_e_but = createButton("e");
  power_a_pi_but = createButton("pi");
  power_b_pi_but = createButton("pi");
  power_a_slider = createSlider(-10, 10, 0, 0.01);
  power_b_slider = createSlider(-10, 10, 0, 0.01);
  power_mid_text = createElement("span", " + ");
  power_end_text = createElement("span", "i)");
  power_div.id("power_div");
  a_div.id("a_div");
  b_div.id("b_div");
  power_a_text.parent("power_div");
  power_mid_text.parent("power_div");
  power_b_text.parent("power_div");
  power_end_text.parent("power_div");
  power_a_e_but.parent("a_div");
  power_a_pi_but.parent("a_div");
  power_a_slider.parent("a_div");
  power_b_e_but.parent("b_div");
  power_b_pi_but.parent("b_div");
  power_b_slider.parent("b_div");
  power_a_slider.style('width', '160px');
  power_b_slider.style('width', '160px');
  // events for power
  power_a_e_but.mousePressed(power_a_e_press);
  power_b_e_but.mousePressed(power_b_e_press);
  power_a_pi_but.mousePressed(power_a_pi_press);
  power_b_pi_but.mousePressed(power_b_pi_press);
  power_a_slider.mousePressed(power_a_slider_press);
  power_b_slider.mousePressed(power_b_slider_press);
  power_a_text.mousePressed(power_a_text_press);
  power_b_text.mousePressed(power_b_text_press);

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
  if (active_input_a_power == "power_a_slider"){
    power_a_text.value(power_a_slider.value());
  }
  if (active_input_b_power == "power_b_slider"){
    power_b_text.value(power_b_slider.value());
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
