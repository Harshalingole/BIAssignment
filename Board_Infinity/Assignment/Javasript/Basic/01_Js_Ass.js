/*PROBLEM 1
You are provided with a number, "N". Find its factorial.
Input Description: 
A positive integer is provided as an input.
Output Description: 
Print the factorial of the integer.
Sample Input :
5
Sample Output :
120 */
var z=[];
const factorial = function(N) {
  for(let i= N; i>= 1; i--) {
    z.push(i);
    }
    return z.reduce((a, b) => a*b)
  }
console.log(factorial(7));  

/* PROBLEM 2
You are given with a number "N", find its cube.
Input Description: 
A positive integer is provided as an input.
Output Description: 
Find the cube of the number.
Sample Input :
2
Sample Output :
8 */
const findCube = N => N ** 3;
console.log(findCube(2))

/*
PROBLEM 3
The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the
triangle. You are provided with the side "a". Find the area of the equilateral triangle.
Input Description: 
The side of an equilateral triangle is provided as the input.
Output Description: 
Find the area of the equilateral triangle and print the answer up to 2 decimal places
after rounding off.
Sample Input :
20
Sample Output :
173.21
*/
const equilateralArea = a => ((1.73205/4)*(a ** 2)).toFixed(2)
console.log(equilateralArea(20))

/*
PROBLEM 4
You will be provided with a number. Print the number of days in the month
corresponding to that number.
Note: In case the input is February, print 28 days. If the Input is not in valid range
print "Error".
Input Description: 
Input n -> month number
Output Description: 
Find the days in the month corresponding to the input number. Print Error if the input
is not in a valid range.
Sample Input :
8
Sample Output :
31
*/
var days;
const daysInMonth = function(month) {
  if (month > 12 || month == 0) {
    days= `Input Month Between Value 1 to 12`;
  } else if (month == 2) {
    days= `28 days in ${month}`;
  } else if (month%2 !== 0) {
    days= `31 days in ${month}`;
  } else {
    days = `30 days in ${month}`;
  }
  return days
} 
console.log(daysInMonth(1))
/* 05) Write A program to convert celsius into fernahit 
°F = °C × (9/5) + 32. */

const convertFahrenheit = function(A) {
  let f = (A * (9/5)) + 32;
  return f.toFixed(2);
}
console.log(convertFahrenheit(12));

/*
PROBLEM 6
Write a code to get an integer N and print the sum of values from 1 to N.
Input Description: 
A single line contains an integer N.
Output Description: 
Print the sum of values from 1 to N.
Sample Input :
10
Sample Output : 55
*/
var sum = [];
const nSum = function(N) {
  for(let i=1; i <= N; i++) {
    sum.push(i)
  }
  return sum.reduce((a,b) => a+b)
}

console.log(nSum(10))

/*
PROBLEM 8
- Let "A" be a string. Remove all the whitespaces and find it's length.
(Print "Error" if N = negative value and 0 if N = 0).
Input Description: 
A string is provide as an input
Output Description: 
Remove all the whitespaces and then print the length of the remaining string.
Sample Input :
Lorem Ipsum
Sample Output :
10
*/

const removeSpaces = function (A) {
  console.log(typeof(A))
  if(typeof(A) === "number") {
    return  `Error Plz input a string`;
  }else {
    return A.trim().length;
  }
}

console.log(removeSpaces("    Lorem Ipsum"));
console.log(removeSpaces(1));

//tina Preparin

const n = 3;
const p = 100;
const q = 100;
// const p = 100;
// const q = 200;

var d;
const disCalc =;
