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


  /**
   * Change the last item in the array
   */
  function lastItemChanged(array) {
    
  }