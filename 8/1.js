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