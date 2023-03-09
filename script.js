// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordlength = prompt("How long would you like your password to be? (Enter value between 8 and 128)");
    while (passwordlength < 8 || passwordlength > 128) {
        passwordlength = prompt("Invalid. Enter a value between 8 and 128.");
    }
    var includelowercase = confirm("Do you want any lowercase characters?");
    var includeuppercase = confirm("Do you want any uppercase characters?");
    var includenumbers = confirm("Do you want any numbers?");
    var includespecial = confirm("Do you want any special characters (!,$,*,&,?,etc.)?");

    while (!includelowercase && !includeuppercase && !includenumbers && !includespecial) {
        alert("Select at least one character type to include.");
        var includelowercase = confirm("Do you want any lowercase characters?");
        var includeuppercase = confirm("Do you want any uppercase characters?");
        var includenumbers = confirm("Do you want any numbers?");
        var includespecial = confirm("Do you want any special characters (!,$,*,&,?,etc.)?");
    }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add function to generate the password 
function generatePassword(length, lowercase, uppercase, numbers,special) {
    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
        characters += "0123456789";
    }
    if (special) {
        characters += "!#$%&'()*+,-.{}[]^/";
    }
    var charset = "";
    var password = "";
}