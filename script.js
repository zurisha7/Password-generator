  // array for criteria 

var upper  =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["!","#","$","%","&","(","*","+","-","/",":",";","<","=",">","?","@","[","^","_","{","}","~",";"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  
var passwordPrint = document.getElementById("password");


//funtion to create click to start
var generateBtn = document.querySelector("#generate");

  generateBtn.addEventListener("click", function(){
      criteriaAsk();
      
   });

  
//functions to create password      

 var criteriaAsk = function() {
var passUpper = confirm("Would you like to include uppercase letters? Please click ok for yes!");
       
var passLower = confirm("Would you like to include lowercase letters? Please click ok for yes!");
          
      
var passSpecial = confirm("Would you like  to include special characters? Please click ok for yes!");
      

var passNumbers = confirm("Would you like to include numbers? Please click ok for yes!");
 

 //make sure at least one criteria is met
 if (passUpper === false && passLower === false && passSpecial === false && passNumbers === false) {
        alert("Password must have at least one criteria!!");
        return criteriaAsk();
      }
  //what to do with one criteria confirmed
  if (passUpper === true && passLower === false && passSpecial === false && passNumbers  === false){
    var criteria = upper;
  }
  if(passUpper === false && passLower === true && passSpecial === false && passNumbers === false){
    var criteria = lower;
  }
  if(passUpper === false && passLower === false && passSpecial === true && passNumbers === false){
    var criteria = special;
  }
  if(passUpper === false && passLower === false && passSpecial === false && passNumbers === true) {
    var criteria = numbers;
  }
 // two confirmed criterias
if(passUpper === true && passLower === true && passSpecial && passNumbers) {
    var criteria = upper.concat(lower);
  }
   if(passUpper === true && passSpecial === true && passLower === false && passNumbers === false){
    var criteria = upper.concat(special);
  }
   if(passUpper=== true && passNumbers === true  && passSpecial === false && passLower === false){
    var criteria = upper.concat(numbers);
  }
   if(passLower === true && passSpecial === true && passUpper === false && passNumbers === false ){
    var criteria = lower.concat(special);
  }
   if(passLower === true && passNumbers === true && passUpper === false && passSpecial === false){
    var criteria = lower.concat(numbers);
  }
   if(passSpecial === true && passNumbers === true && passUpper === false && passLower === false ){
    var criteria = special.concat(numbers);
  }
  if(passUpper === true && passLower === true && passSpecial && passNumbers) {
    var criteria = upper.concat(lower);
  // three criteria confirmed
   if(passUpper === true && passLower === true && passNumbers === true && passSpecial === false){
    var criteria = upper.concat(lower, numbers);
  }
   if(passUpper === true && passLower === true && passSpecial === true && passNumbers === false){
    var criteria = upper.concat(lower, special);
  }
 if(passUpper === true && passNumbers === true && passSpecial === true && passLower === false){
   var criteria = upper.concat(numbers, special);
  }
  if(passLower === true && passNumbers === true && passSpecial === true && passUpper === false){
    var criteria = lower.concat(numbers, special);
  }
   //4 confirmed criteria
  if (passUpper === true && passLower === true && passSpecial === true && passNumbers === true){
    var criteria = upper.concat(lower, numbers, special);
  }
console.log(criteria)

  var passText = parseInt(prompt("How many characters would you like to include in your password? Please choose a number between 8 and 128."));
 // make sure number is between 8 and 128
  if (passText < 8 || passText > 128)  {
   alert("Password must be between 8 and 128. Please choose again");
 }//make sure there is a number given
  if
   (passText === NaN || passText === null) {
     alert("Please provide a number!")
     return criteriaAsk;
      
   }
 console.log(passText)
   
 var passArray = [];
  //create random string from criteria
  for (var i = 0; i < passText; i++){

      var password = criteria[Math.floor(Math.random() * criteria.length)];
     passArray.push(password);
      console.log(password);
  }
  
      passwordPrint.textContent = passArray.join('');
   };  
    
