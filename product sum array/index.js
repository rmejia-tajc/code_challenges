// Write a function that takes in a "special" array and turns its product sum. A "special" array is a non empty array that contains either integers or other "special" arrays. The product sum of a "special" array is the sum of its elements where "special" arrays inside it should be summed themselves and then multiplied by their level of depth. For example, the product sum of [x,y] is x + y; the product sum of [x, [y, z]] is x + 2y + 2z.
let sampleArray = [5,2, [7,-1],3, [6, [-13,8],4]]
//Output: 12
function productSum(array, depth) {
  let output = 0;
  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      console.log("productSum", productSum(array[i], depth + 1))
      output += productSum(array[i], depth + 1);
      console.log("output =", output)
    } else {
      output += array[i];
      console.log("output =", output)
    }
  }
  return depth * output
}
console.log(productSum(sampleArray, 1))