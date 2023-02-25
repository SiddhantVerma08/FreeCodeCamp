// Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit;
    return fahrenheit;
  }
  
  convertCtoF(30);

// Reverse a String
function reverseString(str) {
    return str
    .split('')
    .reverse()
    .join('');
  }
  
  reverseString("hello");

// Factorialize a Number
function factorialize(num) {
    if (num == 0){
      return 1;
    }
    else {
      return num * factorialize(num - 1);
    }
    
  }
  
  factorialize(5);

// Find the Longest Word in a String
function findLongestWordLength(str) {
    let stri = str.split(' ');
    let current = stri[0];
    for (let i=0;i < stri.length;i++){
      if(stri[i].length >= current.length){
        current = stri[i];
      }
    }
    return current.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largest =[]
    for (let i=0;i < arr.length; i++){
      let current = arr[i][0];
      for (let j= 0; j<arr[i].length; j++){
        if (arr[i][j] > current){
          current = arr[i][j];
        }
      }
      largest[i] = current;
    }
    return largest;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending
function confirmEnding(str, target) {
    let reg = new RegExp(target+"$","i")
    return reg.test(str)
  }
  
  confirmEnding("Bastian", "n");

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let output =''
    for (let i =0; i < num; i++){
      output+=str
    }
    return output;
  }
  
  repeatStringNumTimes("abc", 3);

// Truncate a String
