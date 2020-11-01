// Assignment Code
var generateBtn = document.querySelector("#generate");  //drill down to button element with tag generate
var sourceLower = "abcdefghijklmnopqrstuvwxyz".split("");
var sourceUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var sourceNum = "0123456789".split("");
var sourceSpecial = " !#$%&\\'()*+,-./:;<=>?@[]^_`{|}~".split(""); 

var workingPassword = [];
var passwordText;

//The following function generates a true/false return by comparing two arrays.  I found it on Stack Overflow.  The testArray includes all values common to both input arrays.  I didn't need that resulting array - just true/false return - so I added the var assignment and the if statement.
function checkPassword(array1, array2) {  
  var testArray = array1.filter(function(n) {
      return array2.indexOf(n) !== -1;
      })
  if (testArray.length > 0) {
    return true;
  }
};

// Generate and write workingPassword to the element with the #password id
function writePassword() {
  
  // var workingPassword = generatePassword();  This line was given in the original script.js file, but I didn't use it.  I kept it here to acknowledge that I made this choice.  If I were required to use this line, I would define the generatePassword function as the for loop on line 73.
  var passwordText = document.querySelector("#password");  //drill down to workingPassword id
  var passwordLength = Number(prompt("Please enter the desired workingPassword length, from 8 to 256."));
  if (Number.isInteger(passwordLength) !== true || passwordLength < 8 || passwordLength > 256) {
    alert("You must enter an integer greater than or equal to 8 and less than or equal to 256.")
  }  //The assignment readme listed this "when/then" item after the character types "when/then" item.  If I accomplish all acceptance criteria, does it matter in which order I do so?  I wanted this prompt to come before the confirms because I would use less of the user's time.  This is the only question that the user can get "wrong", since it is a text field rather than a binary choice.  If they did so and realized their mistake, I wanted them to have to repeat as few steps as possible on their subsequent uses.
  else {
  
    var includeLower = confirm("Should the password include lowercase letters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    var includeUpper = confirm("Should the password include uppercase letters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    var includeNum = confirm("Should the password include numbers?  (Click 'Okay' to include or 'Cancel' to not include.)");
    var includeSpecial = confirm("Should the password include special characters?  (Click 'Okay' to include or 'Cancel' to not include.)");
    
    var passwordIngredients = {  //I put this object in at the direction of my tutor.  I did not use it consistently since the included variables are still in the scope of this function and calling the object and key is longer than just the inner variable.  Using an object like this would be useful if the number of arrays in the object varied.
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
      var sourceBank = [];  //This array will house the possible characters for the random selection method

      if (includeLower === true) {
        sourceBank = sourceBank.concat(sourceLower);
      }
      if (includeUpper === true) {
        sourceBank = sourceBank.concat(sourceUpper);
      }
      if (includeNum === true) {
        sourceBank = sourceBank.concat(sourceNum);
      }
      if (includeSpecial === true) {
        sourceBank = sourceBank.concat(sourceSpecial);
      }
      
      do {
        workingPassword = []; //need to blank out password each loop to start over
        var testCounter = 0;  //each time the loop runs, the error-checking variables need to be reset.
        var checkCounter = 0;

        for (i = 0; i < passwordLength; i++) {  //This solution has the potential to create passwords that - by random chance - do not include at least one member of each user-selected character type.
          workingPassword.push(sourceBank[Math.floor(Math.random() * sourceBank.length)]);
        }
        //These if statements compare the workingPassword variable against the user-selected character types.  I'm probably writing out too many comments, but I guess I don't know yet how much is too much.
        if (passwordIngredients.lower) {
          if (checkPassword(sourceLower, workingPassword) === true) {
            checkCounter++;
          }
          testCounter++;
        }

        if (passwordIngredients.upper) {
          if (checkPassword(sourceUpper, workingPassword) === true) {
            checkCounter++;
          }
          testCounter++;
        }

        if (passwordIngredients.num) {
          if (checkPassword(sourceNum, workingPassword) === true) {
            checkCounter++;
          }
          testCounter++;
        }
        
        if (passwordIngredients.special) {
          if (checkPassword(sourceSpecial, workingPassword) === true) {
            checkCounter++;
          }
          testCounter++;
        }

        console.log("The password was tested against " + testCounter + " required character types and had " + checkCounter + " distinct character types.")

      }  
      while (checkCounter < testCounter);
      workingPassword = workingPassword.join("");
      passwordText.value = workingPassword;  
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //create clickable button at button, run writePassword function

