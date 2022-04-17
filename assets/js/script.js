
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var symbolList = "!@#$%^&*_-+=";



var choosePasswordLength = function () {
    var lengthSelect = window.prompt('How long would you like your password to be? Must be at least 8 characters and must be less than 128.');

    // Conditional Recursive Function Call
    if (lengthSelect < 8 || lengthSelect > 128) {
        window.alert("You need to provide a valid answer! Please try again.");
        return choosePasswordLength();
    }

}

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


function generatePassword() {
    var password = "";

    optPasswordLength = choosePasswordLength();
    optLowerCase = chooseLowerCase();
    optUpperCase = chooseUpperCase();
    optChooseNum = chooseNum();
    optChooseSpecial = chooseSpecial();

    if (optLowerCase === true) {
        randomLowerCase = lowerLetter.charAt(Math.floor(Math.random() * lowerLetter.length));
        password += randomLowerCase;
    }


    if (optUpperCase === true) {
        randomUpperCase = upperLetter.charAt(Math.floor(Math.random() * upperLetter.length));
        password += randomUpperCase;
    }

    if (optChooseNum === true) {
        randomNumChoice = numList.charAt(Math.floor(Math.random() * numList.length));
        password += randomNumChoice;
    }
    if (optChooseSpecial === true) {
        randomSymbolChoice = symbolList.charAt(Math.floor(Math.random() * symbolList.length));
        password += randomSymbolChoice;
    }


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