// Math

//Suareroot & Powerof
//Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. 
function hypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) 
}
console.log(hypotenuse(3, 4))

//Min and Max
//Write a function midrange, that calculates the midrange of 3 numbers.
function midrange(a,b,c) {
    let min = Math.min(a,b,c);
    let max = Math.max(a,b,c);
    return (max + min)/2
}
console.log(midrange(3, 9, 1));

//Math.PI 
//Write a function area that calculates the area of a circle. The function is given the radius of the circle.
function area(a) {
    return Math.PI*Math.pow(a, 2)
}
console.log(area(2))

//Rounding
//Write a function round100 that rounds a number to the nearest hundred.
function round100(a) {
    let x = a/100;
    console.log(x)
    let y = Math.round(x)
    console.log(y)
    return y * 100
}
console.log(round100(856.12))

//Random numbers
//Write a function dice that returns like a dice a random number between 1 and 6.
// function dice(a ,b) {
//     a = Math.ceil(a);
//     b = Math.floor(b);
//     return Math.floor(Math.random() ** (a -b + 1) + a)
// }
function dice() {
    return Math.floor(Math.random() * (6 - 1  + 1) + 1)
}
console.log(dice()) 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
console.log(getRandomIntInclusive(1,6))

//parseInt
//Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17
//first way of doing but not fully efficient
function add(x1) {
    a = Number(parseInt(x1));
    console.log(typeof(b))
    b = Number(x1.substr(x1.indexOf("+")+ 1))
    console.log(typeof(b))
    return x1 = a + b;  
}
console.log(add('102+17'))
//second way fully effient
function add(x1) {
    a = (parseInt(x1));
    b = parseInt(x1.substr(x1.indexOf("+")))
    return x1 = a + b;  
}
console.log(add('102+17'))





