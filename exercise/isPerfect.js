const isPerfect = n => {

    if (n<2) {
        return false;
    }    

    let dividers = [];
    
    for (let i=n/2; i>=1; i-=1)
    {
        if (n%i===0) {
            dividers.push(i);
        }
    }
    
      
    let sum = 0;
  
    for (let i=0;i<dividers.length;i+=1)
    {
        sum+=dividers[i];
    }

    if (n === sum) {
        return true;
    }

    return false;
}

console.log(isPerfect(0)===false);
console.log(isPerfect(10)===false);
console.log(isPerfect(44)===false);
console.log(isPerfect(6)===true);
console.log(isPerfect(8128)===true);
console.log(isPerfect(12)===false);
console.log(isPerfect(334)===false);
//console.log(isPerfect(137438691328)===true); //too long