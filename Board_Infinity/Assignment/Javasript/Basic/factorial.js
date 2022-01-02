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



