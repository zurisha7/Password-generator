//Password Generator JS

/*Functions*/

//Welcome


 // ask criteria questions


 var  passLength = prompt("How many characters would you like to include in your password? Please choose a number between 8 and 128.");
        // make sure numbers are between 8 and 128
        if (passLength <= 8|| passLength <= 128)  {
          alert("Password must be between 8 and 128. Please choose again");
          var passLength = ("How many characters would you like to include in your password? Please choose a number between 8 and 128.");
        } 
 //make sure one letter criteria is met
 if (passUpperCase === true || passLowerCase === true){
 }
  else {
    alert("Password must have either lower case or upper case letters!")
    return passLength;
 };


  // string for criteria

  upper  = "ABCDEFGHIJKLMNOPQRSTUVWXWYZ";
  lower = "abcdefghijklmnopqrstuvwxyz";
  special =  "!#$%&'()*+,-./:;<=>?@[^_{|}~";
  numerals = "1234567890";
  
  var passUpperCase = confirm("Would you like to include uppercase letters? Please type 'yes' or 'no'.");  
  
 var passLowerCase = confirm("Would you like to include lowercase letters? Please type 'yes or 'no'.");

 var passSpecial = confirm("Would you like  to include special characters? Please type 'yes' or 'no.");

 var passNumbers = confirm("Would you like to include numbers? ");



  
   var createPassword = function(characters){
     var word = "";
     criteria =

     for(var i = 0; i < characters; i++)
      word += criteria.charAt(Math.floor(Math.random() * criteria.length));
console.log (createPassword);
   };





  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
   addEventListener(click)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

};
createPassword();