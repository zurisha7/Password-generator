//Password Generator JS

/*Functions*/

//Welcome




 // ask criteria questions


 var characters = function (){
   var promptCharacters = prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
 

  // make sure answer is not empty
   if (promptCharacters === null || promptCharacters === "" ) {
     alert("Please choose a valid number!");
     return characters();
   } 
   //make sure it is a number
   if (isNaN(promptCharacters)){
     alert("Please choose a valid number!");
     return characters();
   }
   //make sure it it below 8 and above 128
   if (promptCharacters < 8){
    alert("Please choose a valid number!")
    return characters();
   }
   if (promptCharacters > 128){
     alert("Please choose a valid number!")
     return characters();
   }
   else {
     console.log(promptCharacters)
   }
};
     //store answer as password.length


 var upperCase = function() {
   var promptUpperCase = prompt("Would you like uppercase letters? Please type 'yes' or 'no'.");
      promptUpperCase = promptUpperCase.toLowerCase();
//make sure answer isn't blank
    if (promptUpperCase === "" || promptUpperCase === null){
      alert("Please choose yes or no!");
      return upperCase();
    }

    if(promptUpperCase === "yes"){
      promptUpperCase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

   if(promptUpperCase === "no"){
     promptUpperCase = "";
   }

   
    console.log(promptUpperCase)
    };
 upperCase();
    

 var lowerCase = function() {
   var promptLowerCase = window.prompt("Would you like lowercase letters? Please type 'yes or 'no'.");
   promptLowerCase = promptLowerCase.toLowerCase();

   if (promptLowerCase === "" || promptLowerCase === null){
     window.alert("Please choose a valid option!");
     return lowerCase();
   }
  if(promptLowerCase === "yes"){
   promptLowerCase = "abcdefghijklmnopqrstuvwxyz";
  }
   if(promptLowerCase === "no"){
     promptLowerCase = "";
   }
   
   console.log(promptLowerCase);
  };
lowerCase();

 var special = function() {
   var promptSpecial = window.prompt("Would you like special characters? Please type 'yes' or 'no.");
   promptSpecial = promptSpecial.toLowerCase();

   if (promptSpecial === "" || promptSpecial === null){
     window.alert("Please choose a valid option!");
     return special();
   }
     if(promptSpecial === "yes"){
       promptSpecial =  "!#$%&'()*+,-./:;<=>?@[^_{|}~";
     }
     if (promptSpecial === "no"){
       promptSpecial = "";
     }
   
   console.log(promptSpecial);
 };
 special();
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordLength = numeric.value;
  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

characters();