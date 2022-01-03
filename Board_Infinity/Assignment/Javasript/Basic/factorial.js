// function factorial(item) {
//     for(var i = 0; i <item.length; i++) {
//        var acc = 1;
//        acc = acc + item[i];
//     }
//     return acc;
// }
// console.log(factorial(5));

function addTo(n) {
    let sum = 0;
    for(let i = 0; i<=n ; i++ ) {
        sum = sum + i;
    }
    return sum
}
console.log(addTo(3))

//Write a function to find factorial 
function factorial(n) {
    let nfacto = 1;
    for(let i = 1; i<=n ; i++ ) {
        console.log(i)
        console.log(i)
        nfacto = nfacto * i;
    }
    return nfacto;
}
console.log(factorial(5))
//Question related to loop
//----->1) how to stored or extract loop values in differnt data types.
//----->2)  

//Write a fibonacci series
function fibbo(a) {
    let n1 = 0, n2=1 ,nextTerm;
    for(let i= 2 ; i<=a; i++) {

       ///?? i=1;

        console.log(n1); //
        nextTerm = n1 + n2; //---> what happening in this code;//0+1=1
        n1 = n2;//1
        n2 = nextTerm;//1
    }
}
console.log(fibbo(10));  
