// Write js code to find second largest element in an array

function findseclargest( array){
    let largest=-1;
    let seclargest= -1;
    for( let i=0; i<array.lenght; i++){
        if( array[i] > largest){
          seclargest= largest;
          largest= array[i]
        } else if( array[i] > seclargest){
            seclargest= array[i]
        }
    }
    return seclargest;
 }
 let array = [27,59,15,38,14,60]
 let secondLargest= findseclargest(array)
 console.log(secondLargest)

// function findSecondLargestNumber(arr) {
//     let largest = arr[0];
//     let secondLargest = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//       }
//     }
  
//     return secondLargest;
//   }
//   const arr = [3, 8, 1, 6, 2, 8, 2];
// const secondLargest = findSecondLargestNumber(arr);
// console.log(secondLargest); // Output: 6
