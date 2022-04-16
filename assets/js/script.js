
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };
// Get references to the #generate element
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var symbolList = "!@#$%^&*_-+=";
var generateBtn = document.querySelector("#generate");


    var choosePasswordLength = function () {
        var lengthSelect = window.prompt('How long would you like your password to be? Must be at least 8 characters and must be less than 128.');

        // Conditional Recursive Function Call
        if (lengthSelect < 8 || lengthSelect > 128) {
            window.alert("You need to provide a valid answer! Please try again.");
            return choosePasswordLength();
        }
    }

    var chooseLowerCase = function(){
        var lowerCase = window.prompt('Would you like lower case letters in it?');
        if (lowerCase ==="" || lowerCase === null) {
            window.alert("You need to provide a valid answer! Please try again.");
            return chooseLowerCase();
        }
        
        if (lowerCase === "yes") {
           
            return true;
        }
        if (lowerCase === "no"){

    
          return false;
        }
    }
    
      function generateLowerCase(){
      if(chooseLowerCase === true) {
        randomLowerCase = lowerLetter.charAt(Math.floor(Math.random() * lowerLetter.length));
        password += randomLowerCase;
      }
    }

    function generatePassword (){
        choosePasswordLength();
        chooseLowerCase();
       generateLowerCase();
        return password;
    }
 
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);