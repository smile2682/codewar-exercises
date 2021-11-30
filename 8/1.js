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


// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s/g , '')

}

// Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// Abbreviate a Two Word Name
// function to convert a name into initials. This kata strictly takes two words with one space in between them.

  // The output should be two capital letters with a dot separating them.
  
  // It should look like this:
  
  // Sam Harris => S.H
  
  // patrick feeney => P.F


function abbrevName(name){
    // code away
  const space = name.indexOf(' ')
  return (name[0] +'.'+ name[space+1]).toUpperCase()

}



// A Needle in the Haystack
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"


function findNeedle(haystack) {
  // your code here
  const index = haystack.indexOf('needle')
  return `found the needle at position ${index}`
}

// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]



function maps(x){
 return x.map(n => n*2)
}


// Friday
// Invert values

function invert(array) {
//   no need to deal with [] case since [].map will return an empty array as wanted , instead of an error
   return array.map(n => -n);
}

// function invert(array) {
  
   return array.length === 0 ? [] : array.map(n => -n) ;
}

// Reversed Words

function reverseWords(str){
  return str.split(' ').reverse().join(' '); // reverse those words
}

// Function 1 - hello world

// greet = ()=> "hello world!"

const greet = function (){
  return "hello world!"
}

// Get the mean of an array

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor(marks.reduce((a,b)=>a+b)/marks.length)
}

// Convert a String to a Number!

var stringToNumber = function(str){
  // put your code here
//   parseInt(str) works as well.
  return Number(str);
}


// Beginner Series #2 Clock

function past(h, m, s){
  //#Happy Coding! ^_^
  return (s + 60 * (m + 60 * h)) * 1000
}


// Fake Binary
// 1
function fakeBin(x){
//   either way would work
//   return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// string.replace(a,b)==> use b to replace a
  return x.replace(/[0-9]/g, y => y < 5 ? 0 : 1)
}
// 2
function fakeBin(x){
  console.log(typeof(x))
  
  return x.split('').map(n=>n<5? n=0: n=1).join('')
  

}



// Returning Strings
// 1
function greet(name){
  //your code here
  return `Hello, ${name} how are you doing today?`
}
// 2
function greet(name){
  //your code here
  return "Hello, " + name + " how are you doing today?"
}




// Jenny's secret message
// refactor
function greet(name){
  return "Hello, " + (name === "Johnny" ? "my love" : name) + "!";
    }
// origin
function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}



// You only need one - Beginner
// refactor
function check(a, x) {
  // your code here
  return a.includes(x);
}

// original
function check(a, x) {
  // your code here
  for( let i of a){
  if(i === x)
   return true
    }
  return false
  }

// Sum without highest and lowest number
// refactor
function sumArray(array) {
  return (Array.isArray(array) && array.length > 1)
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}
// origin
function sumArray(array) {
  
  if (!Array.isArray(array) || array.length===0){
    return 0;
  }
  if (array.length=== 2 || array.length=== 1){
    return 0;
  }
  array.sort((a,b)=>a-b);
  array.shift();
  array.pop();
  return array.reduce((a, b)=> a+b)
  

}

// Reversed sequence
// refactor
const reverseSeq = n => {
  const rev = [];
  for (let i = n; i > 0; i--){
    rev.push(i)
  }
  return rev;
};
// origin
const reverseSeq = n => {
  
  return Array.from({length:n}, (_,i)=>i+1).reverse();
};

// Total amount of points

function points(games) {
  // your code here
  let points = 0;
  games.map(result=>{
    const ourTeam = result[0];
    const otherTeam = result[2];
    if (ourTeam > otherTeam){
      points += 3
     }
    else if (ourTeam === otherTeam){
      points += 1
    }
    
    })
  return points;
}


// Array plus array
// refactor
function arrayPlusArray(arr1, arr2) {
//   use concat, takes more space though
//   better to set the initial value of 0, incase the arr is empty
  return arr1.concat(arr2).reduce((a,b)=>a+b,0); //something went wrong
}
// origin
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a,b)=>a+b) + arr2.reduce((a,b)=>a+b); //something went wrong
}

// Count the Monkeys!
// refactor
function monkeyCount(n) {
// this is how array.from works when taking an obj as parameter
// Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4] 
 return  Array.from({length:n}, (_,i)=>i+1)
    console.log({length:n})
}

// original
function monkeyCount(n) {
// your code here
  const arr = [];
  for (let i = 0; i < n; i ++){
    arr.push(i+1);
  }
  return arr;
}

// Reversed Strings

function solution(str){
  return str.split('').reverse().join('')
}


// Get Nth Even Number

function nthEven(n){
  // your code here
  return n * 2 - 2
}

// String repeat
// refactor
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



// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
  // TODO
};



// Calculate average

function find_average(array) {
  // your code here
  const l = array.length 
  return l === 0 ? 0 : array.reduce((a,b)=>(a+b))/l
}



// I love you, a little , a lot, passionately ... not at all
// refactor
function howMuchILoveYou(nbPetals) {
    // your code
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]
     return phrases[(nbPetals - 1) % phrases.length] 

}
// original
function howMuchILoveYou(nbPetals) {
    // your code
  n = nbPetals % 6
  switch (n){
      case 1:
        return 'I love you';
        break;
      case 2:
         return'a little'
        break;
      case 3:
        return'a lot'
        break;
      case 4:
         return'passionately'
        break;
      case 5:
        return 'madly'
        break;
      case 0:
        return 'not at all'
        break;
      
      
      
  }
}


// DNA to RNA Conversion
// refactor
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, "U")
}

// original
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.length ===0 ? "": dna.split('').map(i=> i ==='T'? "U" : i).join ('')
}

// Difference of Volumes of Cuboids
// refactor
const volume = c => c.reduce((x,y) => x*y)

function findDifference(a, b) {
  //loading...
  return Math.abs(volume(a)-volume(b))
}

// original
function findDifference(a, b) {
  //loading...
  va = a.reduce((a,b)=>a*b)
  vb = b.reduce((a,b)=>a*b)
  
  return va-vb >= 0 ? va-vb : vb-va
                
}


// Keep up the hoop

function hoopCount (n) {
   //your code goes here    
  return n >= 10 ?  "Great, now move on to tricks" : "Keep at it until you get it"
}

// Can we divide it?
function isDivideBy(number, a, b) {
  // good luck
  return number %a === 0 && number %b === 0
}

// Number of People in the Bus
// refactor
var number = function(busStops){
  // Good Luck!
  return busStops.reduce((n,[on,off])=>n+on-off,0)
}

// original
var number = function(busStops){
  // Good Luck!
  let getIn = 0;
  let out = 0;
 for (let i = 0; i < busStops.length; i++){
  getIn += busStops[i][0];
  out += busStops[i][1];
 } return (getIn - out)
  
//   return busStops.reduce((a,b)=>(a[0]+b[0]-a[1]-b[1]),0)
}