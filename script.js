// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Create a generatePassword function and write all the logic within this function
function generatePassword() {
  // Create an empty array to hold user requested characters
  var userPass = [];
  var userChoice = [];
  // Create an array of CAP letters, lower letters, nums, and special characters
  var letCap = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var letLow = ["abcdefghijklmnopqrstuvwxyz"];
  var letNum = ["0123456789"];
  var letChar = ["!@#$%^&*()"];
  // for prompt
  var reqChar = 0;
  // Create if else statements that checks if the user said yes or no to different confirms that we asked them, and base on their response push those specific characters to our empty array
  var capLet = confirm("Do you want Captial letters in your password?");
  if (capLet) {
    userChoice += letCap;
    console.log("userChoice: ", (userChoice += letCap));
  }
  var lowLet = confirm("Do you want Lower Case letters in your password?");
  if (lowLet) {
    userChoice += letLow;
    console.log("userChoice: ", (userChoice += letLow));
  }
  var numChar = confirm("Do you want numbers in your password?");
  if (numChar) {
    userChoice += letNum;
    console.log("userChoice: ", (userChoice += letNum));
  }
  var speChar = confirm(
    "And last would you want Special Characters in your password?"
  );
  if (speChar) {
    userChoice += letChar;
    console.log("userChoice: ", (userChoice += letChar));
  }
  // Create prompt asking how many characters they want in there password
  // this is also a *while* loop where the alert will only pop up if you don't meet the requirments.
  while (reqChar < 8 || reqChar > 128) {
    var reqChar = prompt(
      "Please choose from at least 8 to no more than 128 characters for your password."
    );
    if (reqChar < 8 || reqChar > 128) {
      alert("You need to pick at least 8 to no more than 128 charaters!");
    }
  }
  // for loop to generate Users choice of password
  for (var i = 0; i < reqChar; i++) {
    //Function to generate random password and it chooses randomly from our final array that holds all the character from userChoice
    function getRandom(array) {
      //  choose randomly from our final array that holds all the character that the user wantd
      var randomIndex = Math.floor(Math.random() * array.length);
      var randomElement = array[randomIndex];
      return randomElement;
    }
    var ranPass = getRandom(userChoice);
    userPass.push(ranPass);
  }
  console.log(userPass.join(""));
  // Return the finalPass from this function outside of the for loop at the end of this function
  return userPass.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
