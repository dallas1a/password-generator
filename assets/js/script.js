//
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// Creates initial variables
var generateBtn = document.querySelector("#generate");
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var symbolList = "!@#$%^&*_-+=";


//Prompts user for password length, invalid if less than 8 or greater than 128.
var choosePasswordLength = function () {
    var lengthSelect = window.prompt('How long would you like your password to be? Must be at least 8 characters and must be less than 128.');

    // Outputs lengthSelect if answer is valid.
    if (lengthSelect < 8 || lengthSelect > 128) {
        window.alert("You need to provide a valid answer! Please try again.");
        return choosePasswordLength();
    } else {
        return lengthSelect;
    }
}
//Prompts user if they want lower case letters in their password. Returns true if yes and false if no. 
var chooseLowerCase = function () {
    var lowerCase = window.prompt('Would you like lower case letters in it?');
    if (lowerCase === "" || lowerCase === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return chooseLowerCase();
    }

    if (lowerCase === "yes") {

        return true;
    }
    if (lowerCase === "no") {


        return false;
    }

}
//Prompts user if they want upper case letters in their password. Returns true if yes and false if no. 
var chooseUpperCase = function () {
    var upperCase = window.prompt('Would you like upper case letters in it?');
    if (upperCase === "" || upperCase === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return chooseUpperCase();
    }

    if (upperCase === "yes") {

        return true;
    }
    if (upperCase === "no") {


        return false;
    }

}
//Prompts user if they want numbers in their password. Returns true if yes and false if no. 
var chooseNum = function () {
    var includeNum = window.prompt('Would you like numbers in it?');
    if (includeNum === "" || includeNum === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return chooseNum();
    }

    if (includeNum === "yes") {

        return true;
    }
    if (includeNum === "no") {


        return false;
    }

}
//Prompts user if they want special characters in their password. Returns true if yes and false if no. 
var chooseSpecial = function () {
    var specialChar = window.prompt('Would you like special characters in it?');
    if (specialChar === "" || specialChar === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return chooseSpecial();
    }

    if (specialChar === "yes") {

        return true;
    }
    if (specialChar === "no") {


        return false;
    }

}

// Generates password after calling each function as new variable 
//and adding the character type based on if true from previous character selection functions.
function generatePassword() {
    var password = "";

    optPasswordLength = choosePasswordLength();
    console.log(optPasswordLength);
    optLowerCase = chooseLowerCase();
    optUpperCase = chooseUpperCase();
    optChooseNum = chooseNum();
    optChooseSpecial = chooseSpecial();
    //Executes while loop while password string length is less than optPassword Length.
    // Only adds letter if type is selected and password length is less than the value input into lengthSelect.
    while (password.length < optPasswordLength) {

        if (optLowerCase === true && password.length < optPasswordLength) {
            randomLowerCase = lowerLetter.charAt(Math.floor(Math.random() * lowerLetter.length));
            password += randomLowerCase;
        }


        if (optUpperCase === true && password.length < optPasswordLength) {
            randomUpperCase = upperLetter.charAt(Math.floor(Math.random() * upperLetter.length));
            password += randomUpperCase;
        }


        if (optChooseNum === true && password.length < optPasswordLength) {
            randomNumChoice = numList.charAt(Math.floor(Math.random() * numList.length));
            password += randomNumChoice;
        }


        if (optChooseSpecial === true && password.length < optPasswordLength) {
            randomSymbolChoice = symbolList.charAt(Math.floor(Math.random() * symbolList.length));
            password += randomSymbolChoice;
        }




    }

    return password;
}


// Writes password based on generatePassword function.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);