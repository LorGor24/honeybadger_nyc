var f = prompt("Enter temperature")


var selection = prompt("Please choose temp Scale F to C or C to F").toUpperCase();


if (selection == 'C') {
 // var f = prompt("Enter temperature");
  var f = f * 1.8 + 32;

  alert(f + " Degrees Fahrenheit");
  console.log(f + " Degrees Fahrenheit");

}

else if (selection == 'F') {
// var c = prompt("Enter temperature");
  var f = (f - 32)* (5/9);

  alert(f + " Degrees Celsius");
  console.log(f + " Degrees Celsius");

  }

  else {
    alert("Please Select Correct Temp Scale!");
  }
