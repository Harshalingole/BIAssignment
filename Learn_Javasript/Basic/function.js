// Maggi cooking recipe
function cookMaggi(maggi, pani, tapeli) {
    console.log("Your maggi will be ready in" 
        + maggi * 2 
        + "minutes"
        +"and ingredients used are:-"
        + maggi + "Maggi"
        + pani + "cups of water"
        +"using"+tapeli +"pan")
}
cookMaggi(4, 8 , 1)
//lasagna recipe 
 const EXPECTED_MINUTES_IN_OVEN = 40 ;
 let actualMinutesInOven = 30 ;
 function remainingMinutesInOven(actualMinutesInOven) {
    return  EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven ;
  }
console.log(remainingMinutesInOven(actualMinutesInOven))



//Make Sandwich
let bread1 = prompt("Which bread would you like to have:-")
let veggies1 = prompt("Which Veggies would you like to have:-")
let Sauce1 = prompt("Which Sauce would you like to have:-")

function makeSandwich(bread, veggies, sauce) {
    let sandwich = bread + " " + veggies + " " + sauce +" " +"sandwich is ready" ;
    return sandwich;
}
let vegSandwich = makeSandwich(bread1, veggies1, Sauce1);
console.log(vegSandwich);
