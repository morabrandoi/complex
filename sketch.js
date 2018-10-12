
// mangle number variables
var m_slider;
var m_text;
var active_input_m = "m_slider";
// call back mangle functions
function m_slider_press() {active_input_m = "m_slider"; }
function m_text_press() {active_input_m = "none"; }


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
function power_a_slider_press() {active_input_a_power = "power_a_slider"; }
function power_b_slider_press() {active_input_b_power = "power_b_slider"; }
function power_a_text_press() {active_input_a_power = "none"; }
function power_b_text_press() {active_input_b_power = "none"; }





var scale = 150;

function setup() {
  createCanvas(800, 600);

  // mangle
  var m_div = createDiv("m: ");
  m_text = createElement("input", type="text");
  m_slider = createSlider(1, 500, 1, 1);
  m_div.id("m_div");
  m_text.parent("m_div");
  m_slider.style('width', '260px');
  // m events
  m_slider.mousePressed(m_slider_press);
  m_text.mousePressed(m_text_press);


  // base
  var base_div = createDiv("Base value: ");
  base_text = createElement("input", type="text");
  base_e_but = createButton("e");
  base_pi_but = createButton("pi");
  base_slider = createSlider(0.01, 10, Math.E, 0.01);
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
  power_b_slider = createSlider(-10, 10, Math.PI, 0.01);
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

  // p for power
function calculatePoints(base, m, p_a, p_b){
  base = float(base);
  m = float(m);
  p_a = float(p_a);
  p_b = float(p_b);
  var point_list = [];
  // f for first
  var f_a = 1.0 + (p_a * Math.log(base) / m);
  var f_b = p_b * Math.log(base) / m;
  // r for running
  var r_a = 1.0;
  var r_b = 0.0;

  point_list.push([r_a * 150.0, r_b* -150.0]);
  for (var x = 0; x < m; x++){
    [r_a, r_b] = [(r_a * f_a) - (r_b * f_b), (r_a * f_b) + (r_b * f_a)];



    point_list.push([r_a * 150.0, r_b* -150.0]);

  }
  return point_list;

}

function draw() {
  frameRate(900);
  translate(width / 2, height / 2);
  background(255,245,255);

  // coordinate axes
  line(0,-500,0,500);
  line(-500,0,500,0);

  // ticks on the axes
  line(-150, -10, -150, 10);
  line(150, -10, 150, 10);
  line(-10, 150, 10, 150);
  line(-10, -150, 10, -150);

  // prioritizing input source
  if (active_input_base == "base_slider"){
    base_text.value(base_slider.value());
  }
  if (active_input_m == "m_slider"){
    m_text.value(m_slider.value());
  }
  if (active_input_a_power == "power_a_slider"){
    power_a_text.value(power_a_slider.value());
  }
  if (active_input_b_power == "power_b_slider"){
    power_b_text.value(power_b_slider.value());
  }

  //base_text
  var base_val = base_text.value();
  var m_val = m_text.value();
  var power_a = power_a_text.value();
  var power_b = power_b_text.value();

  if (base_val == -69.420){
    createP("abby fink hElla cute");
  }

  // draw input_point
  fill(0,255,0);
  ellipse(power_a, power_b, 5,5);

  // draw curve
  point_list = calculatePoints(base_val, m_val, power_a, power_b);

  noFill();
  beginShape();
  point_list.forEach(function(p) {
  vertex(p[0], p[1]);

  });
  endShape();

  //draw endpoint with text
  var end_r, end_i;
  [end_r, end_i] = [point_list.slice(-1)[0][0], point_list.slice(-1)[0][1]];
  fill(255,0,0);
  ellipse(end_r, end_i, 8, 8);
  [end_r, end_i] = [Math.round(end_r * 100.0 / 150.0) / 100.0, Math.round(end_i * 100.0 / 150.0) / 100.0];
  textSize(14);
  fill(0);
  text("  "+end_r + " + " + end_i + " i", end_r, end_i);


}
