// https://www.hackerrank.com/challenges/breaking-best-and-worst-records





function breakingRecords(scores){
    let lowRecordCount = 0;
    let highRecordCount = 0;
    let lowRecord = scores[0];
    let highRecord = scores[0];

    for(let i = 1; i < scores.length; i++){
        console.log("PASS:", i)
        if (scores[i] < lowRecord){
            lowRecord = scores[i];
            lowRecordCount++;
            console.log("lowRecordCount:", lowRecordCount);
            console.log("lowRecord:", lowRecord);
        }
        if (scores[i] > highRecord){
            highRecord = scores[i];
            highRecordCount++;
            console.log("highRecordCount:", highRecordCount);
            console.log("highRecord:", highRecord);
        }
    }
    return [highRecordCount, lowRecordCount];
}





let scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1]

console.log(breakingRecords(scores1))