function primeCheck(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            console.log("Not Prime")
            break;
        }
        if(i === num-1){
            console.log("prime")
        }
    }
}

primeCheck(131071)