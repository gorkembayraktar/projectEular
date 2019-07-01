function largestPrimeFactor(num){
    let enBuyukBolen = 0;
    let bolen = 2;
    while(num > 1){
        if(num % bolen == 0 ){
            num = num / bolen;
            if(bolen > enBuyukBolen){
                enBuyukBolen = bolen;
            }
            bolen = 2;
        }else{
            bolen++;
        }
    }
    return enBuyukBolen;
}
largestPrimeFactor(10); // 2 * 5 => 5
largestPrimeFactor(600851475143) // 6857