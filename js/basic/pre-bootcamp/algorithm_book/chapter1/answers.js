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
// swap();


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
// beCheerful();

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
// multiplesOfFive();



 /*
 Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE.
 */

 function whileLoopSix() {
   var start = 0;
  while(start < 60000) {
    start+=6;
    console.log(start);
  }
 }
//  whileLoopSix();




 /*
 Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print
"Coding" instead. If by 10, also print " Dojo".
 */

 function countingDojoWay() {
   for(var i = 1; i <= 100; i++) {
     if(i % 5 ==0) {
       console.log('Coding');
     }
     if(i % 10 ==0) {
       console.log(' Dojo');
     }
     console.log(i);
   } 
 }
//  countingDojoWay();



/*
What Do You Know?
Your function will be given an input parameter
incoming. Please console.log this value.
*/


function inputParameter(age) {
  age = prompt('What is your age?');

  document.write('<h1>You are '+ age+ ' years old!</h1>');
}
// inputParameter();

/*
Whoa, That Sucker’s Huge…
Add odd integers from -300,000 to 300,000, and
console.log the final sum. Is there a shortcut?
*/

function suckerHuge() {
  var sum = 0, start = -300000, end = 300000;
  for(var i = start; i < end; i++) {
    if(i % 2 == 0) {
      continue;
    }
    sum += i;
    console.log(sum);
  }
}
// suckerHuge();


/*
Countdown by Fours
Log positive numbers starting at 2016, counting
down by fours (exclude 0), without a FOR loop.
*/
function whileCountDown() {
  var start = 2020;
  while(start > 4) {
    if(start % 4 == 0) {
      start -= 4;
      console.log(start);
    }
  }
}
// whileCountDown();



/*
Flexible Countdown
Based on earlier “Countdown by Fours”, given
lowNum, highNum, mult, print multiples of mult
from highNum down to lowNum, using a FOR.
For (2,9,3), print 9 6 3 (on successive lines)
*/

function flexibleCountDown(lowNum, highNum, mult) {
  var num = highNum;
  while(num > lowNum) {
    console.log(num);
    num -= mult;
  }
}
// flexibleCountDown(0, 2016, 4);


/*
The Final Countdown
This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
print the multiples of param1, starting at param2 and extending to param3. One exception: if a
multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
*/
function theFinalCountDown(mult, lowNum, highNum, skip) {
  var num = lowNum;
  while(num < highNum) {
    if(num % mult == 0 && num != skip) {
      console.log(num);
    }
    num++;
  }
}
// theFinalCountDown(3,5,17,9);
  
  
/*
Countdown
Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
*/

function countdownInput(number) {
  var array = [];
  for(var i = number; i >= 0; i--) {
    array.push(i);
  }
  console.log(array.length);
  return array;
}
// countdownInput(30);


/*
Print and Return
Your function will receive an array with two numbers. Print the first value, and return the second.
*/

function printAndReturnTwoNumbers(num1, num2) {
  console.log(num1);
  return num2;
}
// printAndReturnTwoNumbers(22, 2);

/*
First Plus Length
Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
*/

function firstPlusLength(array) {
  return array[0] + array.length;
}

console.log(firstPlusLength([20,22,23,24,25])); //returns 25
console.log(firstPlusLength(["what?", 1,2,3,4])); //returns what?5
console.log(firstPlusLength([false, 1,2,3,4,5])); //returns 5

/*
Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
*/

function valuesGreaterThanTheSecond(array) {
  var count = 0;
  for(var i = 0; i < array.length; i++) {
    if(array[i] > array[1]) {
      console.log(array[i]);
      count++;
    }
    console.log("Count is: " + count);
  }
}
// valuesGreaterThanTheSecond([1,3,5,7,9,13]);
//count ends up being 4 

/*
Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the array values that are greater
than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
*/

function valuesGreaterThanTheSecondGeneralized(array) {
  var count = 0;
  var array2 = [];
  if(array.length < 2) {
    console.log('There is not enough in the array for this function to work on it');
  }
  for(var i = 0; i < array.length; i++) {
    if(array[i] > array[1]) {
      array2.push(array[i]);
      count++;
    }
  }
  console.log("Count is: " + count);
  console.log(array2);
  return array2;
}
// valuesGreaterThanTheSecondGeneralized([1,3,5,7,9,13]);
// valuesGreaterThanTheSecondGeneralized([1]);


/*
This Length, That Value
Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
*/


/*
Fit the First Value
Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
*/

/*
Fahrenheit to Celsius
Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed
in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
*/




/*
Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns
the equivalent temperature expressed in Fahrenheit degrees.
(optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be
complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward
(descending), checking whether it is equal to the corresponding Fahrenheit value.
*/