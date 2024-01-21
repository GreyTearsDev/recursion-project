'use strict'

// Iterative approach 
function fibs(n) {
  const fibNumbers = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      fibNumbers.push(i);
    } else {
      fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }
  }
  return fibNumbers
}


// Recursive Approach

/*function fibsRec(n, current = 0, next = 1) {
  if (n === 0) return current;

  return fibsRec(n-1, next, current + next);
} */

console.log(fibsRec(8))

function fibsRec(n, currentFiboNum = 0, nextFiboNum = 1, results = []) {
  if (n === 0) {
    results.push(currentFiboNum);
    return results;
  }

  results.push(currentFiboNum);
  return fibsRec(n - 1, nextFiboNum, currentFiboNum + nextFiboNum, results);
}
