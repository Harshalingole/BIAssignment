const num = [1,2,3,4,5,6,7,]
//1] Basic Operation to Add or Remove
//push
num.push(8);
num

// Unshift
num.unshift(0)
num

//pop
num.pop()
num

//shift
num.shift()
num

//To change value in Array
num[0] = "name" //--->You can add any time of datatype in array
num[1] = {a: 1}
num

// -------------
const names = ["Aman", "Dhavan","Akash","Akshit","Akash" ]

//IndexOf
names.indexOf("Akash")
console.log(names.indexOf("Akash"))
console.log(names.indexOf("Akash",3))

//lastIndeOf
console.log(names.lastIndexOf("Akash"))

//Include
console.log(names.includes("Akshit"))
console.log(names.includes("Aksit"))
console.log(names.includes("Akshit",4))
console.log(names.includes("Akshit",2))

//ALl Above are Working on primative data types.

////-----------
//To Do operatin of user Defined/Referce data types such as::-- objects / function /

let channels = [{
    name: "Apna College",
    subscriber: 10000
},  {
    name: "Apni Kaksha",
    subscriber: 20000
},  {
    name: "Aman Dhattarwal",
    subscriber: 50000
}];
//To find is their subcriber = 50000 in the array;
     
    //Inline Callback Function
console.log(channels.find(function(elements){
    return elements.subscriber === 50000;
}))
 
console.log(channels.find(function(elements){
    return elements.name === "Apna Zayka";
}))  // We can use this for both refernce and Primitive data types to find in objects

//Arrow Function
          // --Using normal Syntax
console.log(channels.find((elements) => {
    return elements.name === "Apni Kaksha";
}));
console.log(channels.find(elements =>
    elements.name === "Apni Kaksha")); //--- if we having only one parameter then we can use this mehtod both will gave same result


//Concate Aray
let names1 = ["Aman", "Dhavan","Akash" ]
let names2 = ["Akshit","Neha"]
let names1_2 = names1.concat(names2) ;
console.log(names1_2)
console.log(names1.concat(names2, "Harshal"))

//Slice 
console.log(names1_2.slice(2,4))

//Spread Operator (...)
    //We can join two array using spread operator
let names3 = [...names,...names2,...["har"],..."har"]
names3

//Loop 
const names4 = ["Aman", "Dhavan","Akash","Akshit","Neha"];
//--->For Loop
     //--we will output each value in array using for loop
for (let i = 0; i<names4.length; i++) {
    console.log(names[i]);
}
//--->For of
for(let name of names4) { // here name is refering to every value in array names4.
    console.log(name)
}

//In javasript  for each loop does not exit but there is method in array of for each.

//for each
//we have to pass function in foreach that can -- callback/arrow/simple function

names4.forEach(function(name,index){
    console.log(name, index );
    var xyz =new Array(name)
    xyz
})

//Common Method Related to String & Array

//Join
let student = ["s","h","i","v",'a']
let join1 = student.join();
join1;
join1 = student.join("_");
join1

//Split
join1 = join1.split("_");
join1

//filter -- alternate to find as it gives  multiple output 

let cities = [
    {name:"Mumbai", pop: 50},
    {name:"Delhi", pop: 30},
    {name:"Heydrabad", pop: 30},
    {name:"Pune", pop: 40},
    {name:"Nagpur", pop: 40}
];

console.log(cities.filter(city => city.pop >30))


//Map --Creat an new array (har value ke sath jo operatin karvayenge vo return honga)
console.log(cities.map(city => city.pop * 2))

