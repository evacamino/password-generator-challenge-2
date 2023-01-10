
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "?", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", "_", "-"]
var userChoice = []
var results = ""



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}



function generatePassword() {
    var characters = [];

    var isUppercase = confirm("Do you want uppercase?")
    console.log(isUppercase) 
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




    for (var i = 0; i < passwordLength; i++){
   
        var randomNumber = Math.floor(Math.random() * characters.length);
   
        var randomCharacter = characters[randomNumber];
       


        
        results = results + randomCharacter;
    }

  

}


generateBtn.addEventListener("click", writePassword);
