function sumSquareDiffrence(xtoY){

    let squareSum  = ((xtoY * (xtoY +1) ) / 2) ** 2;
    let sumofthesquares = [...Array.from({length:xtoY},(y,k)=>k+1)]
                            .map(num => num ** 2)
                            .reduce((a,b)=>a+b);
                            
    return squareSum - sumofthesquares;                        
}

sumSquareDiffrence(20);