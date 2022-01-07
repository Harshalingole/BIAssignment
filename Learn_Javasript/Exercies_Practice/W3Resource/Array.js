//JavaScript array - Exercises

// 1. Write a JavaScript function to check whether an `input` is an array or not.
  //My logic 1
function is_array(input) {
    return input instanceof Array;
}
console.log(is_array({n1:1,n2:2}));
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array({n1:1, n2:2,n4:4,}));
  //My logic 2
function is_array(input) {
    return Array.isArray(input);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array({n1:1, n2:2,n4: 4,}));
  //Ans Provide 
var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
      
//  2. Write a JavaScript function to clone an array.
function array_Clone(input) {
   return input.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
  //My Logic
function first(ary, n) {
    if(typeof(n) === "undefined" ) {
        n = 1;
    
    }
    return ary.splice(0, n)
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
  //Provide Ans
  var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
function last(ary, n) {
    var len = ary.length;
    len
    if(typeof(n) === "undefined"){
        n = ary.length - 1;
        console.log(ary[n]) 
    } else n = -n;
     return ary.slice(n) 
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

// 5. Write a simple JavaScript program to join all elements of the following array into a string
myColor = ["Red", "Green", "White", "Black"];
function join(myColor, joiner) {
    return myColor.join(joiner)
}
console.log(join(myColor));
console.log(join(myColor,"+"));
console.log(join(myColor,"_"));

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function accept(input,b) {
    let a = input.toString()
    return a
}
console.log(accept(025468, "_"))
 // Provide Answer
const num= 025468;   
const str = num.toString();
str //---why its removing 0 and how print 0 also.
var result = [str[0]];
result
var res
for(let x=1; x<str.length; x++)  //-------------- Not understand what happening here in the code
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      res = result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }                            //------------
console.log(result.join(''));

// 7. Write a JavaScript program to sort the items of an array.

// var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
  //My logic
var arry=[-3,8,7,6,5,-4,3,2,1];
arry.sort(function(a,b) {
  return a - b
})
arry

//Provided answer
const arr1=[-3,8,7,6,5,-4,3,2,1];
const arr2=[];
let min=arr1[0];
let pos;
var max=arr1[0];
for (i=0; i<arr1.length; i++)
{
        if (max<arr1[i]) max=arr1[i];
}

for (var i=0;i<arr1.length;i++)
{
        for (let j=0;j<arr1.length;j++)
        {
                if (arr1[j]!="x")
                {
                        if (min>arr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
}
console.log(arr2);

// 8. Write a JavaScript program to find the most frequent item of an array.
var arr3=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function frequent() {
  
}

