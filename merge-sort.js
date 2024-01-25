'use strict'
function mergeSort(array) {
  if (array.length < 2) {
    return array; // By definition, a 1 element array is already sorted
  } 
  
  let midPoint = Math.floor((array.length) / 2);
  let leftArray = array.slice(0, midPoint);
  let rightArray = array.slice(midPoint);

  return merge (
    mergeSort(leftArray),
    mergeSort(rightArray)
  );
}

function merge(array1, array2) {
  let i = 0, 
      j = 0,
      k = 0;
  let m = array1.length - 1;
  let n = array2.length - 1;

  const mergedArray = []

  /* as long as i and j are less then the size of array 1 (m)
  and array 2 (n),if the current element of an array is smaller 
  than the one in the same position of the other array, copy it 
  to the sorted array list */ 
  while (i <= m && j <= n) {
    if (array1[i] < array2[j]) {
      mergedArray[k++] = array1[i++];
    } else {
      mergedArray[k++] = array2[j++];
    }
  } 

  /* If one of the arrays runs out of elements, copy the remaining
  elements of the array which still has elements to the sorted array*/
  for (i; i <= m; i++) {
    mergedArray[k++] = array1[i];
  }

  for (j; j <= n; j++) {
    mergedArray[k++] = array2[j];
  }

  return mergedArray;
}


let arr = [6, 1, 23, 54, 34, 21, 1];

console.log(mergeSort(arr))
