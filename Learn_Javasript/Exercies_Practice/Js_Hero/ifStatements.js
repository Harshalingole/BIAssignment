// Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.
function equal(a, b) {
    if (a===b) {
        return "EQUAL";
    }else return "UNEQUAL";
}
console.log(equal("g","g"))

//Two returns
// Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.
function repdigit(b) {
    let c =  b%10;
    let ns = b.toString(); //irst
    d = ns.charAt(0);
    let sn = Number(d);
    if(c == sn) {
        return "Repdigit!";
    } else return "No Repdigit!"
}
console.log(repdigit(33));
function repdigit(n) {
    let ones = n % 10;
    let tens = Math.floor(n / 10); // second
    if (ones === tens) {
      return 'Repdigit!';
    }
    return 'No Repdigit!';
  }
console.log(repdigit(33));

// if...else
//Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.

function addWithSurcharge(amt1, amt2) {
    let surcharge = 0;
    if(amt1<=10){
        surcharge = 1;
    }else  surcharge = 2;
    if(amt2<=10){
        surcharge = surcharge + 1;
    }else surcharge = surcharge +2;
    return amt1 + amt2 + surcharge;
}
console.log(addWithSurcharge(5, 15))

//else if
//Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

function addWithSurcharge1(a,b) {
    let surcharge = 0;
    if(a<=10) {
        surcharge = 1;
    }else if( 10< a && a <=20) {
        surcharge = 2;
    }else surcharge = 3;
    if(b<=10) {
        surcharge = surcharge + 1;
    }else if(10< b && b <=20) {
        surcharge = surcharge + 2;
    }else {surcharge = surcharge + 3;}
    return a + b + surcharge;
}

console.log(addWithSurcharge1(21, 21))