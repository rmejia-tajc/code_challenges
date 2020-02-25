// https://www.hackerrank.com/challenges/kangaroo

// function kangaroo(x1, v1, x2, v2) {
//     let k1spot = x1;
//     let k2spot = x2;
//     let initialDistance = x2 - x1;

//     while (k1spot != k2spot || k1spot < k2spot){
//         k1spot = k1spot + v1;
//         k2spot = k2spot + v2;
//         console.log("k1", k1spot);
//         console.log("k2", k2spot);
//         if (k2spot - k1spot > initialDistance){
//             break
//         }
//     }
//     if (k1spot === k2spot){
//         return "YES"
//     } else {
//         return "NO"
//     }    
// }


// console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(0, 2, 5, 3));


function kangaroo(x1, v1, x2, v2) {
    
    // let k1 = x1 - x1;
    // console.log("k1", k1);
    // let k2 = x2 - x1;
    // console.log("k2", k2);

    if ((x1 - x2) % (v2 - v1) == 0){
        return "YES"
    }

    return "NO"    
    
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(10, 3, 20, 2)); // 0, 3, 10, 2
console.log(kangaroo(5, 3, 20, 2));



// x1 + y * v1 = x2 + y * v2

// (x1 - x2) % (v2 - v1) == 0

// y is number of jumps