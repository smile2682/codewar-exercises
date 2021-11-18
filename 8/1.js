// Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split('').reverse().join('')
}



// Get Nth Even Number
// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.
function nthEven(n){
  // your code here
  return n * 2 - 2
}


// String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// refactor:
function repeatStr (n, s) {
  return s.repeat(n);
}

// original
function repeatStr (n, s) {
  output = ''
  for(let i = 0; i <= n-1; i++){
     output += s
  }
  return output;
}


// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// refactor
function even_or_odd(number) {
//   0 === false
  return number % 2 ? "Odd" : "Even"
}
// original
function even_or_odd(number) {
 return number % 2 === 0 ? 'Even' : 'Odd';
}


// Opposite number
// Very simple, given a number, find its opposite.
function opposite(number) {
  //your code here
  return -number;
}

// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num > 0 ? -num : num;
}



// Remove First and Last Character
// // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// refactor
function removeChar(str){
 //You got this!
return str.slice(1, -1)
};


// original
function removeChar(str){
 //You got this!
//   this does not work because replace will delete the first appeared letter, not neccessarily the last letter of the string
//   const last = str.length-1
//   console.log(last)
  
//   const noLast=str.replace(str[last], '')
//    console.log(noLast)
//   const all = noLast.replace(str[0], '')
//   return all;
  
  const arr = str.split('');
  arr.shift()
  arr.pop()
  return arr.join('')

};



// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// Convert boolean values to strings 'Yes' or 'No'.
// refactor
function boolToWord( bool ){
  //...
  return bool ? 'Yes':'No';
}
// original
function boolToWord( bool ){
  //...
  return bool === true ? 'Yes' : 'No' 
}



// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// refactor
var summation = function (num) {
  // use recursion
  if (num === 1) return 1;
 return num + summation(num - 1)
}

// original
var summation = function (num) {
  // Code here
  const arr = Array.from({length:num}, (_,i) => i + 1)
  
  return arr.reduce((a,b) => a + b,0)
}



// Convert a Number to a String!
// We need a function that can transform a number into a string.

function numberToString(num) {
  // Return a string of the number here!
//   both works.
//   return String(num);
  return ""+num
}