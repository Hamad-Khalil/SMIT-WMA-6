// js code to count negative number in an array

let number=[1,-2,3,-4,5,-6,7,-8,9,-10]
let negativeNum=number.filter(element => element < 0)
console.log(negativeNum.length);