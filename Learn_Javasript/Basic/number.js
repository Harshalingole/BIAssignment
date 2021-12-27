function secondIndexOf(s1, s2) {
  let first = s1.indexOf(s2);
  return  s1.indexOf(s2, first  + 1)
}
console.log(secondIndexOf('White Rabbit', 'it'))


