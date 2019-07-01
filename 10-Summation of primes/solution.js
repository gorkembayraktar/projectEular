 

    function summationOfprimes(elem){
        
        const isPrime = (n) => {
            if(n < 2)
                return false;
            for(let i = 2 ; i <= Math.sqrt(n);i++)
                if(n % i == 0) return false;
            return true;
        } 
        
        let sum = 0;
        for(let i = 2; i <= elem;i++){
            if(isPrime(i))
                sum+=i;
        }
        return sum;
       
    

    }

summationOfprimes(10); // 17
summationOfprimes(2000000); /// 142913828922