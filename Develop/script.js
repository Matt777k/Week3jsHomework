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
//Lowercase, while loops?
//Uppercase
//Numbers
//Special characters
//Store selections for password generations
//create one master array of choices using .push
//Password matches selection
//Password is generated - function
//Loop is how many characters user selected
//math.random and get a character
//Password is displayed in alert or presented in the box

var arrayOfArrays = [];

var length = prompt("Choose a password length between 8 and 128 characters");

if (length < 8 || length > 128) {
  alert("Password length has to be between 8 and 128 characters!");
  location.reload();
}

  var charLowerCase = confirm("Include lowercase letters?");

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

  //If Lowercase confirmed. Generate random lowercase letters and add them to arrayOfArrays
  if (charLowerCase) {
    alert("Lowercase confirmed");
    for (var i = 0; i < length; i++) {
      var resultLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
      arrayOfArrays.push(resultLower);
    }
    console.log(arrayOfArrays);
  }


  var charUpperCase = confirm("Include uppercase letters?");

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

  if (charUpperCase) {
    alert("Uppercase confirmed");
    for (var i = 0; i < length; i++) {
      var resultUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      arrayOfArrays.push(resultUpper);
    }
    console.log(arrayOfArrays);
  }

  var charNumeric = confirm("Include numbers?");

  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  if (charNumeric) {
    alert("Numbers confirmed");
    for (var i = 0; i < length; i++) {
      var resultNum = numbers[Math.floor(Math.random() * numbers.length)];
      arrayOfArrays.push(resultNum);
    }
    console.log(arrayOfArrays);
  }

  var charSpecial = confirm("Include Special Characters?");

  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

  if (charSpecial) {
    alert("Special characters confirmed");
    for (var i = 0; i < length; i++) {
      var resultSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
      arrayOfArrays.push(resultSpecial);
    }
    console.log(arrayOfArrays);
  }

  function arrayBalance(equalize) {

  arrayOfArrays = length
  }

  arrayBalance();
  console.log(arrayOfArrays);