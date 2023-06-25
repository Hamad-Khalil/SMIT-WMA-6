// 1. Write a js program to find length of a string.
// let string="Hamad Khalil"
// console.log(string.length);

// 2. Write a js program to copy one string to another string.
// let str="My name is Hamad Khalil"
// let otherStr=str
// console.log(otherStr);

// 3. Write a js program to concatenate two strings.
// let name= "Hamad"
// let fatherName=" Khalil"
// let fullName= name + fatherName
// console.log(fullName);

// 4. Write a js program to compare two strings.
// let str1="Hello World"
// let str2="Hello World"
// function compareStr(str1,str2){
//     if( str1==str2){
//         console.log("Both strings are equals");
//     } else { console.log("Both strings are not equals");}
// }
// compareStr( str1, str2)


// 5. Write a js program to convert lowercase string to uppercase.
// let string= "HAMAD"
//console.log(string.toUpperCase());

// 6. Write a js program to convert uppercase string to lowercase.
//let string="hamad"
// console.log(string.toLowerCase());

// 7. Write a js program to toggle case of each character of a string.

// 8. Write a js program to find total number of alphabets, digits or special character in a string.

// 9. Write a js program to count total number of vowels and consonants in a string.
// let string="A quick brown fox jumps over a lazy dog"
// function findVowelsCons(str){
//     let vowels="aeiou"
//     let noOfVowels=0
//     let noOfCons=0
//     for(let i=0; i<str.length;i++){
//         let char= str[i].toLowerCase()
//         if(vowels.includes(char)){
//             noOfVowels++
//         } else if ( char>= "a" && char<= "z"){
//             noOfCons++
//         }
//     } return { vowels: noOfVowels, Consonants: noOfCons}
// }
// console.log(findVowelsCons(string));

// 10. Write a js program to count total number of words in a string.
// let string="A quick brown fox jumps over a lazy dog"
// let splitedStr= string.split(" ")
// console.log(splitedStr.length);

// 11. Write a js program to find reverse of a string.
// let str="Hello World"
// function reverseStr(str){
//     let splitStr= str.split("")
//     let reversedStr= splitStr.reverse()
//   let joinStr= reversedStr.join("")
// return joinStr
// }
// console.log(reverseStr(str));

// 12. Write a js program to check whether a string is palindrome or not.
// let str="abba"
// function checkPalindrom(str){
//     let splittedStr= str.split("")
//     let reversedStr=[...splittedStr].reverse()
//     if( splittedStr.join("")==reversedStr.join("")){
//         console.log("This string is Palindrom");
//     } else console.log("This string is not Palindrom");
// }
// checkPalindrom(str)


// 13. Write a js program to reverse order of words in a given string
// let str="A quick brown fox jumps over a lazy dog"
// let splitedStr= str.split(" ")
// let reversedStr= [...splitedStr].reverse()
// console.log(reversedStr.join(" "));

// other method 
// function reverseStr(str){
//     let splitStr= str.split(" ")
//     let reversedStr= splitStr.reverse("")
//   let joinStr= reversedStr.join(" ")
// return joinStr
// }
// console.log(reverseStr(str));


// 14. Write a js program to find first occurrence of a character in a given string.
// let string= "Web Development"
// let occurenceOfE=string.indexOf("e")
// console.log(occurenceOfE); // Output will be 1

// 15. Write a js program to find last occurrence of a character in a given string.
// let string="A quick brown fox jumps over a lazy dog"
// // to find occurrence of l
// console.log(string.lastIndexOf("l"));   // output will be 31
// 16. Write a js program to search all occurrences of a character in given string.

// 17. Write a js program to count occurrences of a character in given string.
// let string="A quick brown fox jumps over a lazy dog"
//  // to count occurence of "a"
// let occurrenceOfChar= string.match(/a/g)
// console.log(occurrenceOfChar.length);
// 18. Write a js program to find highest frequency character in a string.

// 19. Write a js program to find lowest frequency character in a string.

// 20. Write a js program to count frequency of each character in a string.

