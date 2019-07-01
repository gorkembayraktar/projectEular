function smallestMultiple(x){
    let num = x;
    let state = !1;
    while(true){
        state = !0;
        for(let i = x; i > 1;i-- ){
            if(num % i != 0){
                state = !1;
                num++;
                break;
            }
        }
        if(state)
            break;

    }
    return num;
}

smallestMultiple(20);
