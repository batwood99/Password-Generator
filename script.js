// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordlength = prompt("How long would you like your password to be? (Enter value between 8 and 128)");
    while (passwordlength < 8 || passwordlength > 128) {
        passwordlength = prompt("Invalid. Enter a value between 8 and 128.");
    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
