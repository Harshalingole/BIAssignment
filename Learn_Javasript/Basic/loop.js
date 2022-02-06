//For loop

// for(let i = 0; i <10; i++) {
//     i
//     console.log(typeof(i));
//     console.log(i);
// }

//I want to store (i) will in out.
// let out = [] ;
// for(let i = 0; i <10; i++) {
//     i
//     out[] = i
//     console.log(i);
// }
// out

//After Storing in out 
var out=[],out1=[];
for(let i = 0; i <10; i++) {
    i
    out.push(i);  // want to store above (i) values in out.
    if(i%2 === 0) { 
        console.log(i);
        //After applying if whatever (i)  is getting. that (i) value i  want to store  in out1 var.
        out1.unshift(i);
    }
}
out //--instead of just 9 i want an array from value 0 - 9
out1 //--instead of just 8 i want an array from value 0 - 8


//while loop
let i = 0;
while(i<10) {
    console.log(i)
    i++
}

//Do while loop
let j = 1;
do {
    console.log(j)
    j++
}
while(j < 5) 

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
      console.log(names[index]);
  }

//For off loop-- using array
let games = ["pubg", "COD", "BGMI", 2]
for(let name of games) {
    let a = name;
}
for(let name of names){
    console.log(name);
}
for(var element of [5,4,3,2,0,1]) {
     console.log(element);
}

for (x = 3; x > 0; x--) {
    console.log(x)
}

for (let i = 0; i < 50; i++) { 
    return alert("I");
} 