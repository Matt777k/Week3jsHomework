// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Create a generate password
//Create a series of prompts with password criteria
//Length of password between 8 and 128 characters
//Lowercase
//Uppercase
//Numbers
//Special characters
//Store selections for password generations
  //create one master array of choices
//Password matches selection
//Password is generated - function
  //Loop is how many characters user selected
    //math.random and get a character
//Password is displayed in alert or presented in the box

var length = prompt("Choose a password length between 8 and 128 characters");

var charLowerCase = confirm("Include lowercase letters?");

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

if (charLowerCase) {
  alert("lowercase confirmed")
}
else {
  alert("lowercase declined")
}

var charUpperCase = confirm("Include uppercase letters?");

if (charUpperCase) {
  alert("uppercase confirmed")
}
else {
  alert("uppercase declined")
}


var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var charNumeric = confirm("Include numbers?");

var charSpecial = confirm("Include special characters?");

var specialChar = ["!","@","#","$","%","^","&","*","?"];