// let string="Hello World"
// function findFreq(str){
//     let counter={}
//     for( let i=0; i<str.length; i++){
//         let char= str.charAt(i)
//         if(!counter[char]){
//             counter[char]=1
//         }else{ counter[char]++}
//     }
//     return counter
// }
// console.log(findFreq(string));

// 21. Write a js program to remove first occurrence of a character from string.
// let string="Welcome to Pakistan" 
// // to remove "e" from above string
// let updatedStr= string.replace("e", "")
// console.log(updatedStr);

// 22. Write a js program to remove last occurrence of a character from string.

// 23. Write a js program to remove all occurrences of a character from string.

// let string="Welcome to Pakistan" 
// // to remove all "e" from above string
// let updatedStr= string.replaceAll("e", "")
// console.log(updatedStr);
// 24. Write a js program to remove all repeated characters from a given string.

// 25. Write a js program to replace first occurrence of a character with another in a string.
// let str= "Hello World" // to replace first occur of "l" find its last occurr
// let repalcedStr= str.replace("l","o")
// console.log(repalcedStr);

// 26. Write a js program to replace last occurrence of a character with another in a string.

// 27. Write a js program to replace all occurrences of a character with another in a string.
// let str="My name is Hamad Khalil" // to replace "a" with "e"
// let newStr= str.replaceAll("a", "e")
// console.log(newStr);

// 28. Write a js program to find first occurrence of a word in a given string.
// let str="This is a book. It is my book" // to find first occurance of "is"
// let strInLowerCase= str.toLowerCase()
// console.log(strInLowerCase.indexOf(" is "));

// 29. Write a js program to find last occurrence of a word in a given string.
// let str="This is a book. It is my book" 
// let strInLowerCase= str.toLowerCase()// to find last occurance of "is"
// console.log(strInLowerCase.lastIndexOf(" is "));

// 30. Write a js program to search all occurrences of a word in given string.
// let str="This is a sample String.This is used to find word is"
// let splitedStr= str.split(" ")



// 31. Write a js program to count occurrences of a word in a given string.
// let str= "This is a book. It is my book"
// let strInLowerCase= str.toLowerCase()
// let newaStr= strInLowerCase.match(/ is /g)
// console.log(newaStr.length);

// other Method
// let str= "This is a book. It is my book"
// let wordToFind= "is"
// function findWordOcurr(str, word){
//     let splitedStr= str.split(" ")
//     let counter= 0
//     for(let i= 0; i< splitedStr.length; i++){
//         if(word== (splitedStr[i])){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(findWordOcurr(str,wordToFind));

// 32. Write a js program to remove first occurrence of a word from string.
// let str="This is a book. It is my book"
// let newStr= str.replace(" is "," " )
// console.log(newStr);

// 33. Write a js program to remove last occurrence of a word in given string.
// let str="My father is a lawyer. He is a nice man" 
// let newStr=str.


// 34. Write a js program to remove all occurrence of a word in given string.
// let str="My father is a lawyer. He is a nice man" // to remove is from given string
// let newStr=str.replaceAll("is", "")
// console.log(newStr);

// 35. Write a js program to trim leading white space characters from given string.
// let str="        a   b   c   d  e f"
// console.log(str.trimStart());
// 36. Write a js program to trim trailing white space characters from given string.

// 37. Write a js program to trim both leading and trailing white space characters from given string.

// 38. Write a js program to remove all extra blank spaces from given string.














// let string= "Hello World"

// console.log(string.includes("Hello"));
// console.log(string.startsWith("Hello"));

// let oInStr=(string.match(/o/g))
// console.log(oInStr.length);

// console.log(string.lastIndexOf('l'));
// console.log(string.split(''));
// console.log(string.charAt(1));
// console.log(string.trim());
// console.log(string.concat("", " of Information and technology"));
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());
// let newStr=string.replaceAll("l", "o")
// console.log(newStr);
// let newStr=string.replace("World", "Everyone")
// console.log(newStr);
// let newStr= string.substring(0,5)
// console.log(newStr);
// let newStr= string.slice(5, 11)
// console.log(newStr)
// console.log(string.length);
