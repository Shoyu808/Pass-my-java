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
    var userPass = [""];
    var userChoice = [""];
    // Create an array of CAP letters, lower letters, nums, and special characters
    var letCap = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var letLow = ["abcdefghijklmnopqrstuvwxyz"];
    var letNum = ["0123456789"];
    var letChar = ["!@#$%^&*()"];

    var reqChar = 0;
    
  // Create a conditional to make sure that the user has chosen at least one type of character
    var letCap = confirm("Do you want Captial letters?");
    if(letCap) {
      (userChoice += letCap)
    }
    
  
  // TODO: Create if else statements that checks if the user said yes or no to different confirms that we asked them, and base on their response push those specific characters to our empty array
  
  //TODO: Create a var to hold the final results

  var finalPass;

  // TODO: I need a "for loop" to loop over my final array, it should run base on the results of the prompt when we asked user how many characters they want in their password to be, choose randomly from our final array that holds all the character that the user wantd, and save them to our finalPass variable

  //  var randomNum = Math.floor(Math.random() = length of final array)
  // inside the forr loop ( finalPass = finalPass + fillanArray[randomNum])

  // TODO: Return the finalPass from this function outside of the for loop at the end of this function



}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


