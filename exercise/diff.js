const diff = (a,b) => {
    if (a===b) {
        return 0;
    }
    
    if (a>b) {
        b = [a, a = b][0];
    }
    
    if (b-a < 360-b+a)
    {
        return b-a;
    }

    return 360-b+a;
}

//tests
console.log(diff(0,45)===45);
console.log(diff(180,0)===180);
console.log(diff(0,190)===170);
console.log(diff(120,280)===160);