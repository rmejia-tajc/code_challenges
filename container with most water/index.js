


var maxArea = function(height) {    
    
    let maxArea = 0
    
    for (let i = 0; i < height.length; i++){
        for (let j = i+1; j < height.length - i+1; j++){
            
            let shortest = 0
            
            if (height[i] <= height[j]){
                shortest = height[i]            
            } else {
                shortest = height[j]
            }
            
            let length = j-i
            let newArea = shortest*length
            
            if (newArea > maxArea){
                maxArea = newArea
            }
            
        }
    }
    return maxArea
    
};


// function maxArea(A) {
// 	let start = 0;
// 	let end = A.length - 1;
// 	let area = 0;
	
// 	while (start < end) {
// 		// find the max area -> find the area of the rectangle
// 		area = Math.max(area, Math.min(A[start], A[end]) * (end - start));
		
// 		// move the shorter pointer
// 		A[start] < A[end] ? start++ : end--;
// 	}
	
// 	return area;
// }