// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write finalPassword to the #finalPassword input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#finalPassword");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create a series of prompts with finalPassword criteria
//Length of finalPassword between 8 and 128 characters
//Lowercase, while loops?
//Uppercase
//Numbers
//Special characters
//Store selections for finalPassword generations
//create one master array of choices using .push
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
var length = prompt("Choose a finalPassword length between 8 and 128 characters");

//Selection of desired characters

if (length < 8 || length > 128) {
  alert("Password length has to be between 8 and 128 characters!");
  location.reload();
}

  var charLowerCase = confirm("Include lowercase letters?");

 

  //If Lowercase confirmed. Generate random lowercase letters and add them to arrayOfArrays
  if (charLowerCase) {
    alert("Lowercase confirmed");
      arrayOfArrays.push(lowercaseLetters);
    }
  


  var charUpperCase = confirm("Include uppercase letters?");

  

  if (charUpperCase) {
    alert("Uppercase confirmed");
    for (var i = 0; i < length; i++) {
      var resultUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      arrayOfArrays.push(resultUpper);
    }
  }

  var charNumeric = confirm("Include numbers?");

 

  if (charNumeric) {
    alert("Numbers confirmed");
    for (var i = 0; i < length; i++) {
      var resultNum = numbers[Math.floor(Math.random() * numbers.length)];
      arrayOfArrays.push(resultNum);
    }
  }

  var charSpecial = confirm("Include Special Characters?");

 

  if (charSpecial) {
    alert("Special characters confirmed");
    for (var i = 0; i < length; i++) {
      var resultSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
      arrayOfArrays.push(resultSpecial);
    }
  }

  console.log(arrayOfArrays);








  if (arrayOfArrays === length) {
    console.log(finalPassword);
  }
  else {
    finalPassword = arrayOfArrays.concat()
    finalPassword.length = length;
  }

  console.log(finalPassword);
  //set arrayOfArrays length equal to length 

  var options = [lowercaseLetters, uppercaseLetters, numbers, specialChar]

  checkPassword();

    function checkPassword() {
        var missingValueArray = [];
        var containsAll = true;

        options.forEach(function (e, i, a) {
            var hasValue = false;
            arrayOfArrays.forEach(function (e1, i1, a1) {
                if (e.indexOf(e1) > -1) {
                    hasValue = true;
                }
            });

            if (!hasValue) {
                missingValueArray = a;
                containsAll = false;
            }
        });

        if (!containsAll) {
            arrayOfArrays[Math.floor(Math.random() * arrayOfArrays.length)] = missingValueArray.charAt(Math.floor(Math.random() * missingValueArray.length));
            finalPassword = "";
            arrayOfArrays.forEach(function (e, i, a) {
                finalPassword += e;
            });
            checkPassword();
        }
    }
 
   
  
  {console.log(finalPassword);}
    