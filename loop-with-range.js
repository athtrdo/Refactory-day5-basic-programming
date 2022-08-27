const loopRange = (a,b) =>{
    
    let range = [];
    for (let i = a; i <= b; i++){
        range.push(i);
    }
    return range;
};

console.log(loopRange(4,8));
