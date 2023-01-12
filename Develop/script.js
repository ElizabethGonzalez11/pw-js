// Assignment Code - gary gave some starter code in JS
var generateBtn = document.querySelector("#generate");
var numberOfChars;
var useSpecialChars;
var useNumbers;
var useUpper;
var useLower;
var finalPassword = "";

//use global variables to list out all possible
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")"];

function askQuestions(){
  var response = prompt ("Enter a password length between 8 and 128 characters?");
  numberOfChars = parseInt(response);
  while(numberOfChars <=7 || numberOfChars >=129){
    alert ("Password must be between 8 and 128 characters. Please try again");
    var numberOfChars = (prompt ("Enter a password between 8 and 128 characters."));
  }
  useSpecialChars = confirm("Do you want to use special characters?");
  useNumbers = confirm('Do you want to use numbers?');
  useUpper = confirm("Do you want to use upper case letters?");
  useLower = confirm("Do you want to use lower case letters?");
    while(useSpecialChars === false && useNumbers === false && useUpper === false && useLower === false) {
      alert ("At least one character must be selected.");
      var useSpecialChars = confirm("Do you want to use special characters?");
      var useNumbers = confirm('Do you want to use numbers?');
      var useUpper = confirm("Do you want to use upper case letters?");
      var useLower = confirm("Do you want to use lower case letters?");
    }
}
      var pwChar = []
if (useSpecialChars) {
  pwChar = pwChar.concat(specialChar)
}
if (useNumbers) {
  pwChar = pwChar.concat(numbers)
}
if (useUpper) {
  pwChar = pwChar.concat(useUpper)
}
if (useLower) {
  pwChar = pwChar.concat(useLower)
}

finalPassword = ""
  for (var i = 0; i < numberOfChars; i++){
    finalPassword /// ended here/////////////////////////////////////
  }
//use a loop ot grab a random characters x number of times
//finalPassword +=

//your work starts here
function generatePassword (){
  askQuestions()

  return //the final password here. this is step 4.
}

//write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//add event listener to generate button
//this states when the generate password btn is clicked, it will recall the function of writePassword
generateBtn.addEventListener("click", writePassword);