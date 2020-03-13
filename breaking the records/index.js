// https://www.hackerrank.com/challenges/breaking-best-and-worst-records





function breakingRecords(scores){
    let lowRecordCount = 0;
    let highRecordCount = 0;
    let lowRecord = scores[0];
    let highRecord = scores[0];

    for(let i = 1; i < scores.length; i++){
        if (scores[i] < lowRecord){
            scores[i] = lowRecord;
            lowRecordCount++;
        } else if (scores[i] > highRecord){
            scores[i] = highRecord;
            highRecordCount++;
        }
    }
    return [lowRecordCount, highRecordCount];
}





let scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1]