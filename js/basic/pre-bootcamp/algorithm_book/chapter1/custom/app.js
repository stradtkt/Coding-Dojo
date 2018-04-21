/**
 * Use a for loop to find all the evens in the range
 * Loop though 0 through 50
 * return the sum of all the even numbers
 */

 function findEvens() {
   var sum = 0;
  for(var i = 0; i <= 50; i++) {
    if(i % 2 === 0) {
      sum+=i;
    }
  }
  console.log(sum);
  return sum;
 }
//  findEvens();


 /**
  * Do the same as above but log all the even numbers
  */

  function logEven() {
    for(var i = 0; i <= 50; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }
  // logEven();


/**
 * Find the sum of all the odd numbers
 * Return the sum and console.log(sum)
 * go from 1 to 51
 */

function sumOfOddNumbers() {
  var sum = 0;
  for(var i = 1; i < 52; i++) {
    if(i % 2 == 1) {
      sum+=i
    }
  }
  console.log(sum);
  return sum;
}
// sumOfOddNumbers();

/**
 * Now console.log(i) to show all of the odd numbers
 */

 function logOddNumbers() {
   for(var i = 1; i < 52; i++) {
     if(i % 2 == 1) {
       console.log(i);
     }
   }
 }
//  logOddNumbers();

 /**
  * Find all of the numbers that are divisible by 3
  * loop 1 through 30
  */

  function divisibleByThree() {
    for(var i = 0; i < 31; i++) {
      if(i % 3 === 0) {
        console.log(i);
      }
    }
  }
  // divisibleByThree();

  /**
   * Find the sum of all the numbers that are divisible by three
   */

   function sumDivisibleByThree() {
    var sum = 0; 
    for(var i = 1; i < 31; i++) {
       if(i % 3 === 0) {
         sum+=i;
       }
     }
     console.log(sum);
     return sum;
   }
   sumDivisibleByThree();

/**
 * Given an array that is passed in find the values that are greater than the third position in an array
 * if there are not enough items in the array print out a message saying there are not enough items to test
 * for the items that you find print another array out
 */

 function printNumbersGreaterThanTheThird(array) {
   var newArray = [];
   if(array.length < 3) {
     console.log("There are not enough items in the array");
   }
   for(var i = 0; i < array.length; i++) {
    if(array[i] > array[2]) {
      newArray.push(array[i]);
    }
   }
   console.log(newArray);
   return newArray;
 }
 printNumbersGreaterThanTheThird([1,2,3,4,5,6,7,8,9]);


 /**
  * Write a function that takes in an initial array and then flips it around
  * this will make a new array in the end
  */

  function flipArray(arr) {
    var arr2 = [];

    for(var i = arr.length - 1; i >= 0; i--) {
      arr2.push(arr[i]);
    }
    console.log(arr2);
    return arr2;
  }
  flipArray([1,2,3,1,2,3]);


function reversalString(str) {
//1
// return str.split('').reverse().join('');
//2
  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString += str[i];
  // }
  // console.log(revString);
  // return revString;

//3
  // let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // console.log(revString);
  // return revString;

//4
  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // console.log(revString);
  // return revString;

//5
  // let revString = '';
  // str.split('').forEach((char) => revString = char + revString);
  // console.log(revString);
  // return revString;

//6
// return str.split('').reduce(function(revString, char) {
//   console.log(char + revString);
//   return char + revString;
// }, '');

//7 
  return str.split('').reduce((revString, char) => char + revString, '');
}
console.log(reversalString("Hello, my name is Kevin!"));


//check if it is a palindrome
function isPalidrome(str) {
  const revString = str.split('').reverse().join('');
  return revString === str;
}
console.log(isPalidrome("racecar"));
console.log(isPalidrome("Kevin"));


//reverse a int
function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}
console.log(reverseInt(-12345));


//capitalize letters 
function capitalizeLetters(str) {
//1
  // const strArr = str.toLowerCase().split(' ');

  // for(let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ');
//2 
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');
//3
  // return str.replace(/\b[a-z]/gi, function(char) {
  //   return char.toUpperCase();
  // });
}

console.log(capitalizeLetters('i love javascript'));


function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for(let char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxCharacter('JavaScriptttttt'));

function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    if(i % 15 === 0) {
      console.log('FizzBuzz');
    } else if(i % 3 === 0) {
      console.log('Fizz');
    } else if(i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();