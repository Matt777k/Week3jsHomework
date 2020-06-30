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

  if (length < 8 || length > 128) {
    alert("Password length has to be between 8 and 128 characters!");
    location.reload()
  }

var charLowerCase = confirm("Include lowercase letters?");

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

for(var i=0; i < lowercaseLetters.length; i++) {
  console.log(index.of(Math.random[i]))
}

if (charLowerCase) {
  alert("Lowercase confirmed")
}
else {
  alert("Lowercase declined")
}

var charUpperCase = confirm("Include uppercase letters?");

var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

if (charUpperCase) {
  alert("Uppercase confirmed")
}
else {
  alert("Uppercase declined")
}

var charNumeric = confirm("Include numbers?");

var numbers = ["1","2","3","4","5","6","7","8","9","0"];

if (charNumeric) {
  alert("Numbers Confirmed")
}
else {
  alert("Numbers Declined")
}

var charSpecial = confirm("Include Special Characters?");

var specialChar = ["!","@","#","$","%","^","&","*","?"];

if (charSpecial) {
  alert("Special Characters Confirmed")
}
else {
  alert("Special Characters Declined")
}


