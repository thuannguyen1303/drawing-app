(function() {
  'use strict';

  console.log('index');

  // Random color for color swatches (Demo-purpose)
  initSwatches();
  function initSwatches() {
    var swatches = $(".swatches");
    for (var i = 0; i < swatches.length; i++) {
      $(swatches[i]).css("background-color",randomColor());
    }
    console.log(swatches);
  }
  function randomColor() {
    var Rvalue = Math.floor(Math.random()*255);
    var Gvalue = Math.floor(Math.random()*255);
    var Bvalue = Math.floor(Math.random()*255);
    var colorString = "";
    colorString = "rgb("+ Rvalue +","+ Gvalue +","+ Bvalue +")";
    return colorString;
  }

})();
