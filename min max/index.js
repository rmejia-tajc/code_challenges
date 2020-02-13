// https://www.hackerrank.com/challenges/mini-max-sum



function miniMaxSum(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });

  let max = 0 - arr[0];
  let min = 0 - arr[4];
  for (let i = 0; i < arr.length; i++) {
    min += arr[i];
    max += arr[i];
  }

  console.log(`${min} ${max}`);
}
