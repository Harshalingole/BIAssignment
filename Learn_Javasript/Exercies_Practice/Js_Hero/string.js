//indexof(of) string
function secondIndexOf(s1, s2) {
    let first = s1.indexOf(s2);
    return  s1.indexOf(s2, first  + 1)
  }
  console.log(secondIndexOf('White Rabbit', 'it'))

//string:substr()
function firstWord(s1) {
    let spaceindex = s1.indexOf(' ');
    return s1.substr(0, spaceindex)
}
console.log(firstWord('see and stop'))
//Strin:Replace
function normalize(s1) {
    return s1.replaceAll('-', '/' )
}
console.log(normalize('20-05-2017'))
