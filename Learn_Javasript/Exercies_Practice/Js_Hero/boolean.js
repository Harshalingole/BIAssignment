function nand(a , b) {
  let and = a && b;
  if (and = true ) {
      return false
  } else return true
}
console.log(nand(true, true))

//NOR

// Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.
function nor(a, b) { 
  let or = a || b ;
  return !or;
}
console.log(nor(0, 0));

//XOR
// The Boolean operators have an order: First NOT, then AND, last OR. If you want to change this order, use parentheses:

// Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.
function xor(a, b) {
  if (a != b) {
    return !(a && b); 
  } else if (a == b) {
    return false;
  }
}
console.log(xor(0, 1));

// Write a function equals that checks two values for strict equality.
function equal(a, b) {
  return a === b
}
console.log(equal("0", "0"));

//Write a function equals that checks 3 values for strict equality. The function should only return true if all 3 values are equal
function equals(a, b, c) {
  if (a === b && b === c) {
    return true;
  } else return false;
}
console.log(equals(5,5, 6));

// Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.

function isEven(a) {
  if (a%2 == 0) {
    return true;
  } else return false;
}
console.log(isEven(16))

//Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.
function unequal(a,b,c) {
  if(a !== b && b !== c && c !== a) {
    return  true;
  }else return false;
}
console.log(unequal(2,1, 1));

// Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.
function isThreeDigit(a) {
  if (a >= 100 && a < 1000) {
    return true;
  } else if( a < 100 || a >= 1000) {
    return false;
  }
}
console.log(isThreeDigit(50))

function isThreeDigit(a) {
  if (a >= 100 && a < 1000) {
    return true;
  } else  return false;
}
console.log(isThreeDigit(5000))