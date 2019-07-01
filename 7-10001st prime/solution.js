 

    function primeNumst(elem){
        
        const isPrime = (n) => {
            if(n < 2)
                return false;
            for(let i = 2 ; i <= Math.sqrt(n);i++)
                if(n % i == 0) return false;
            return true;
        } 
        
        let i = 2;

        while(true){
            if(isPrime(i)) elem--;
            if(elem == 0)
                return i;
            i++;

        }


    }

    primeNumst(6); // 13
primeNumst(10001); /// 104743