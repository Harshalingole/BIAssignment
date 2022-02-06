// Using splice() to Remove Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.splice(2, 2, "Lemon", "Kiwi");;
x
fruits

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let x1 = fruits1.splice(0, 1);
x1
fruits1

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1);
citrus
fruits2
y = fruits2.join(" ")
y

//JavaScript Sorting Arrays
const f1 = ["Banana", "Orange", "Apple", "Mango"];
f1.sort();
f1
f1.reverse();
f1

    ////Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) {return a - b});
points
// Use the same trick to sort an array descending:
points.sort(function(a, b) {return b - a});
points


