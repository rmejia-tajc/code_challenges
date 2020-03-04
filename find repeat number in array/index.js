  
 //Write a function that finds a single number that is repeated in an array, in this case, we are wanting to return 12. 
 
 let stuff = [1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15,16,17,18,19,20];      


 function findRepeat(numbers) {
 
}

console.log(findRepeat(stuff))






// function findRepeat(numbers) {
//     if (numbers.length < 2) {
//         return 'Two number requirement not met'
//     }
    
//    let nums = {}
//    for (let i of numbers)  { 
//      // nums[i] = (nums[i] || 0) + 1;
//      if (nums[i]) {
//        return i
//      }
//       else nums[i] = 1;
//    }
//   console.log(nums)
//   }
//   console.log(findRepeat(stuff))




// function findRepeat(numbers) {
//     if (numbers.length < 2) {
//         return 'Two number requirement not met'
//     }
    
//    let numsMap = new Map()
//    for (let num of numbers)  { 
//      // nums[i] = (nums[i] || 0) + 1;
//      if (numsMap.has(num)) {
//        return num
//      }
//       else numsMap.set(num,1)
//    }
//   }
//   console.log(findRepeat(stuff))