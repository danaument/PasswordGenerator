// Assignment Code
var generateBtn = document.querySelector("#generate");  //drill down to button element with tag generate
var sourceUpper = "abcdefghijklmnopqrstuvwxyz".split("");
var sourceLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var sourceNum = "0123456789".split("");
var sourceSpecial = " !#$%&\'()*+,-./:;<=>?@[\\\]^_`{|}~\ ".split(""); //needs work - how to actually include "\"?


function checkPassword(array) {
  console.log(workingPassword);
  array.filter(function(n) {
    return workingPassword.indexOf(n) !== -1;
    })
  if (array === null) {
    tryAgain = false;
  }
};

// function checkPassword(array) {
//   array.filter(value => workingPassword.includes(value))
// }

// Write workingPassword to the #workingPassword input
function writePassword() {
  
  // var workingPassword = generatePassword();
  var passwordText = document.querySelector("#workingPassword");  //drill down to workingPassword id

  var passwordLength = Number(prompt("Please enter the desired workingPassword length, from 8 to 256."));
  console.log(passwordLength);
  console.log(Number.isInteger(passwordLength));
  if (Number.isInteger(passwordLength) !== true || passwordLength < 8 || passwordLength > 256) {
    alert("You must enter an integer greater than or equal to 8 and less than or equal to 256.")
  }
  else {
  
    var includeLower = confirm("Should the workingPassword include lowercase letters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log("Lowercase letters included: " + includeLower);
    var includeUpper = confirm("Should the workingPassword include uppercase letters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log("Uppercase letters included: " + includeUpper);
    var includeNum = confirm("Should the workingPassword include numbers?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log("Numbers included: " + includeNum);
    var includeSpecial = confirm("Should the workingPassword include special characters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    console.log("Symbols included: " + includeSpecial);
    console.log(includeLower + includeUpper + includeNum + includeSpecial);
    
    var passwordIngredients = {
      lower: includeLower,
      upper: includeUpper,
      num: includeNum,
      special: includeSpecial,
    };
    

    if (includeLower + includeUpper + includeNum + includeSpecial === 0 ) {
      alert("You must include at least one character type.");
    }

    else {
      // time to create source of characters for workingPassword
      var arrayBlank = [];
      var sourceBank = [];
      var workingPassword = [];
      
      console.log(arrayBlank);
      console.log(sourceLower);
      console.log(sourceUpper);
      console.log(sourceNum);
      console.log(sourceSpecial);
      if (includeLower === true) {
        sourceBank = arrayBlank.concat(sourceLower);
        // passwordIngredients = passwordIngredients.push(includeLower);  //add lowercase to error check array, syntax?
        console.log("The workingPassword source bank is now: " + sourceBank);
        console.log(passwordIngredients);
      }
      if (includeUpper === true) {
        sourceBank = sourceBank.concat(sourceUpper);
        console.log("The workingPassword source bank is now: " + sourceBank);
      }
      if (includeNum === true) {
        sourceBank = sourceBank.concat(sourceNum);
        console.log("The workingPassword source bank is now: " + sourceBank);
      }
      if (includeSpecial === true) {
        sourceBank = sourceBank.concat(sourceSpecial);
        console.log("The workingPassword source bank is now: " + sourceBank);
      }
      var tryAgain = true;
      workingPassword = [];
      console.log("The initial workingPassword variable is: " + workingPassword);
      //time to pick items from sourceBank to append to workingPassword

      while (tryAgain === true) {
          for (i = 0; i < passwordLength; i++) {
          //pick random 
            workingPassword.push(sourceBank[Math.floor(Math.random() * sourceBank.length)]);
            console.log(workingPassword);
          }
          if (passwordIngredients.lower) {
            checkPassword(sourceLower);
          }

          if (passwordIngredients.upper) {
            checkPassword(sourceUpper);
          }

          if (passwordIngredients.num) {
            checkPassword(sourceNum);
          }
          
          if (passwordIngredients.special) {
            checkPassword(sourceSpecial);
          }
           
          // for (i = 0; i < passwordLength; i++) {
          //           //pick random 
          //   workingPassword.push(sourceBank[Math.floor(Math.random() * sourceBank.length)]);
          //   console.log(workingPassword);
          //   }
          // console.log(passwordIngredients.forEach(checkPassword()));
          // console.log(checkPassword(passwordIngredients.forEach));



      }
        

      // } 
      // while (passwordIngredients.foreach(checkPassword) < passwordIngredients.length );  //need to run checkPassword against each array in passwordIngredients array
      console.log(Array.isArray(workingPassword));
      workingPassword.join();
      console.log(Array.isArray(workingPassword));
      workingPassword.toString();

      passwordText.value = workingPassword;  //go to tag with workingPassword id; write workingPassword variable contents to value: "The value property sets or returns the value of the value attribute of a text field."
    }
  }



  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //create clickable button at button, run writePassword function

