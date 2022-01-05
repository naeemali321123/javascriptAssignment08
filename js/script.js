// CLEAR RESULT-SCREEN FUNCTIONS
function q01ClearResultScreen() { document.getElementById("q01ResultScreen").innerHTML = " "; }

function q02ClearResultScreen() { document.getElementById("q02ResultScreen").innerHTML = " "; }

function q03ClearResultScreen() { document.getElementById("q03ResultScreen").innerHTML = "Result Screen "; }

function q04ClearResultScreen() { document.getElementById("q04ResultScreen").innerHTML = "Result Screen "; }

function q05ClearResultScreen() { document.getElementById("q05ResultScreen").innerHTML = "Result Screen "; }

function q06ClearResultScreen() { document.getElementById("q06ResultScreen").innerHTML = "Result Screen "; }

function q07ClearResultScreen() { document.getElementById("q07ResultScreen").innerHTML = "Result Screen "; }

function q08ClearResultScreen() { document.getElementById("q08ResultScreen").innerHTML = "Result Screen "; }

function q09ClearResultScreen() { document.getElementById("q09ResultScreen").innerHTML = "Result Screen "; }

function q10ClearResultScreen() { document.getElementById("q10ResultScreen").innerHTML = "Result Screen "; }

function q11ClearResultScreen() { document.getElementById("q11ResultScreen").innerHTML = "Result Screen "; }

function q12ClearResultScreen() { document.getElementById("q12ResultScreen").innerHTML = "Result Screen "; }

function q13ClearResultScreen() { document.getElementById("q13ResultScreen").innerHTML = "Result Screen "; }

function q14ClearResultScreen() { document.getElementById("q14ResultScreen").innerHTML = "Result Screen "; }

function q15ClearResultScreen() { document.getElementById("q15ResultScreen").innerHTML = "Result Screen "; }

function q16ClearResultScreen() { document.getElementById("q16ResultScreen").innerHTML = "Result Screen "; }

function q17ClearResultScreen() { document.getElementById("q17ResultScreen").innerHTML = "Result Screen "; }

function q18ClearResultScreen() { document.getElementById("q18ResultScreen").innerHTML = "Result Screen "; }

function q19ClearResultScreen() { document.getElementById("q19ResultScreen").innerHTML = "Result Screen "; }

function q20ClearResultScreen() { document.getElementById("q20ResultScreen").innerHTML = "Result Screen "; }

function q21ClearResultScreen() { document.getElementById("q21ResultScreen").innerHTML = "Result Screen "; }

function q22ClearResultScreen() { document.getElementById("q22ResultScreen").innerHTML = "Result Screen "; }

function q23ClearResultScreen() { document.getElementById("q23ResultScreen").innerHTML = "Result Screen "; }

function q24ClearResultScreen() { document.getElementById("q24ResultScreen").innerHTML = "Result Screen "; }

function q25ClearResultScreen() { document.getElementById("q25ResultScreen").innerHTML = "Result Screen "; }

function q26ClearResultScreen() { document.getElementById("q26ResultScreen").innerHTML = "Result Screen "; }

function q27ClearResultScreen() { document.getElementById("q27ResultScreen").innerHTML = "Result Screen "; }

function q28ClearResultScreen() { document.getElementById("q28ResultScreen").innerHTML = "Result Screen "; }

function q29ClearResultScreen() { document.getElementById("q29ResultScreen").innerHTML = "Result Screen "; }

function q30ClearResultScreen() { document.getElementById("q30ResultScreen").innerHTML = "Result Screen "; }


// 01. Write a JavaScript function to check whether an `input` is a date object or not.
function checkDateObject() {
    var is_date = function(input) {
        if ( Object.prototype.toString.call(input) === "[object Date]" ) 
          return true;
        return false;   
          };
      
      console.log(is_date("October 13, 2014 11:13:00"));
      console.log(is_date(new Date(86400000)));
      console.log(is_date(new Date(99,5,24,11,33,30,0)));
      console.log(is_date([1, 2, 4, 0]));
      
    document.getElementById("q01ResultScreen").innerHTML = currentDate;
}
//  2. Write a JavaScript function to get the current date.   
// Note : Pass a separator as an argument.

function dateInSeparatorAsAnArgument() {
    // var currentDate = new Date()
    currentDate = new Date('/');

    document.getElementById("q02ResultScreen").innerHTML = currentDate
}
var is_date = function(input) {
    userInput = input
    if ( Object.prototype.toString.call(input) === "[object Date]" ) 
      return true;
    return false;   
      };
  
  console.log(is_date("October 13, 2014 11:13:00"),userInput);
  console.log(is_date(new Date(86400000)),userInput);
  console.log(is_date(new Date(99,5,24,11,33,30,0)),userInput);
  console.log(is_date([1, 2, 4, 0]),userInput);
  