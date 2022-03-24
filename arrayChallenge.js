let numArr = [12, 5, 45, 2, 7, 23, 77, 3];
let namesArr = [
  "Alex",
  "Nick",
  "Paola",
  "Mike",
  "Luis",
  "Alan",
  "Oshin",
  "Dustin",
  "Max",
];

//Challenge 1:
//create a new array, with all names in namesArr capitalized

// let capNames = namesArr.map(function(name){
//   return name.toUpperCase()
// })

//Challenge 2
//create a new array from numArr with numbers less than 20

// let filteredArr = numArr.filter(function(num){
//   return num <= 20
// })

//Challenge 3
//add all of the numbers in numArr together

// let addedNums = numArr.reduce(function(total, num){
//   return total + num
// }, 0)

// console.log(addedNums)

//Challenge 4
//Organize the original namesArr alphabetically

// namesArr.sort(function(a,b){
//   return a.localeCompare(b)
// })

// console.log(namesArr)

//Challenge 5
//Create a new array that is ordered by length of the names

// let sortedArr = [...namesArr].sort(function(a,b){
//   return a.length - b.length
// })

//BONUS Challenge 5.1
//If the names have the same length, then order them alphabetically

// let sortedArr = [...namesArr].sort(function(a,b){
//    if(a.length === b.length){
//      return a.localeCompare(b)
//    }
//      return a.length - b.length
// })

// console.log(sortedArr)
