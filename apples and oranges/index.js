// https://www.hackerrank.com/challenges/apple-and-orange



function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let appleCount = 0;

    for (let i = 0; i < apples.length; i++){
        let fallSpot = a + apples[i];
        if (s <= fallSpot && fallSpot <= t){
            appleCount++;
        }
    }

    let orangeCount = 0;

    for (let i = 0; i < oranges.length; i++){
        let fallSpot = b + oranges[i];
        if (s <= fallSpot && fallSpot <= t){
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}