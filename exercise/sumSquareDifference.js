const sumOfSquares = n => {
    let res = 0;
    for (let i=1; i<=n; i+=1) {
        res += i*i;
    }
    return res;
}

const sumSquare = n => {
    let res = 0;
    for (let i=1; i<=n; i+=1) {
        res += i;
    }
    return res*res;
}


const sumSquareDifference = n => {
    let res = sumSquare(n) - sumOfSquares(n);
    return res > 0 ? res:-res;
}

console.log(sumSquareDifference(10));