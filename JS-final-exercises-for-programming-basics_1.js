// Question 1
// Write a function that performs the Caesar Cipher. The function caesarCipher should receive
// two arguments: a string and a number. The number specifies how many letters to shift the string by.

let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const caesarCipher = (str, num) => {
  let result = "";
  console.log(alp[0]);
  for (let i = 0; i < str.length; i++) {
    return (result += str.replace(str[i], alp[0].charAt(num)));
  }
  console.log(result);
};

caesarCipher("hello", 1); // returns "ifmmp"
// caesarCipher("dog", 3); // returns "grj"
