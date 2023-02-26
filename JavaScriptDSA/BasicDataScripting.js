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
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num)+"...":str}
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers
function findElement(arr, func) {
    return arr.find(func)
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

// Boo Who
function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  booWho(null);
// Title Case a Sentence
function titleCase(str) {
    return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
    ;
  }
  
  titleCase("I'm a little tea pot");

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Falsy Bouncer
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);

// Where do I Belong
function getIndexToIns(arr, num) {
  return arr.filter(val => num >val).length;
}

getIndexToIns([40, 60], 50);

// Mutations
function mutation(arr) {
  return arr[1]
  .toLowerCase()
  .split("")
  .every(function(letter) {
  return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

mutation(["hello", "hey"]);

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);