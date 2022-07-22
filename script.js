var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J"];
var lowercase = ["a","b", "c","d","e","f","g","h","i","j"];
var numbers = ["1","2","3","4","5","6","7","8","9","10"];
var special = ["!","@","#","$","%","^","&","*","?","+"];
var choices= [];

function writePassword() {
    var password = generatePassword();
    console.log(password)
    var passwordText =document.querySelector("#password);")
    passwordText.value = password;
}

function generatePassword() {
    var passwordLength = prompt("How long would you like your password to be?");
    console.log(passwordLength)
    if (passwordLength < 8 || passwordLength > 128) {
      prompt("Your password has to be between 8 and 128 characters");
    } else {
        
    }

if (confirm("Do you want your password to have numbers?")) {
    choices = choices.concat(numbers);
}
if (confirm("Do you want your password to have lowercase letters?")) {
    choices = choices.concat(lowercase);
}
if (choices.length == 0) {
    alert("Please try again!");
}


var randomPassword = []; 
for (var i = 0; i < passwordLength; i++) {
    var allChoices = choices[Math.floor((Math.random() * choices.length))];
    randomPassword.push(allChoices);
 }
return randomPassword.join("");
}

generateBtn.addEventListener("click",writePassword); 
