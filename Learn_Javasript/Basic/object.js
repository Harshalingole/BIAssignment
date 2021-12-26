// let lecture = 10;
// let section = 3;
// let title = "javascript";

// const course = {
//     lecture: 10,
//     section: 3,
//     title: "javascript",
//     notes: {
//         introduction: "Welcome to js lecture"
//     },
//     enroll() {
//         console.log('You are successfully enrolled')
//     }
// }
// course.enroll()
// console.log(course.section)

// //factory function 
// function createCourse() {
//     return {
//         lecture: 10,
//         section: 3,
//         title: "javascript",
//         notes: {
//             introduction: "Welcome to js lecture"
//         },
//         enroll() {
//             console.log('You are successfully enrolled')
//         }
//     }
// }
// const course = createCourse();
// console.log(course.title);
// course.enroll();

//Constructor function
function Course(title) {
    this.title= title,
    this.enroll = function () {
        console.log('You are successfully enrolled')
    }
}
 course = new Course('javasript')
 course.enroll();
 delete course.title;
 course.checkEnrollment= function () {
     console.log('30 user enroll')
 }
 course.checkEnrollment();

//Primitive Datatype
let number = 10;
let number2 = number;
//Pass by value
number = 15;
number 
number2

//Refernce Datatype 
let obj = {number: 10}
let obj2 = obj
//Pass by refernce
obj.number = 15;
obj
obj2

// how to passed by value in any object
const book = {
    title: 'javasript',
    enroll() {
        console.log("Your purchased book")
    }
}
const book1 = {...book}
book
book1
book1.title="C++";
book
book1

