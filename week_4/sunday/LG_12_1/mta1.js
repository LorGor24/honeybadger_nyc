

const selection = prompt("Please select your train: The (L) Train, The (N) Train, The (S)ix Train").toUpperCase();

console.log("Please select your train: The (L) Train, The (N) Train, The (S)ix Train");

const lTrain = ["8th Ave, 6th Ave, Union Square, 3rd Ave, 1st Ave, Bedford Ave"];
const nTrain = ["Times Square, Herald Square, 28th St, 23rd St - WHAM Nexus, Union Square, 8th St"];
const sTrain =["Grand Central, 33rd St, 28th St, 23rd St, Union Square, Astor Place"];

const trainMenu = ['L','N','S'];

// const selection = prompt('Please Select a line ${trainMenu.join(',')}'')


while (selection != 'Q') {
  selection = prompt("Please select your train: The (L) Train, The (N) Train, The (S)ix Train").toUpperCase();

if(selection == "L"){
  // alert("You've Selected the L Train");
  // alert(lTrain);
  // console.log(lTrain);
  // console.log("Thank You")
  // prompt("Would You like to continue enter 'n'").toUpperCase()
  lTrain.forEach(function(station) {
    console.log(station);
  });
}
else if(selection == "N") {
  // alert("You've Selected the N Train");
  // alert(nTrain);
  // console.log("You've Selected the N Train");
  // console.log(nTrain);
  // console.log("Thank You")

  nTrain.forEach(function(station) {
    console.log(station);
  });
  // prompt("Would You like to continue enter 'n'").toUpperCase()
}
  else if(selection == "S") {
  // alert("You've Selected the Six Train");
  // alert(sTrain);
  // console.log("You've Selected the Six Train");
  // console.log(sTrain);
  // console.log("Thank You")
  // prompt("Would You like to continue enter 'n'").toUpperCase()
  sTrain.forEach(function(station) {
    console.log(station);
  });
}

else {
  alert("Invalid input")
}
}
