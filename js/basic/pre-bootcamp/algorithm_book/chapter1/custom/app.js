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