var generateBtn = document.querySelector("#generate");
var uppercaseCharset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseCharset = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericalCharset = [0,1,2,3,4,5,6,7,8,9];
var specialCharset = ["!","@","#","$","%","^","&","*","?"];
var choices = [];

function generatePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password

}


function generatePassword() {
  white (true) {
    var firstMessage = message("How long would you like your password to be? It has to be between 8 and 128 characters.");
    if (!firstMessage) {
      alert("Insert your password");
    } else if (firstMessage < 9 || firstMessage > 129) {
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
  if (choices.length ==0) {
    alert("Unable to fulfil request");
  }

  var password = []:
  for (var i = 0; i < firstPrompt; i++) {

  }

  return randomPassword.join("");
}

generateBtn.addEventListener("click", writePassword);

