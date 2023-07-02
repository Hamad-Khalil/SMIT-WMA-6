// Write a js programme to find negative element in a array

let myArray=[1,-2,3,-4,5,-6,7,-8]
function Negative(array){
let Negative= []
for( i=0; i<= array.length; i++){
 if( array[i] <0){
    Negative.push(array[i])
 }
}
 return Negative
}
console.log(Negative(myArray));


