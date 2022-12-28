// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  askQuestions();
}

var choice = [];
var numberOfChar;

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChara = ["!","@","#","$","%","^","&","*","(",")"];
var finalPassword = "";

function askQuestions (){
  choice = [];
  numberOfChar = parseInt (prompt("How many characters would you like your password to be?"));
    if (isNaN(numberOfChar) || numberOfChar <8 || numberOfChar >128) {
      alert("Password should be between 8 & 128 characters.");
      return false;
  }
  specialChara = confirm ("Do you want to use special characters?");
    if (specialChara) {
      choice = choice.concat(specialChara);
    }
  }
  lowerCase = confirm ("Do you want to use lower case letters?");
      if (lowerCase) {
      choice = choice.concat(lowerCase);
    }
  upperCase = confirm ('Do you want to use upper case letters?');
    if (upperCase) {
    choice = choice.concat(upperCase);
  }
  numbers = confirm ("Do you want to use numbers?");
    if (numbers) {;
    choice = choice.concat(numbers);

  if (specialChara === false && lowerCase === false && upperCase === false && numbers === false){
    return " At least one character type must be selected.";
  };
  }


// Write password to the #password input
function writePassword() {
  askQuestions ();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)