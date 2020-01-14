// Assignment Code
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)
// console.dir(generateBtn)
var copyBtn = document.getElementById("copypass") 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.dir(passwordText);

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

//var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

function generatePassword() {
  // IPO - input processing output
  // prompt the user for the input
    // use confirm() and or prompt()
      // prompt() javascript -- w3
    // one after another
    
  var pLength = prompt("how long do you want the password to be? choose between 7-128")

var valid = false;
while (!valid){
  if ( 
    pLength < 7 
    || pLength > 128 
    || isNaN(parseInt(pLength)) 
  ){
    pLength = prompt("invlid try again. choose between 7-128")
  }
  else {
    valid = true;
  }
 


}
console.log(pLength);


    var specialCharacters = confirm("do you want special characters?"); 

    var numericCharacters = confirm("do you want numeric characters?");
  
    var LowercaseCharacters = confirm("do you want lowercase characters?");
  
    var UppercaseCharacters = confirm("do you want uppercase characters");

    
    // remember to assign to variables
    /*
      do you want spec chars
      var specChar = prompt()
    */
  // use those inputs to generate a password (string)
    // if spec chars is true (condition)
    // create a string with a special character

    if (specialCharacters) var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

    if (numericCharacters)  var numbers = '0123456789';
          
    if (LowercaseCharacters)  var lowercase = 'abcdefghijklmnopqrstuvwxyz';

    if (UppercaseCharacters)  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      
      var all = uppercase + lowercase + numbers + symbols;

      console.log(all);

          var password = '';
      for (var index = 0; index < pLength; index++) {
          var character = Math.floor(Math.random() * all.length);
          console.log(character);
          password += all.substring(character, character + 1);
          console.log(password);
      }

      copyBtn.classList.remove("hide");
      return password;

 }



function copyToClipboard() {
var passhtml = document.getElementById("password");
passval=passhtml.value;
  console.log(passval);
  passhtml.select();
  document.execCommand('copy');
}
 
copyBtn.addEventListener("click", copyToClipboard);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// BONUS EVENT LISTENER
