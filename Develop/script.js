// Assignment code here
// Get length of password requested

// Get 

var generatePassword = function() {
  // Checks for password length requested
  var passwordLength = parseInt(prompt("How long would you like your password to be? Please enter a number between 8 and 128."));
  console.log(passwordLength);
  // Variables assigned for different input character types
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
  var num = "0123456789";
  var specialChar = "`~!@#$%^&*()-_=+[{]}\|;:',<.>/?";
  //Switch statement to assign user response to certain group of characters or multiple groups
  charSetType = "";
  var charType = parseInt(prompt("Please enter a number for each character type you would like in your password: 1 for lowercase, 2 for uppercase, 3 for numbers, 4 for special characters. You may select multiple options if you choose. (Please enter the numbers in the order they appear in the statement above starting with the smallest number first- example: 12, 24, 34, 23 )"));
  switch (charType) {
    case 1:
      charSetType = lowerCase;
      break;
    case 2:
      charSetType = upperCase;
      break;
    case 3: 
      charSetType = num;
      break;
    case 4:
      charSetType = specialChar;
      break;
    case 123:
      charSetType = (lowerCase + upperCase + num);
      break; 
    case 134:
      charSetType = (lowerCase + num + specialChar);
      break;
    case 1234:
      charSetType = (lowerCase + upperCase + num + specialChar);
      break;     
    case 12:
      charSetType = (lowerCase + upperCase);
      break;
    case 13:
      charSetType = (lowerCase + num);
      break;
    case 14:
      charSetType = (lowerCase + specialChar);
      break;
    case 23:
      charSetType = (upperCase + num);
      break;
    case 24:
      charSetType = (upperCase + specialChar);
      break;
    case 234:
      charSetType = (upperCase + num + specialChar);
      break;
    case 34:
      charSetType = (num + specialChar);
      break;
    default:
      alert("Please enter a valid response.");
      return generatePassword();
  }
  var passwordSet = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordSet = passwordSet + charSetType(Math.floor(Math.random() * charSetType.length));
  }
  return passwordSet;
}
console.log(generatePassword());

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
