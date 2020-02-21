var dailyTemperatures = function(T) {
    let arr = []; // to store the days
    for(i=0; i<T.length;i++){ // loop though all the temps
        for(j=i+1;j<T.length;j++){ // check until future temps
            if(T[i] < T[j]) { //when temp rises, push it and break
                arr.push(j-i)
                break;
            }
            if(j==T.length-1){ // if it doesn't rise, push 0
                arr.push(0);
            }
        }
    }
    arr.push(0); // for the last temperature, since it will never rise
    return arr;
}

let T = [73,74,75,71,69,72,76,73];

console.log(dailyTemperatures(T)) // [1,1,4,2,1,1,0,0]