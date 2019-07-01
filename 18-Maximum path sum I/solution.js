function    maximumpathSumI(triacle){
    
    let sum = 0;
    let backref = 0;

    for(let i = 0 ; i < triacle.length;i++){

        if(triacle[i].length === 1){
            sum += triacle[i][backref];
            continue;
        }

        
        if(triacle[i][backref] > triacle[i][backref+1]){
            sum += triacle[i][backref];
            
        }else if(triacle[i][backref + 1] > triacle[i][backref]){
            sum += triacle[i][backref + 1];
            backref++;
        }
    
        

        
    }
    
    return sum;

}


let exam = [
    [3],
	[7,4],
	[2,4,6],
	[8,5,9,3]
];


maximumpathSumI(exam);