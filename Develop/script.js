//funtion to create click to start
var generateBtn = document.querySelector("#generate");
    generateBtn.addEventListener("click", function(){
      word = createPassword();
      document.getElementById("password").placeholder = word;

    });
// functions to create password
createPassword= function(){
  passLength = parseInt(prompt("How many characters would you like to include in your password? Please choose a number between 8 and 128."));
        // make sure number is between 8 and 128
        if (passLength < 8|| passLength > 128)  {
          alert("Password must be between 8 and 128. Please choose again");
        }//make sure there is a number given
        else if
          (!passLength) {
            alert("Please provide a number!")
        }
        //conirm criteria questions
        else{
        passUpper = confirm("Would you like to include uppercase letters? Please type 'yes' or 'no'.");  
  
        passLower = confirm("Would you like to include lowercase letters? Please type 'yes or 'no'.");

        passSpecial = confirm("Would you like  to include special characters? Please type 'yes' or 'no.");

        passNumbers = confirm("Would you like to include numbers? ");
        };


 //make sure one letter criteria is met
 if (passUpper !== true || passLower !== true){
    alert("Password must have either lower case or upper case letters!");
 }
 //make sure at least one criteria is met
 else if (!passUpper && !passLower && !passSpecial && !passNumbers) {
        alert("Password must have at least one criteria!!");
      }
  //what to do with one criteria confirmed
  else if (passUpper) {
    criteria = upper;
  }
  else if (passLower) {
    criteria = lower;
  }
  else if (passSpecial){
    criteria = special;
  }
  else if (passNumbers){
    criteria = numbers;
  }
  // two confirmed criteria
  else if(passUpper && passLower) {
    criteria = upper.concat(lower);
  }
  else if(passUpper && passSpecial){
    criteria = upper.concat(special);
  }
  else if(passUpper && passNumbers){
    criteria = upper.concat(numbers);
  }
  else if(passLower && passSpecial){
    criteria = lower.concat(special);
  }
  else if(passLower && passNumber){
    criteria = lower.concat(numbers);
  }
  else if(passSpecial && passNumbers){
    criteria = special.concat(numbers);
  }
  // three criteria confirmed
  else if(passUpper && passLower && passNumbers){
    criteria = upper.concat(lower, numbers);
  }
  else if(passUpper && passLower && passSpecial){
    criteria = upper.concat(lower, specials);
  }
  else if(passUpper && passNumbers && passSpecial){
    criteria = upper.concat(numbers, special);
  }
  else if(passLower && passNumbers && passSpecial){
    criteria = lower.concat(numbers,specials);
  }
   //4 confirmed criteria
  else if (passUpper && passLower && passSpecial && passNumbers){
    criteria = upper.concat(lower, numbers, special);
  };

  //variable to use for chosen length
  var total = "";

  // string for criteria 

  upper  = "ABCDEFGHIJKLMNOPQRSTUVWXWYZ";
  lower = "abcdefghijklmnopqrstuvwxyz";
  special =  "!#$%&'()*+,-./:;<=>?@[^_{|}~";
  numerals = "1234567890";
  
  //Variables
  var passLength;
  var passLower;
  var passUpper;
  var passSpecial;
  var passNumbers;
  var criteria;

//create random string from criteria
     for(var i = 0; i < total; i++){
       var randomCriteria = criteria(Math.floor(Math.random() * criteria.length));
       total.push(randomCriteria);
     }
    
  //make array a string
  var word = total.join("");
     passwordText(word);
     return word;
    

  function passwordText(word){document.querySelector("#password").textContent = word;
    }};