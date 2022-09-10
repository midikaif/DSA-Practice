function isPrime(x){
    for(let i = 2; i<x; i++){
        if(x%2 === 0){
            return false;
        }
    }
    return true;
}

function noPrime(x){
    let prime = true;
    for(let i = 2; i<x; i++){
        if(x%2 === 0){
            prime = false;
        }
    }
    for(let i = 2; i<=x; i++){
        if(isPrime(i) === true){
            console.log(i);
        }
    }
}

noPrime(10);