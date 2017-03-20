var fToC = function(far){
  var far = parseInt(prompt("Please enter the Fahrenheit value:"));
  // return far/ (9/5);
  alert((far - 32) * (5/9));
};

// uncomment the line below to convert F-C
// fToC();

var cToF = function(Celsius){
var cel = parseInt(prompt("Please enter the celsius value:"));
alert("The Fahrenheit value of " + cel + "C" + " is: " + (cel * (9/5) + 32));
};

// uncomment the line below to convert C-F
// cToF();
