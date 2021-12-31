console.log("thsi is tut 46");

let reg = /harsh/; // This is regular expression leteral in js.
// reg = /harsh/g; // g means global
// reg = /harsh/i; // g means case insensitive
console.log(reg);
console.log(reg.source);

let s = "this is great code with harsh";
// 1) functin to match experessions-- exec()
// 1. exec() - this functin will return an array for match or null for no match.
console.log(reg.exec(s));

let result = reg.exec(s);
//console.log(result);
// console.log(result.input);
//console.log(result.index); // ---- >We can use multipli exec with global falg

// 2) Test - Return true or fallse
let result2 = reg.test(s);
console.log(result2); // ---> it return if s there in reg true or false

// 3) match()-- It will return an array of result or null 
// let result3 = reg.match(s); --> this is wrong
let result3 = s.match(reg); //-->this is right
console.log(result3);

// 4) Search() --Return index of first match else -1
// let result4 = reg.search(s); --> this is wrong
let result4 = s.search(reg);
console.log(result4);

// 5) replace() - Return new replaced string with all the replacement( if no global flag(g) then first match will be replaced)
let result5 = s.replace(reg, "ritesh.")
console.log(result5);


