// let badString = 'You've got right'
let goodString = 'You\'ve got right' 
let hello = "Hello! "
let welcome = "\"welcome to Apna College\""
hello + welcome 
let outputMsg = hello + welcome 
outputMsg
let concagniate="string"+100
concagniate // it wiil become string
let conc2= "19"+"67"
conc2
let numberString = "123"
numberString
// convert numstring into Number data type
Number(numberString);
numberString
// we can also covert it back to string
numberString = Number(numberString);
numberString.toString();
numberString

// Template iterate ( ` `)
let outputMsg1 = `${hello + welcome} Your score is ${numberString}`
outputMsg1

// Important Methods in String
//Length of character
var favShow = "Game of Thrones";
console.log(favShow.length)
//character at string
console.log(favShow[0])
console.log(favShow[favShow.length-1])
//index of character
console.log(favShow.indexOf("of"))
//UperCase or LowerCase
var srk = "My NamE is KhaN"
console.log(srk.toUpperCase());
console.log(srk.toLowerCase());
