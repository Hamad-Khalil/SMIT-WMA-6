// 1. Write a JavaScript program to list the properties of a JavaScript object

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };

// // for( let i=property, )

// for(let property in student){
//     console.log(property);
// }


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// Sample object:

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };
// console.log(student);
//  delete student.rollno
//  console.log(student);  


// 3. Write a JavaScript program to get the length of a JavaScript object.

// Sample object :

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };

// let keysInObj= Object.keys(student)
// console.log(keysInObj.length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.



// var library = [

//    {

//        author: 'Bill Gates',

//        title: 'The Road Ahead',

//        readingStatus: true

//    },

//    {

//        author: 'Steve Jobs',

//        title: 'Walter Isaacson',

//        readingStatus: true

//    },

//    {

//        author: 'Suzanne Collins',

//        title:  'Mockingjay: The Final Book of The Hunger Games',

//        readingStatus: false

//    }];



// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

// Volume of a cylinder : V = πr2h

// where r is the radius and h is the height of the cylinder.



// 6. Write a Bubble Sort algorithm in JavaScript.

// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,

// Sample Data: [6,4,0, 3,-2,1]

// Expected Output : [-2, 0, 1, 3, 4, 6]



// 7. Write a JavaScript program which returns a subset of a string.

// Sample Data: dog

// Expected Output: ["d", "do", "dog", "o", "og", "g"]



// 8. Write a JavaScript program to create a Clock.

// Note: The output will come every second.

// Expected Console Output :

// "14:37:42"

// "14:37:43"

// "14:37:44"

// "14:37:45"

// "14:37:46"

// "14:37:47"

// let clock= new Date()
// console.log(clock.getHours()+":"+clock.getMinutes()+":"+clock.getSeconds());





// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
//Mthod 1
// let radius= 1; // Here's the radius supplied by the user
// console.log("The area of the cirlce is", radius*3.14 , "and perimeter of the circle is", 2*3.14*radius );

// Method 2
// let radius= 1
// function findAreaPeri (radius){
//     let area= radius*3.14;
//     let perimeter= 2*radius*3.14;
//     console.log("Area = ",area);
//     console.log("Perimeter = ", perimeter);
// }
// findAreaPeri(radius)


// 10. Write a JavaScript program to sort an array of JavaScript objects.

// Sample Object :


// var library = [

//    {

//        title:  'The Road Ahead',

//        author: 'Bill Gates',

//        libraryID: 1254

//    },

//    {

//        title: 'Walter Isaacson',

//        author: 'Steve Jobs',

//        libraryID: 4264

//    },

//    {

//        title: 'Mockingjay: The Final Book of The Hunger Games',

//        author: 'Suzanne Collins',

//        libraryID: 3245

//    }];

// Expected Output:



// [[object Object] {

//   author: "Walter Isaacson",

//   libraryID: 4264,

//   title: "Steve Jobs"

// }, [object Object] {

//   author: "Suzanne Collins",

//   libraryID: 3245,

//   title: "Mockingjay: The Final Book of The Hunger Games"

// }, [object Object] {

//   author: "The Road Ahead",

//   libraryID: 1254,

//   title: "Bill Gates"

// }]



//  11. Write a JavaScript function to print all the methods in an JavaScript object.

// Test Data :

// console.log(all_properties(Array));

// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]



// 12. Write a JavaScript function to parse an URL.

//  13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

//  14. Write a JavaScript function to retrieve all the values of an object's properties.

// let obj={
//     name: 'Hamad',
//     age : 20,
//     country: 'Pakistan',
// }
// console.log(Object.values(obj));

//  15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
// let obj= {
//     name : "Hamad" ,
//     fName: "Khalil" ,
//     age: 20 ,
//     country : "Pakistan", }
//     for (const[key,value] of Object.entries(obj))
//     console.log(`${key} ${value}`)

//  16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

//  17. Write a JavaScript function to check whether an object contains given property.

// function hasProperty(obj, propName) {
//     return obj.hasOwnProperty(propName);
//   }
// let obj={
//         title: 'Mockingjay: The Final Book of The Hunger Games',
    
//             author: 'Suzanne Collins',
    
//          libraryID: 3245
// };
// console.log(hasProperty(obj, "title")); // output:  True









// let obj= {
//     name : "Hamad" ,
//     fName: "Khalil" ,
//     age: 20 ,
//     country : "Pakistan", 
//     Hobbies: ['Cricket', 'Book Reading', 'Socializing'],
//     fulName: function (){
//         return this.name + " " + this.fName
//     }
// }
// let otherObj= {
//     name: 'HAMAD',
//     fName: 'KHALIL'
// }
// for (const [key, value] of Object.entries(obj))
//     console.log(`${key} ${value}`);
// console.log(Object.entries(obj));
// console.log(Object.assign(obj, otherObj)); //to merge to object
// console.log(obj.age); // to get a specific property from the object
// console.log(obj.Hobbies); // to get arrays in a object
// console.log(obj.fulName()); // to run a method in  object
//  obj.profession= "Softwere Engineer" // to add new prpperty in an object
//  console.log(obj.profession); 
//  delete obj.name // to remove any property in an object
//  console.log(obj);

