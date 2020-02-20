// https://www.hackerrank.com/challenges/birthday-cake-candles

function birthdayCakeCandles(ar) {
  let count = 0;
  let tallest = 0;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === tallest) {
      count++;
    }
    if (ar[i] > tallest) {
      tallest = ar[i];
      count = 1;
    }
  }

  return count;
}