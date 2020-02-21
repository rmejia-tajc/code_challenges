// https://www.hackerrank.com/challenges/kangaroo

function kangaroo(x1, v1, x2, v2) {
    let k1spot = x1;
    let k2spot = x2;
    let initialDistance = x2 - x1;

    while (k1spot != k2spot || k1spot < k2spot){
        k1spot = k1spot + v1;
        k2spot = k2spot + v2;
        if (k2spot - k1spot > initialDistance){
            break
        }
    }
    if (k1spot === k2spot){
        console.log("YES");
    } else {
        console.log("NO");
    }    
}


// console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));