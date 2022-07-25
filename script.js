//This is the Code Assignment
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J"]; //An array containing uppercase letters from A-Z
var lowercase = ["a","b", "c","d","e","f","g","h","i","j"]; //An array containing lowercase letters from a-z
var numbers = ["1","2","3","4","5","6","7","8","9","10"]; //An array containing numbers from 1-10
var special = ["!","@","#","$","%","^","&","*","?","+"]; //An array containing special characters 
var choices= [];

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    console.log(password)
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
//Will tell user to add the value in their password, if they don't add it then they'll get an alert message saying to
function generatePassword() { 
    var passwordLength = prompt("How long would you like your password to be?");
    console.log(passwordLength)
    if (passwordLength < 8 || passwordLength > 128) {
      prompt("Your password has to be between 8 and 128 characters");
    } else {
        
    }
//Will ask user how they want their password
if (confirm("Do you want your password to have numbers?")) {
    choices = choices.concat(numbers);
}
if (confirm("Do you want your password to have lowercase letters?")) {
    choices = choices.concat(lowercase);
}
//If nothing has been picked then the user will get this message 
if (choices.length == 0) {
    alert("Please try again!");
}

//New password will go here
var randomPassword = []; 
//This is the loop which is needed for the password generation 
for (var i = 0; i < passwordLength; i++) {
    var allChoices = choices[Math.floor((Math.random() * choices.length))];
    randomPassword.push(allChoices);
 }
return randomPassword.join("");

}

//Add event listener to generate button, without this no options would generate 
generateBtn.addEventListener("click",writePassword); 

