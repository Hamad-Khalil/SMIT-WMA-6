// Write a js program to count total number of even and odd elements in
// an array.


let numbers=[1,2,3,4,5,6,7,8,9,10];
let evenNum=[];
let oddNum=[]
numbers.forEach(sepEvenOdd)
function sepEvenOdd(num){
    if( num % 2===0){
        evenNum.push(num)
    } else if( num % 2 != 0){
        oddNum.push(num)
    }
}
console.log(evenNum.length);
console.log(oddNum.length);