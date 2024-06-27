// slider range
var slider_range = document.getElementById("tungo-slider-range");
var slider_range_output = document.getElementById("range-output");
if(slider_range_output) {
  slider_range_output.innerHTML = slider_range.value;
}

if(slider_range) {
  slider_range.oninput = function() {
    slider_range_output.innerHTML = this.value;
  }
}


var slider_range2 = document.getElementById("tungo-slider-range2");
var slider_range_output2 = document.getElementById("range-output2");
if(slider_range_output2) {
  slider_range_output2.innerHTML = slider_range2.value;
}

if(slider_range2) {
  slider_range2.oninput = function() {
    slider_range_output2.innerHTML = this.value;
  }
}


var slider_range3 = document.getElementById("tungo-slider-range3");
var slider_range_output3 = document.getElementById("range-output3");
if(slider_range_output3) {
  slider_range_output3.innerHTML = slider_range3.value;
}

if(slider_range3) {
  slider_range3.oninput = function() {
    slider_range_output3.innerHTML = this.value;
  }
}


var slider_range4 = document.getElementById("tungo-slider-range4");
var slider_range_output4 = document.getElementById("range-output4");
if(slider_range_output4) {
  slider_range_output4.innerHTML = slider_range4.value;
}

if(slider_range4) {
  slider_range4.oninput = function() {
    slider_range_output4.innerHTML = this.value;
  }
}

