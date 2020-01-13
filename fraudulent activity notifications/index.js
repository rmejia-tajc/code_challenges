// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=sorting&isFullScreen=true


// this code below works but is inefficient!

function activityNotifications(expenditure, d) {

    let notifications = 0

  if(expenditure.length <= d){
      return 0
  }

  for (let i = d; i < expenditure.length; i++) {
        let arr = expenditure.slice(i - d, i)
    let m = median(arr)
    if (m * 2 <= expenditure[i]) {
        notifications++
    }
  }
  return notifications
}

const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = arr.sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};



const test1 = [10, 20, 30, 40, 50];
const test2 = [2, 3, 4, 2, 3, 6, 8, 4, 5];
const test3 = [1, 2, 3, 4, 4];

console.log(activityNotifications(test1, 3)) // 1
console.log(activityNotifications(test2, 5)); // 2
console.log(activityNotifications(test3, 4)); // 0