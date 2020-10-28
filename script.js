// Assignment Code
var generateBtn = document.querySelector("#generate");  //drill down to button element with tag generate
var sourceUpper = "abcdefghijklmnopqrstuvwxyz";
var sourceLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sourceNum = "0123456789";
var sourceSpecial = ' !"#$%&\'()*+,-./:;<=>?@[\\\]^_`{|}~\ '; //needs work - how to actually include "\"?
sourceUpper.split("");
sourceLower.split("");
sourceNum.split("");
sourceSpecial.split("");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");  //drill down to password id

  var passwordLength = Number(prompt("Please enter the desired password length, from 8 to 256."));
  console.log(passwordLength);
  console.log(Number.isInteger(passwordLength));
  if (Number.isInteger(passwordLength) !== true || passwordLength < 8 || passwordLength > 256) {
    alert("You must enter an integer greater than or equal to 8 and less than or equal to 256.")
  }
  else {
  
    var includeLower = confirm("Should the password include lowercase letters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log("Lowercase letters included: " + includeLower);
    var includeUpper = confirm("Should the password include uppercase letters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log("Uppercase letters included: " + includeUpper);
    var includeNum = confirm("Should the password include numbers?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log("Numbers included: " + includeNum);
    var includeSpecial = confirm("Should the password include special characters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log("Symbols included: " + includeSpecial);
    console.log(includeLower + includeUpper + includeNum + includeSpecial);
        
    if (includeLower + includeUpper + includeNum + includeSpecial === 0 ) {
      alert("You must include at least one character type.");
    }

    else {
      // time to create source of characters for password
      var arrayBlank = [];
      var sourceBank = [];
      var password = [];
      console.log(arrayBlank);
      console.log(sourceLower);
      console.log(sourceUpper);
      console.log(sourceNum);
      console.log(sourceSpecial);
      if (includeLower === true) {
        var sourceBank = arrayBlank.concat(sourceLower);
        console.log("The password source bank is now: " + sourceBank);
      }
      if (includeUpper === true) {
        var sourceBank = sourceBank.concat(sourceUpper);
        console.log("The password source bank is now: " + sourceBank);
      }
      if (includeNum === true) {
        var sourceBank = sourceBank.concat(sourceNum);
        console.log("The password source bank is now: " + sourceBank);
      }
      if (includeSpecial === true) {
        var sourceBank = sourceBank.concat(sourceSpecial);
        console.log("The password source bank is now: " + sourceBank);
      }
      


      // passwordText.value = password;  //go to tag with password id; write password variable contents to value: "The value property sets or returns the value of the value attribute of a text field."
    }
  }



  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //create clickable button at button, run writePassword function
