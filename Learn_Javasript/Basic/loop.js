//For loop
// for(let i = 0; i <10; i++) {
//     console.log("Namestey World")
// }

//while loop
// let i = 0;
// while(i<10) {
//     console.log("Namstey World")
//     i++
// }

//Do while loop
// let j = 1;
// do {
//     console.log(j)
//     j++
// }
// while(j < 5) 

//For in loop
   //objects
let animal = {
    name: "Zebra" ,
    leg: 4
};
for(let key in animal){
    console.log(key, animal[key]);
}
  //Arrays
  let names = ["Rahul", "Neha", "Aman", "Rishabh"];
  for (let index in names){
      console.log(index, names[index]);
  }

//For off loop-- using array
for(let name of names){
    console.log(name)
}
for(var element of [5,4,3,2,0,1]) {
     console.log(element);
}

