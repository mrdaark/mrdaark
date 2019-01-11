const reverseInt = n => {
    let str = (n<0) ? String(-n):String(n);
    let res = (n<0) ? '-':'';
    for (let i=str.length-1; i>=0;i-=1)
    {
        res+=str[i];
    }
    return res;
}

//export default reverseInt;

console.log(reverseInt(12345));
console.log(reverseInt(-54321));