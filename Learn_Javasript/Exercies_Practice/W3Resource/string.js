//Doughts 
   //---> Question No. 7  : [^a-zA-Z0-9 -]
   //---> Question No. 10 : ([a-z]+)|([A-Z]+)
   //---> Question No. 12 : ("/^" + separator + "/")
   

//1.Write a JavaScript function to check whether an `input` is a string or not.
function isString(name) {
    console.log(typeof(name))
    if(typeof(name)==="string"){
        return true;
    }else return false;
}

console.log(isString(1))

// 2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
function isBlank(n1) {
    if(n1 == "") {
        return true; }
        else return false;
}
console.log(isBlank(''))
console.log(isBlank("abc"))

// 3. Write a JavaScript function to split a string and convert it into an array of words.
function string_to_array(input) {
    let split1 = input.split(" ")
    return split1
}
console.log(string_to_array("harshal ingole"));
console.log(string_to_array("Robin Singh"));

//4. Write a JavaScript function to extract a specified number of characters from a string.
function truncate_string(str, value) {
    return str.substring(0, value)
}
console.log(truncate_string("harshal ingole", 7))

//5. Write a JavaScript function to convert a string in abbreviated form.
    // My ans
function abbrev_name(name) {
    let space = name.search(" ") + 1 ;
    console.log(space)
    a = name.substring(space)
    console.log(a);
    c = a.charAt(0);
    let final = name.replace( a, `${c}.`)
    return final;
}
console.log(abbrev_name("Harshal Ingole"))
console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("RobinSingh Jadhav"));

function abbrev_name1(str) {
    var split_name = str.trim().split(" ");
    console.log(split_name);
    if(split_name.length > 1) {
        split_name =  `${split_name[0]} ${split_name[1].charAt(0)}.`;
    }
    return split_name;
}
console.log(abbrev_name1("Harshal Ingole"))
console.log(abbrev_name1("Robin Singh"));
console.log(abbrev_name1("RobinSingh Jadhav"));

//6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
   // My logic ans
function protect_email(email) { 
    let a = email.trim().substring(5, email.search("@"))
    return email.replace(a, "...")
}
console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("harshal733483@gmail,com"));
    //2nd way
protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};
console.log(protect_email("harshal733483@gmail,com"));

//7. Write a JavaScript function to parameterize a string.
  //My logic
string_parameterize = function(str) {
    var lowercase = str.trim().toLowerCase()
    console.log(lowercase)
    return ` "${lowercase.replaceAll(" ", "_")}"`;
}
console.log(string_parameterize("Robin Singh@&* from USA."));
//Provided Ans
string_parameterize1 = function (str1) {
    return str1.trim().toLowerCase().replace(/\s/g, "-"); //----.what is [^a-zA-Z0-9 -] & whats it doing
};
console.log(string_parameterize1("Robin Singh from USA.Robin Singh @ &*"))

//8. Write a JavaScript function to capitalize the first letter of a string
   //My ans
function capitalize(str) {
   a = str.trim().charAt(0).toUpperCase();
   return str.replace(str.charAt(0), a)
}
console.log(capitalize('js string exercises'));
console.log(capitalize('the quick brown fox '));
  //Their Way
capitalize = function(str1){
    return str1.charAt(0).toUpperCase() + str1.slice(1);
  }
console.log(capitalize('the quick brown fox '));

//10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
//----------------->
// function swapcase(str) {
//     var array = str.split("");
//     array
//     array.forEach(element => {
//         var lowercase = array.toUpperCase();
//         if(element == a){

//         }
//     });
// }
// console.log(swapcase('AaBbc'));
//--------------->
swapcase1 = function swapcase(str) { // ([a-z]+)|([A-Z]+) What is it for and what its doing
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase1('AaBbc'));
console.log(swapcase1('PyThOn'));

//11. Write a JavaScript function to convert a string into camel case.
    // My Ans::
