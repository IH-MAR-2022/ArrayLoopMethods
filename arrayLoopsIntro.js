//Array Methods used thus far
// .push() adds a value to end of element
// .pop() removes value from end of array
// .shift() removes value from start of array
// .unshift() adds value to start of array
// .indexOf() finds where an element is located in the array
// .join() converts an array into a string
// .splice() can remove/add values in a specific place inside array
// .slice() creates a "slice" of the larger array
// .reverse() reverses the order of the array
// .includes() checks an array to see if a value exists inside. Returns true if it does, otherwise returns false

//Array Loop methods
//break down arrays into their basic elements/values
//Will then pass each of these values into the callback function, individually

// let arr =  [1,2,3,4,5];

// let newArr = [];

// for(let i=0; i< arr.length; i++){
//   newArr.push(arr[i]+10)
// }

// console.log(newArr) //[ 11, 12, 13, 14, 15]
// console.log(arr) //[1,2,3,4,5]

//callback function
//Requires a function to be passed as an argument
//This will be an anonymous function

//.forEach()
//will not return anything
// let arr =  [1,2,3,4,5];
// let newArr = [];

// for(let i=0; i< arr.length; i++){
//   newArr.push(arr[i]+10)
// }

// arr.forEach(
//   //The parameter name is the individual element of the array currently getting passed through
//   function(num){
//     newArr.push(num+10)
//   }
// )

// console.log(newArr)

//CHALLENGE
let testArr = [0, 1, 2, 3, 4];

//  make an empty array
//use .forEach on testArr
//multiply each number by itself && push this into the empty array
//display the now-filled array

let newArr = [];
//num is referring to each individual number inside the array
testArr.forEach(function (num) {
  newArr.push(num * num);
});

console.log(newArr);
