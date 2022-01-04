//Write a JavaScript function to check whether an `input` is a string or not.
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
    console.log(a)
    c = a.charAt(0)
    console.log(abbrev)
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

string_parameterize = function(str) {
    var lowercase = str.toLowerCase()
    console.log(lowercase)
    return ` "${lowercase.replaceAll(" ", "_")}"`;
}
console.log(string_parameterize("Robin Singh from USA."));

string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-"); //----.what is [^a-zA-Z0-9 -]
};


