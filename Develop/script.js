// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write finalPassword to the #finalPassword input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
  reset();
});


//Create a series of prompts with finalPassword criteria
//Length of finalPassword between 8 and 128 characters
//Lowercase, while loops?
//Uppercase
//Numbers
//Special characters
//Store selections for finalPassword generations
//create one master array of choices using .pushValues
//Password matches selection
//Password is generated - function
//Loop is how many characters user selected
//math.random and get a character
//Password is displayed in alert or presented in the box

var arrayOfArrays = [];

var lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

//choose length
var length = prompt(
  "Choose a finalPassword length between 8 and 128 characters"
);

//Selection of desired characters

if (length < 8 || length > 128) {
  alert("Password length has to be between 8 and 128 characters!");
  location.reload();
}

console.log(arrayOfArrays);

var charLowerCase = confirm("Include lowercase letters?");

//If Lowercase confirmed pushValues to arrayOfArrays
if (charLowerCase) {
  arrayOfArrays.push.apply(arrayOfArrays, lowercaseLetters);
}

var charUpperCase = confirm("Include uppercase letters?");

if (charUpperCase) {
  arrayOfArrays.push.apply(arrayOfArrays, uppercaseLetters);
}

var charNumeric = confirm("Include numbers?");

if (charNumeric) {
  arrayOfArrays.push.apply(arrayOfArrays, numbers);
}

var charSpecial = confirm("Include Special Characters?");

if (charSpecial) {
  arrayOfArrays.push.apply(arrayOfArrays, specialChar);
}

if (!charSpecial && !charUpperCase && !charLowerCase && !charNumeric) {
  alert("You must select at least one character type");
}

var randomChar = ("");

function generatePassword () {
  

  for (var i = 0; i < length; i++) {
    randomChar += arrayOfArrays[
      Math.floor(Math.random() * (arrayOfArrays.length -1))
    ]; 
  }
  return randomChar;
}

function reset ()  {
  randomChar = ("");
  arrayOfArrays = [];
  length = (0);
}



   
    