// https://leetcode.com/problems/daily-temperatures/


var dailyTemperatures = function(T) {
    
    let waitList = [];
    let warmer = true;
    let upNext = 0;
    
    for (let i = 0; i < T.length; i++){        
        if (warmer){            
            upNext = 1        
            for (let j = i+1; j < T.length - j; j++){
                if (T[i] <= T[j]){
                    upNext++;
                } else {
                    waitList.push(upNext);
                    break
                }
                if (upNext === T.length - j){
                    warmer = false;
                }                
                waitList.push(upNext);
            }        
        } else {
            waitList.push(0);
        }  
    }    
    return waitList    
};


let T = [73,74,75,71,69,72,76,73];

console.log(dailyTemperatures(T)) // [1,1,4,2,1,1,0,0]