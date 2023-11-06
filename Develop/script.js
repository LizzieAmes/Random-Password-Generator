// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password criteria variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacter = "!#$%&'()*+,-./:;<=>?[]^_`{|}~";

// Function to generate a password and return if invalid length
function generatePassword() {
  var passwordLength = prompt("Enter desired password length (between 8 and 128 characters.):");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter valid password length.");
    return "";
  }

  // Variables for password prompts
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  // Combines users selections to create a password
  var validCharacters = "";
    if (useLowercase) validCharacters += lowerCase;
    if (useUppercase) validCharacters += upperCase;
    if (useNumeric) validCharacters += numeric;
    if (useSpecial) validCharacters += specialCharacter;

  //Generate the password
  var password = "";
    for (var i = 0; i < passwordLength; i++){
      var randomIndex = Math.floor(Math.random() * validCharacters.length); 
      password += validCharacters[randomIndex];
    }
    return password;
}


  // Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
