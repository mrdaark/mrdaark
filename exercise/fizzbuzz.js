const FizzBuzz = (b,e) => {
    for (let i=b; i<=e; i+=1) {
        let s='';
        if (i%3===0) { s+= 'Fizz'; }
        if (i%5===0) { s+= 'Buzz'; }
        if (s==='') { s+= String(i); }
        console.log(s);
    }
}

FizzBuzz(1,100);
