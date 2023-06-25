let array=[1,29811,3,239,4,5,3923,6,7,9]
let largestNumber= array[0]
for(let i= 0; i<array.length; i++){
    if(array[i] >largestNumber){
        largestNumber= array[i]
    }
}
console.log(largestNumber);
