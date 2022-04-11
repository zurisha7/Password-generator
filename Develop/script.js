  // string for criteria 

  upper  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  lower = "abcdefghijklmnopqrstuvwxyz";
  special =  "!#$%&'()*+,-./:;<=>?@[^_{|}~";
  numbers = "1234567890";
  
  //Variables
  var passLength;
  var passLower;
  var passUpper;
  var passSpecial;
  var passNumbers;
  var criteria;
  var word;
      

//funtion to create click to start
var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", function(){
    word = criteria ();
    document.getElementById("password").placeholder = word;
  })

  
//functions to create password


        

 var criteria = function() {
passUpper = confirm("Would you like to include uppercase letters? Please click ok for yes!");
       
passLower = confirm("Would you like to include lowercase letters? Please click ok for yes.!");
          
      
passSpecial = confirm("Would you like  to include special characters? Please click ok for yes!");
      

passNumbers = confirm("Would you like to include numbers? Please click ok for yes!");
 

 //make sure at least one criteria is met
 if (passUpper === false && passLower ===false && passSpecial === false && passNumbers === false) {
        alert("Password must have at least one criteria!!");
        return criteria();
      }
  //what to do with one criteria confirmed
  else if (passUpper === true && passLower === false && passSpecial === false && passNumbers  === false){
    criteria = upper;
  }
  // two confirmed criterias
  else if(passUpper === true && passLower === true && passSpecial && passNumbers) {
    criteria = upper.concat(lower);
  }
  else if(passUpper === true && passSpecial === true && passLower === false && passNumbers === false){
    criteria = upper.concat(special);
  }
  else if(passUpper=== true && passNumbers === true  && passSpecial === false && passLower === false){
    criteria = upper.concat(numbers);
  }
  else if(passLower === true && passSpecial === true && passUpper === false && passNumbers === false ){
    criteria = lower.concat(special);
  }
  else if(passLower === true && passNumbers === true && passUpper === false && passSpecial === false){
    criteria = lower.concat(numbers);
  }
  else if(passSpecial === true && passNumbers === true && passUpper === false && passLower === false ){
    criteria = special.concat(numbers);
  }
  // three criteria confirmed
  else if(passUpper === true && passLower === true && passNumbers === true && passSpecial === false){
    criteria = upper.concat(lower, numbers);
  }
  else if(passUpper === true && passLower === true && passSpecial === true && passNumbers === false){
    criteria = upper.concat(lower, special);
  }
  else if(passUpper === true && passNumbers === true && passSpecial === true && passLower === false){
    criteria = upper.concat(numbers, special);
  }
  else if(passLower === true && passNumbers === true && passSpecial === true && passUpper === false){
    criteria = lower.concat(numbers, special);
  }
   //4 confirmed criteria
  if (passUpper === true && passLower === true && passSpecial === true && passNumbers === true){
    criteria = upper.concat(lower, numbers, special);
  }
 
  // find the length
    passText 
   = parseInt(prompt("How many characters would you like to include in your password? Please choose a number between 8 and 128."));
 // make sure number is between 8 and 128
  if (passLength < 8|| passLength > 128)  {
   alert("Password must be between 8 and 128. Please choose again");
 }//make sure there is a number given
 else if
   (passLength === "" || passLength === null) {
     alert("Please provide a number!")
   
  
 }

 
//create random string from criteria
     for (var i = 0; i < passText; i++){
       var randomCriteria = criteria(Math.floor(Math.random() * passText.length));
       return randomCriteria;
     };
     var pass = criteria.join("");
      criteria(pass);
      return pass;


  console.log(criteria);
 console.log(passText);

    
  function criteria(pass){document.querySelector("#password").textContent = passText;}
};