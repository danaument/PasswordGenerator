// Assignment Code
var generateBtn = document.querySelector("#generate");  //drill down to button element with tag generate

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");  //drill down to password id

  var passwordLength = prompt("Please enter the desired password length, from 8 to 256.");
  console.log(passwordLength);

  if (Number.isInteger(passwordLength) !== true || passwordLength < 8 || passwordLength > 256) {
    alert("You must enter an integer greater than or equal to 8 and less than or equal to 256.")
  }
  else {

  
    var includeLower = confirm("Should the password include lowercase letters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    var includeUpper = confirm("Should the password include uppercase letters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    var includeNum = confirm("Should the password include numbers?  (Click 'Okay' to include or 'Cancel' to not include.)");
    var includeSpecial = confirm("Should the password include special characters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log(includeLower + includeUpper + includeNum + includeSpecial);
    console.log("Lowercase letters included: " + includeLower);
    console.log("Uppercase letters included: " + includeUpper);
    console.log("Numbers included: " + includeNum);
    console.log("Symbols included: " + includeSpecial);
    
    if (includeLower + includeUpper + includeNum + includeSpecial === 0 ) {
      alert("You must include at least one character type.");
    }

    else {


      // passwordText.value = password;  //go to tag with password id; write password variable contents to value: "The value property sets or returns the value of the value attribute of a text field."
    }
  }



  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //create clickable button at button, run writePassword function
