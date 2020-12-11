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
  // Create confirm to ask user if they want capital letters and set to a variable
  var capLetters = confirm("Do you want capital letters in your password?")
  // Create confirm to ask user if they want lowercase letters and set to a variable
  var lowLetters = confirm("Do you want lower case letters in your password?")
  // Create confirm to ask user if they want numbers and set to a variable
  var randomNum = confirm("Do you want numbers in your password?")
  // Create confirm to ask user if they want special characters and set to a variable
  var speChar = confirm("Do you want special characters in your password?")
  // Create prompt to ask user how many character they like they pass to be (at least 8 characters and no more than 128) and set to a variable
  var userChoice = prompt("It has to be at least 8 characters long and no more than a 128 characters")
  console.log("userChoice ", userChoice)

  // Create a conditional to make sure that the user has chosen at least one type of character
    if(userChoice< 8 || userChoice> 128){
      alert("Please enter a number from 8 to 128.")
    }
  // Create an array of CAP letters, lower letters, nums, and special characters
    var letCap = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    var letLow = ["abcdefghijklmnopqrstuvwxyz"];

    var letNum = ["0123456789"];

    var letChar = ["!@#$%^&*()"];
  // Create an empty array to hold user requested characters
    var reqChar = [""];
  // TODO: Create if else statements that checks if the user said yes or no to different confirms that we asked them, and base on their response push those specific characters to our empty array
    if(userChoice === capLetters){
      letCap++;
    }
  //TODO: Create a var to hold the final results

  var finalPass;

  // TODO: I need a "for loop" to loop over my final array, it should run base on the results of the prompt when we asked user how many characters they want in their password to be, choose randomly from our final array that holds all the character that the user wantd, and save them to our finalPass variable

  //  var randomNum = Math.floor(Math.random() = length of final array)
  // inside the forr loop ( finalPass = finalPass + fillanArray[randomNum])

  // TODO: Return the finalPass from this function outside of the for loop at the end of this function



}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



