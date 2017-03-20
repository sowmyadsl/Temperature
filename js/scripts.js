// functions
var fToC = function(far){
  var far = parseInt(prompt("Please enter the Fahrenheit value:"));
  // return far/ (9/5);
  alert((far - 32) * (5/9));
};
var cToF = function(Celsius){
var cel = parseInt(prompt("Please enter the celsius value:"));
alert("The Fahrenheit value of " + cel + "C" + " is: " + (cel * (9/5) + 32));
};



var answer = prompt("Are you converting F-C, or C-F?");

if (answer == "F-C") {
  fToC();
} else if (answer == "C-F") {
  cToF();
} else {
  alert("Please enter a valid answer ('F-C', or 'C-F')");
}
