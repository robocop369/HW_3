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
  // while I havenot confirmed validity do this
  while (!valid) {
    if (
      pLength < 7
      || pLength > 128
      || isNaN(parseInt(pLength))
    ) {
      pLength = prompt("invlid try again. choose between 7-128")
    }
    else {
      valid = true; //sentry variable
    }
  }
  console.log(pLength);

  var specialCharacters = confirm("do you want special characters?");

  var numericCharacters = confirm("do you want numeric characters?");

  var lowercaseCharacters = confirm("do you want lowercase characters?");

  var uppercaseCharacters = confirm("do you want uppercase characters");


  // remember to assign to variables
  /*
    do you want spec chars
    var specChar = prompt()
  */
  // use those inputs to generate a password (string)
  // if spec chars is true (condition)
  // create a string with a special character


// define emmpty strings will be used later if needed
  var symbols = " ";
  var numbers = " ";
  var lowercase = " ";
  var uppercase = " ";
  

  if (specialCharacters) {
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
  }

  if (numericCharacters) {
    var numbers = '0123456789';
  }

  if (lowercaseCharacters) {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  }

  if (uppercaseCharacters) {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  var all = uppercase + lowercase + numbers + symbols;

  console.log(all);

  var password = '';
  for (var index = 0; index < pLength; index++) {
    var randomNumber = Math.floor(Math.random() * all.length);
    console.log(randomNumber);
    password += all.substring(randomNumber, randomNumber + 1);
    console.log(password);
  }

  copyBtn.classList.remove("hide");
  return password;

}



function copyToClipboard() {
  var passhtml = document.getElementById("password");
  passval = passhtml.value;
  console.log(passval);
  // this makes the cursor select the area
  passhtml.select();
  //this makes the html copy what ever area is selected 
  document.execCommand('copy');
}

// this is an event listener  taht says whenth element for a cpybtn is clincied then run this fucntion 
copyBtn.addEventListener("click", copyToClipboard);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// BONUS EVENT LISTENER
