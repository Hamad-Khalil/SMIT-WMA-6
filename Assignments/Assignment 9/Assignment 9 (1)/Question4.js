function power(base , exponent){
    let result= 1;
    if(exponent === undefined){
        exponent=2;
    }
    for(let i=1; i<=exponent; i++){
        result= result * base
    }
    return  result;
}
console.log(power(2,3))