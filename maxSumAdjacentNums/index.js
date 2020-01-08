//Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all the numbers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers.

let intArray = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]; // 19

// --------- Naive solution ---------

function solution(array) {
  let maxSum = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxSum) {
      maxSum = array[i];
    }

    let temp = array[i];

    for (let j = i + 1; j < array.length - i + 1; j++) {
      temp = temp + array[j];

      if (temp > maxSum) {
        maxSum = temp;
      }
    }
  }
  return maxSum;
}

console.log(solution(intArray)); // 19

function kadanesAlgo(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    let currentNum = array[i];
    maxEndingHere = Math.max(currentNum, maxEndingHere + currentNum);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

function kadanesAlgo(array) {
  let maxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > 0) {
      array[i] += array[i - 1];
    }
    maxSum = Math.max(maxSum, array[i]);
  }
  return maxSum;
}

function kadanesAlgo(array) {
  let temp = 0;
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    temp += array[i];
    if (temp > max) {
      max = temp;
    } else if (temp < min) {
      min = temp;
      temp = 0;
    }
  }
  return max;
}
kadanesAlgo([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);
