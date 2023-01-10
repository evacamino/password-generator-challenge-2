// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "?", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "_", "-"]
var userChoice = []
var results = ""


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}



function generatePassword() {
    var characters = [];

    var isUppercase = confirm("Do you want uppercase?")
    console.log(isUppercase) // true
    if (isUppercase === true) {
        characters = characters.concat(uppercase);
    }
    var isLowercase = confirm("Do you want lowercase?")
    if (isLowercase === true) {
        characters = characters.concat(lowercase);
    }
    var isSpecial = confirm("Do you want special characters?")
    console.log(isSpecial)
    if (isSpecial === true) {
        characters = characters.concat(special)
    }
    var isNumbers = confirm("Do you want numbers?")
    console.log(isNumbers)
    if (isNumbers === true) {
        characters = characters.concat(numbers);
    }


    console.log(isLowercase)
    var passwordLength = prompt("How long?")
    console.log(passwordLength);
    console.log(characters);

    // generate password using characters array


    for (var i = 0; i < passwordLength; i++){
        // create a random number to use as the character index
        var randomNumber = Math.floor(Math.random() * characters.length);
        // console.log(randomNumber);
        // use the random number to extract a val from the char array
        var randomCharacter = characters[randomNumber];
        // console.log(randomCharacter);


        // insert that value into the results string
        results = results + randomCharacter;
    }

    // var characters = Math.floor(Math.random() characters.length);
    // console.log(random, months[random]);
    return results;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
