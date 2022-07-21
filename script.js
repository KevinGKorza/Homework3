//Code Assignment
var generateBtn = document.querySelector("#generate");
//An array containing uppercase letters A-Z
var uppercaseCharset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//An array containing lowercase letters a-z
var lowercaseCharset = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//An array containing numbers 1-9
var numericalCharset = ["0","1","2","3","4","5","6","7","8","9"];
//An array containing special characters
var specialCharset = ["!","@","#","$","%","^","&","*","?"];
//Used for concanation of the above variables later on in the code
var choices = [];

function writePassword() { 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() { 
  //Will tell user to add the value in their password, if they don't add it then they'll get an alert message saying to
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

  //Will ask user how they want their password 
  if (confirm("Do you want numbers in your password?")) {
    choices = choices.concat(numericalCharset);
  }
  if (confirm("Do you want any special characters in your password?")) {
    choices = choices.concat(specialCharset);
  }
  if (confirm("Do you want any lower case characters in your password?")) {
    choices = choices.concat(lowercaseCharset);
  }
  //if nothing has been picked then the user will get this message 
  if (choices.length == 0) {
    alert("Unable to fullfil your request");
  }

  //new password will go here 
  var randomPassword = [];
  //this is the loop which is needed for the password generation 
  for (var i = 0; i < firstMessage; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join('');
}

generateBtn.addEventListener("click", writePassword);
