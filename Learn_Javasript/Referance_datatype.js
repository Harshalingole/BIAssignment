//object
let animal = {
    name: "cow",
    leg: 4
}

console.log(animal)
//Dot Notation
console.log(animal.name);
// Bracket Notaion
console.log(animal["leg"]);

// Arrays 
let selectBooks = ["The Rudest", "Think and Grow rich", "Rich Dad Poor Dad"]
console.log(selectBooks);
console.log(selectBooks[1]);

//Function
function namasteyWorld(name) {
    console.log("Namstey" +" " + name)
}
namasteyWorld("Harshal")

function addition(a,b) {
    return a + b;
}
console.log(addition(5,5))