function camelize(str) {
    var a,b;
    a = str.trim().split(" ");
    console.log(a.length)
    if(a.length == 2) {
       return b = a[0] + a[1].replace(a[1].charAt(0),a[1].charAt(0).toUpperCase());
    } else return  b = a[0];
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptp xercises"));

//12. Write a JavaScript function to uncamelize a string.
//provided Ans
function uncamelize(str, separator) {
    // Assume default separator is a single space.
    if(typeof(separator) == "undefined") {
      separator = " ";
    }

    var str = str.replace(/[A-Z]/g, function (letter) 
    {
      let z = separator + letter.toLowerCase();
      console.log(z)
      return z;
    });
    // Remove first separator
    return str.replace("/^" + separator + "/", ''); // ("/^" + separator + "/") what is this 
  }
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));

//13. Write a JavaScript function to concatenates a given string n times (default is 1).
function repeat(str, n) {
    var a;
    if(typeof(n) == "undefined"){
        n = 1;
    }
    a = new Array(n+1).join(str);
    return a
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

//14.Write a JavaScript function to insert a string within a string at a particular position (default is 1)
function insert(str, str1, posi) {
    var final = str ;
    var mid, spl ;
    if(typeof(str1) === "undefined" && posi === undefined) {
        xyz = str.trim();
    }else if(posi === undefined){
        posi = 0;
        xyz= str1.concat(" ",xyz)
    } else {
       let a = `${str.substring(0, posi)}`;
       a
       let c = a + " "+ str1
       c
       d = str.substring(str.indexOf(a)+ a.length)
       d
       xyz = `${c} ${d}`
    }
    return final =  xyz;
}
function insert(str, str1, posi) {
    var final = str ;
    var mid, spl ;
    if(typeof(str1) === "undefined" && posi === undefined) {
        xyz = str.trim();
    }else if(posi === undefined){
        posi = 0;
        xyz= str1.concat(" ",xyz)
    } else {
       let a = `${str.substring(0, posi)}`;
       let c = a + " "+ str1
       d = str.substring(str.indexOf(a)+ a.length)
       xyz = `${c} ${d}`
    }
    return final =  xyz;
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
console.log(insert('The Brown Box.','quick ',4));

//15.Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
   // My Ans
function humanize_format(num) {
    if(typeof(num) == "undefined")  {
        return "Insert A Valid Number"
    }
    var final ;
    switch (num%10) {
        case 0:
            final = "Insert Value";
            break;
        case 1:
            final = `${num}st`;
            break;
        case 2:
            final = `${num}nd`;
            break;
        case 3:
            final = `${num}rd`;
            break;
        default:
            final = `${num}th`;
    }
    return final
}

console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
console.log(humanize_format(403));
    //Provide Ans
    humanize_format = function humanize(num) {
        if(typeof(num) == "undefined") return;
       if(num % 100 >= 11 && num % 100 <= 13)
             return num + "th";
             
             switch(num % 10) {
                 case 1: return num + "st";
                 case 2: return num + "nd";
                 case 3: return num + "rd";
             }
             return num + "th";
         }
// 16.Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
function text_truncate(str, pos, ins) {
    if(typeof(pos)=="undefined") {
        pos = str.length;
        ins = "";
    }
    if(typeof(ins)== "undefined") {
        ins = "..."
    }
    if(str.length > pos) {
       return  str = `"${str.slice(0,pos)}${ins}"`
    }else {
        return str
    }    
}

console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
console.log(text_truncate('We are doing .',15,'!!'))

//17. Write a JavaScript function to chop a string into chunks of a given length.
   // My logic 
function string_chop(str,pos) {
    var xyz, leng;
    if(typeof(pos) === "undefined") {
         pos = str.length;
    }
    leng =  Math.ceil((str.length/pos));
    leng
    for(let i = 0 ; i <= leng ; i = i + pos) {
        console.log(i);
       return xyz = str.split(str.charAt(pos+1),pos);
    }
    return xyz;
}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
  // Proivded ans
  string_chop =  function(str, size){
    if (str == null) return [];
    str = String(str);
    size = ~~size;
    console.log(size)
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}    
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
