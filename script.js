var generateBtn = document.querySelector("#generate");
var uppercaseCharset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseCharset = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericalCharset = [0,1,2,3,4,5,6,7,8,9];
var specialCharset = ["!","@","#","$","%","^","&","*","?"];
var choices = [];

function writePassword() { 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  while (true) {
    var firstMessage = message("How long would you like your password to be? It has to be between 8 and 128 characters.");
    if (!firstMessage) {
      alert("Insert your password");
    } else if (firstMessage < 8 || firstMessage > 128) {
      message("Your password has to be between 8 and 128 characters");
    } else {
      break;
    }
  }

  if (confirm("Do you want numbers in your password?")) {
    choices = choices.concat(numericalCharset);
  }
  if (confirm("Do you want any special characters in your password?")) {
    choices = choices.concat(specialCharset);
  }
  if (confirm("Do you want any lower case characters in your password?")) {
    choices = choices.concat(lowercaseCharset);
  }
  if (choices.length == 0) {
    alert("Unable to fullfil your request");
  }

  var password = []:
  for (var i = 0; i < firstMessage; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join("");
}

generateBtn.addEventListener("click", writePassword);






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
