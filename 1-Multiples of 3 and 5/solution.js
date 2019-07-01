function sumOfAll3and5(num){
    return (
        [...Array.from({length:num},(v,k)=>k+1)]
        .map(n => n % 3 == 0 || n % 5 == 0))
        .reduce((a,b)=>a+b);
}

console.log(sumOfAll3and5(1000));