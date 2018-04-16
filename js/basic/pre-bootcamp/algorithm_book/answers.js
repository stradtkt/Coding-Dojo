// setting and swapping
    //set myNumber to 42
    //set myName to your name
      //now swap myNumber into myName & vice versa
function swap() {
  var myNumber = 42;
  var myName = "Kevin";
  var temp = myNumber;
  myNumber = myName;

  console.log('My number is now ' + myNumber);
  console.log('My name is now ' + temp);
}
swap();


// print -52 to 1066
    //print integers from -52 to 1066 using a for loop

    function forLoop() {
      var start = -52;
      for(var i = start; i < 1067; i++) {
        console.log(i);
      }
    }
    // forLoop();


//Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log
//string "good morning!" Call it 98 times

function beCheerful() {
  for(var i =0; i < 98; i++) {
    console.log("good morning!");
  }
}
beCheerful();

/* Multiples of Three – but Not All
Using FOR, print multiples of 3 from -300 to 0.
Skip -3 and -6.
*/

function skipNumbers() {
  var max = 3, min = -300;
  for(var i = max; i >= min; i = i - 3) {
    if(i == -3 || i == -6) {
      continue;
    }
    console.log(i);
  }
}
// skipNumbers();


/*
Printing Integers with While
Print integers from 2000 to 5280, using a WHILE
*/

function whileLoop() {
  var start = 1999;
  while(start < 5280) {
    start++;
    console.log(start);
  }
}
// whileLoop();


/*
You Say It’s Your Birthday
If 2 given numbers represent your birth month
and day in either order, log "How did you
know?", else log "Just another day...."
*/

function birthday() {
    var today = new Date();
    var nowYear = today.getFullYear();
    var nowMonth = today.getMonth();
    var nowDay = today.getDate();
    
    var birth = prompt("When were you born?", "YYYY-MM-DD");
    var birth = new  Date(parseInt(birth.substring(0,4)),parseInt(birth.substring(5,7))-1,parseInt(birth.substring(8,10)));
    
    var birthYear = birth.getFullYear();
    var birthMonth = birth.getMonth();
    var birthDay = birth.getDate();
    
    var compBirth = birthMonth.toString() + birthDay.toString();
    var compToday = nowMonth.toString() + nowDay.toString();
    
    
    if( compBirth == compToday) {
      alert('Happy Birthday!');  
    } else if ( compBirth > compToday){
      alert('Your birthday is comming!');  
    } else {
      alert('Happy b-lated day!');  
    }
      
  }
  // birthday();

/*
Leap Year
Write a function that determines whether a given
year is a leap year. If a year is divisible by four,
it is a leap year, unless it is divisible by 100.
However, if it is divisible by 400, then it is.
*/


function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
leapYear();


/**
 * Print and Count
Print all integer multiples of 5, from 512 to 4096.
Afterward, also log how many there were.
 */

var myFunctionCalls = 0
function multiplesOfFive() {
  var  start = 512, end = 4096;
  for(var i = start;  i <= end; i = i + 5) {
    myFunctionCalls++;
    console.log(i);
  }
  alert(myFunctionCalls);
}
multiplesOfFive();



 /*
 Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE.
 */

 function whileLoop() {

 }



 /*
 Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print
"Coding" instead. If by 10, also print " Dojo".
 */




/*
What Do You Know?
Your function will be given an input parameter
incoming. Please console.log this value.
*/


/*
Whoa, That Sucker’s Huge…
Add odd integers from -300,000 to 300,000, and
console.log the final sum. Is there a shortcut?
*/




/*
Countdown by Fours
Log positive numbers starting at 2016, counting
down by fours (exclude 0), without a FOR loop.
*/



/*
Flexible Countdown
Based on earlier “Countdown by Fours”, given
lowNum, highNum, mult, print multiples of mult
from highNum down to lowNum, using a FOR.
For (2,9,3), print 9 6 3 (on successive lines)
*/


/*
The Final Countdown
This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
print the multiples of param1, starting at param2 and extending to param3. One exception: if a
multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
*/



