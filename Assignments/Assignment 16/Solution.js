// // 1. Create a function named greet() that takes one argument, fullName .
// //     That argument should be an array. Output the items of the array into
// //     the console interpolated into a greeting message string.
// function greeting(fullName){
//     console.log(`Hello ${fullName}`);
// }
  
// // 2. Create a second function that has two arguments: the first one is a
// // string for the user's full name, and the second is the callback
// // function.
// function secFunc(userFN, callback){

//     // 3. Split the string into an array using the split() method.
//     let str= userFN.split()

//     // 4. Send the full-name array to the greet() function created in the first
//     // step.
//     callback(str)
// }

// // 5. Invoke the process of the callback function
// secFunc('Hamad', greeting)   // Output       Hello Hamad





// // 2. Set up the next function in the Promise with four then() instances,
// //     which should output a value into the counter function, and return a
// //     value which will provide input for the subsequent then() instance.
// //     The returned values should be one , then two , then three . The
// //     screen output in the console should be the following:

// let pro= new Promise((resolved)=>{
//     resolved('Resolved')
// })
// .then((value=>{
//     console.log('Start Counting');
// }))
// .then((value=>{
//     console.log('One');
// }))
// .then((value=>{
//     console.log('Two');
// }))
// .then((value=>{
//     console.log('Three');
// }))
// .catch((data=>{
//     console.log(data);
// }))                 
// // Output    
// // Start Counting
// // One
// // Two
// // Three



// 3- Practice exercise 13.3

//     This exercise will demonstrate how to use await to wait on a Promise
//     inside an async function. Using await and async , create a counter with
//     timeout() , and increment a global counter value.

// 1. Create a global value for a counter. 
var counter= 0;

// 2. Create a function that takes one argument. Return the result of a new
// Promise, setting a setTimeout() function that will contain the resolve
// instance.

function func(x){
    return new Promise((Resolve, Reject)=>{
        setTimeout(()=>{
            counter++
            Resolve(`x value ${x} counter ${counter}`)
        }, 1000 * x);
    });
}
// 4. Create an asynchronous function that outputs into the console the
// value of the global counter and the value of the argument of the
// function.
async function func2(x){
    console.log(`ready: ${x} Counter: ${counter}`);
    var cap= await func(x) 
    console.log(cap);               // 5. Create a variable to capture the returned resolve value from the await function. Output that result into the console.
}
// 6. Create a loop to iterate 10 times, incrementing the value and invoking
// the async function, passing the value of the increment variable as the
// parameter in the function.
for( let i= 1; i<=10 ; i++){
    func2(i)
}

// ready 1 counter:0
// ready 2 counter:0
// ready 3 counter:0
// x value 1 counter:1
// x value 2 counter:2
// x value 3 counter:3


// var counter = 0;

// function simpleFunc(x) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             counter++;
//             resolve(`x value ${x} counter:${counter}`);
//         }, 1000 * x);
//     });
// }
// async function asyncFunc(x) {
//     console.log(`ready ${x} counter:${counter}`);
//     var capture = await simpleFunc(x);
//     console.log(capture);
// }
// for (let index = 1; index <= 10; index++) {
//     asyncFunc(index);
// }





