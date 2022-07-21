// Assignment code here

var generateBtn = document.querySelector("#generate");
var uppercaseCharset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseCharset = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericalCharset = [0,1,2,3,4,5,6,7,8,9];
var specialCharset = ["!","@","#","$","%","^","&","*","?"];

function generatePassword() { 
  var password = "";
  var passwordCharset = "";
  var passwordLengthUser = ("How many characters would you like your password to be? It must be between 8-128 characters.");
  passwordLengthUser = parseInt (passwordLengthUser);
  if (passwordLengthUser < 8) {
    alert ("Your password must be between 8 and 128 characters");
    return"";
  }

  if (passwordLengthUser > 128) {
    alert ("Your password must be between 8 and 128 characters");
    return"";
  }

  var lowercaseCharset = confirm("Lowercase Characters are needed!");
  if (lowercaseCharset) {
    passwordCharset += lowercaseCharset;
  }

  var uppercaseChar = confirm("Uppercase Characters are needed!");
  if (uppercaseChar) {
    passwordCharset += uppercaseChar;
  }

  var specialCharset = confirm("Special Characters are needed!");
  if (specialCharset) {
    passwordCharset += specialCharset;
  };


  for (var i = 0; i < passwordLengthUser; i++) {
    password = passwordCharset [Math.floor(Math.random() * passwordCharset.length)];
  }

function writePassword(password) {
  var password = generatePassword();
  var passwordTextArea = document.getElementById("#password");
  passwordTextArea.value = password;
  return;
}



console.log(writePassword)
}
generateBtn.addEventListener("click", generatePassword);
























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
