// 1. Write a js program to read and print elements of array.

// let arr=[1,2,3,4,5,5,5]
// for (let i= 0; i< arr.length; i++){
//     console.log(arr[i]);
// }


// 2. Write a js program to print all negative elements in an array.

// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// for(let i= 0; i<= arr.length; i++){
//    if(arr[i]<0){
//     console.log(arr[i]);
//    }
// }

// 3. Write a js program to find sum of all array elements. 

// let arr=[1,2,3,4]
// let sum=0
// for ( let i=0; i< arr.length; i++){
//     sum= sum + arr[i]
// }
// console.log(sum);

// 4. Write a js program to find maximum and minimum element in an array.
// let arr=[48,125,659,15,56,14,70]
// console.log(Math.max(...arr), "is the maximum number");
// console.log(Math.min(...arr), "is the minimum number");

// 5. Write a js program to find second largest element in an array.
// let arr=[14,49,235,01,24]
// let max=0;
// let secMax=0;
// function findSecLargest(arr){
//     for (let i = 0; i< arr.length; i++) {
//         if (arr[i]>max) {
//             secMax=max
//             max= arr[i]
//         } else if ( arr[i]>secMax){
//             secMax=arr[i]
//         }
//     }
//     return secMax
// }
// console.log(findSecLargest(arr));

// 6. Write a js program to count total number of even and odd elements in an array.
// let arr=[48,125,659,15,56,14,70]
// let totEvenNum=[]
// let totOddNum=[]
// for( let i=0; i<arr.length; i++){

//     if( arr[i]%2 == 0){
//         totEvenNum.push(arr[i])
//     } else { totOddNum.push(arr[i])}
// }
// console.log(totEvenNum.length , 'are even numbers');
// console.log(totOddNum.length , "are odd numbers");


// 7. Write a js program to count total number of negative elements in an array.
// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// let negativeElement=[]
// for (let i = 0; i < arr.length; i++) {
//   if( arr[i]<0){
//     negativeElement.push(arr[i])
//   }
// }
// console.log(negativeElement.length, 'are negative elements');


// 8. Write a js program to copy all elements from an array to another array.
// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// let secArry= arr
// console.log(secArry);


// 9. Write a js program to insert an element in an array.

// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// //  to insert a number in the end of arry
// arr.push(7)
// // to insert a number in the start of arry
// arr.unshift(0)

// console.log(arr);
// 10. Write a js program to delete an element from an array at specified position.
// let arr=[48,125,659,15,56,14,70]
// to delete an element from an arry put index number and number of next element to remove
// arr.splice(1,3)                 //to remove 125, 659, and 15
// console.log(arr);


// 11. Write a js program to count frequency of each element in an array.
// let arr= [1,1,22,3,22,44,44]
// function countFreq(arr){
//     let counter={}
//     for( let i=0; i<arr.length; i++){
//         if(!counter[arr[i]]){
//             counter[arr[i]]=1
//         }else {counter[arr[i]]++}
//     }
//     return counter
// }
// console.log(countFreq(arr));



// 12. Write a js program to print all unique elements in the array.
// let arr=[1,1,2,3,4,4,5,5]
// let uniqueElement= arr.filter(( item, index, array)=>{
//     return arr.indexOf(item)=== index
// })
// console.log(uniqueElement);
// 13. Write a js program to count total number of duplicate elements in an array.
// let arr=[ 1,2,3,4,3,4,3,4,5,5]
// // let array=[1,2,3,4,3,5,4,5,6,7]
// let duplicateValues=0;
// for(let i=0; i<arr.length; i++){
//     if( arr[i]= arr[i]){
//         duplicateValues= arr[i]
//     }
// }
// console.log(duplicateValues);


// 14. Write a js program to delete all duplicate elements from an array.


// 15. Write a js program to merge two array to third array.

// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,10]
// let mergedArr=arr1.concat(arr2)
// console.log(mergedArr);

// 16. Write a js program to find reverse of an array.

// let arr= [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]
// let reverseOfArr= arr.reverse()
// console.log(reverseOfArr);


// 17. Write a js program to put even and odd elements of array in two separate array.
// let arr=[48,125,659,15,56,14,70]
// let totEvenNum=[]
// let totOddNum=[]
// for( let i=0; i<arr.length; i++){

//     if( arr[i]%2 == 0){
//         totEvenNum.push(arr[i])
//     } else { totOddNum.push(arr[i])}
// }
// console.log(totEvenNum, 'are Even numbers in above array');
// console.log(totOddNum, 'are Odd numbers in above array');

// 18. Write a js program to search an element in an array.


// 19. Write a js program to sort array elements in ascending or descending order.

// let arr=[48,125,659,15,56,14,70]
// for ascending order

// for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i <= arr.length + 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//            let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//         }
//     }
// }
// console.log(arr);


// // for descending order

// for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i <= arr.length + 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//            let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//         }
//     }
// }
// console.log(arr);

// 20. Write a js program to sort even and odd elements of array separately.
// let arr=[48,125,659,15,56,14,70]
// let totEvenNum=[]
// let totOddNum=[]
// for( let i=0; i<arr.length; i++){

//     if( arr[i]%2 == 0){
//         totEvenNum.push(arr[i])
//     } else { totOddNum.push(arr[i])}
// }
// console.log(totEvenNum, 'are Even numbers in above array');
// console.log(totOddNum, 'are Odd numbers in above array');
// 21. Write a js program to left rotate an array.

// 22. Write a js program to right rotate an array.

