// Assignment Code
var generateBtn = document.querySelector("#generate");

//criteria for password
var passwordCriteria = {
  passwordLength: 0,
  //lowerCase, upperCase, numbers, specialChara
  passwordLowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  passwordUpperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  passwordNumbers: ["0","1","2","3","4","5","6","7","8","9"],
  passwordSpecial: ["!","@","#","$","%","^","&","*","(",")"]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function askQuestions (){
  passwordLength = parseInt (prompt("Your password must be between 8 & 128 characters long. How many characters would you like your password to be?"));
  passwordNumbers = confirm ("Do you want to use numbers?")
  passwordSpecial = confirm ("Do you want to use special characters?")
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";
  var passwordLength = 0;
  var passwordLowerCase;
  var passwordUpperCase;
  var passwordNumbers;
  var passwordSpecial;
}

  passwordLength = 0;
  passwordCriteria.passwordLength = 0;
  result = "";
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt ("Password must be between 8 - 128 characters long. How many characters do you want your password to be?");
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      if (!isFinite (passwordLength)) { alert("You must include a number.");
      return "Your secure password";}
    else {
  }
    else {
      showPrompts();
      if (passwordLowerCase ===true && passwordCriteria.passwordLength < passwordLength) {
        var passwordLowerCase = passwordCriteria.passwordLowerCase [Math.floor(Math.random() * 26)]
        result = result + passwordLowerCase;
        passwordCriteria.passwordLength++;}
      if (passwordUpperCase === true && passwordCriteria.passwordLength <passwordLength) {
        var passwordUpperCase = passwordCriteria.passwordUpperCase [Math.floor(Mqth.random() * 26)]
        result = result + passwordUpperCase;
        passwordCriteria.passwordLength++;}
      if(passwordNumbers === true && passwordCriteria.passwordlength <passwordlength){
        var passwordNumbers = passwordCriteria.passwordNumbers [Math.Floor (Math.random() * 10)]
        result = result + passwordLength++;}
      if (passwordSpecial === true && passwordCriteria.passwordlength <passwordlength){
        var passwordSpecial = passwordCriteria.passwordSpecial [Math.Floor (Math.random() * 10)]
        result = result + passwordLength++;}
    }
    return result;
    function showPrompts() {
      passwordLowerCase = confirm ("Do you want to use lowercase letters?");
      passwordUppercase = confirm ("Do you want to use uppercase letters?");
      PasswordNumbers = confirm ("Do you want to use numbers?");
      passwordSpecial = confirm ("Do you want to use special characters?");
    }
  }

}
