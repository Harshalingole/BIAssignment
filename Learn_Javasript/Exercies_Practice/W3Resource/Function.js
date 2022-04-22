"use strict";
// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

const reverseNum = function (num) {
  // 1) convert to string
  const strNum = num.toString();
  // 2) split it and make array(org)
  const arrNum = strNum.split("");
  // 3) make an empty array(new)
  let newAray = [];
  // 4) push in (new) in rev order -- How to push arr elment in reverse order in new array?
  for (let i = arrNum.length - 1; i >= 0; i--) {
    newAray.push(arrNum[i]);
  }
  // 4) Now join array -> string -> number
  const revStr = Number(newAray.join(""));
  return revStr;
};

const reverseNum2 = function (n) {
  n = n + "";
  return n.split("").reverse().join("");
};
reverseNum(32243);
console.log(reverseNum(32243));
console.log(reverseNum(123456789));
console.log(reverseNum2(32243));
console.log(reverseNum2(123456789));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindrome = function (str) {
  // 1)str -> array (ar1)
  str = str.replace(/[^a-zA-Z0-9]+/g, "");
  const strRev = str
    .replace(/[^a-zA-Z0-9]+/g, "")
    .split("")
    .reverse()
    .join("");
  strRev;
  return str === strRev ? "Yes Palindrome Word" : "No";
  // 2)ar1 -> rev array (arr2) -> to strRev
  // 3) check str === strRev
};
palindrome("madam1");
console.log(palindrome("madam"));
console.log(palindrome("'nurses run'"));
console.log(palindrome("'run'"));
console.log(palindrome("'fox'"));

// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

const possibleCombinations = function (str) {
  // 1)str -> array
  let combination = [];
  for (let i = 0; i < str.length; i++) {
    str[i];
    for (let j = i + 1; j < str.length + 1; j++) {
      combination.push(str.slice(i, j));
    }
  }
  return combination.join(",");
  // )make empt ary and push all combination it into --> join it by ","
};

possibleCombinations("Dog");
console.log(possibleCombinations("Dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const alphabetical = function (str) {
  // 1)str -> array ! arr.sort(alphabetical)
  return str.split("").sort().join("");
};

alphabetical("webmaster");
console.log(alphabetical("webmaster"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

const longestWord = function (str) {
  //1) str -> array
  str = str.split(" ");
  let maxIndex = str.map((len) => len.length);
  maxIndex = maxIndex.indexOf(Math.max(...maxIndex));
  return str[maxIndex];
};

longestWord("Web Development Tutorial");
console.log(longestWord("Web Development Tutorial"));
console.log(longestWord("Web Development Tutorial Harshal_Ingole"));
console.log(longestWord("Development"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const countVowels = function (str) {
  const vowel = ["a", "e", "i", "o", "u"];
  // 1)replace all spacces from str
  // 2)make it array()

  str = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "")
    .split("");
  str;
  // 3)var to store vowel count
  let vCount = 0; //this value will increse
  // 4)need to count a,e,i,o,u and store that count in storeCount
  for (let i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) !== -1) {
      vCount += 1;
    }
  }
  return vCount;
};
// countVowels('The quick brown fox')
console.log(countVowels("The quick brown fox"));

// 9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const argType = function (val) {
  return typeof val;
};
console.log(argType(1));
console.log(argType(null));
console.log(argType("1"));
