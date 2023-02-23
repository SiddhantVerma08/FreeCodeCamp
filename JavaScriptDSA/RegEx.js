// Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let results = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resultes = petRegex.test(petString);

// Ignore Case While Matching
let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result1 = fccRegex.test(myString);

// Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result2 = extractStr.match(codingRegex); // Change this line

// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result3 = twinkleStar.match(starRegex); // Change this line

// Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result4 = unRegex.test(exampleStr);

// Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result5 = quoteSample.match(vowelRegex); // Change this line

// Match Letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result6 = quoteSample.match(alphabetRegex); // Change this line

// Match Numbers and Letters of the Alphabet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig; // Change this line
let result7 = quoteSample.match(myRegex2); // Change this line

// Match Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou^0-9]/gi; // Change this line
let result8 = quoteSample.match(myRegex3); // Change this line

// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; // Change this line
let result9 = difficultSpelling.match(myRegex);

// Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result10 = chewieQuote.match(chewieRegex);

// Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/; // Change this line
let result11 = text.match(myRegex);

// Find One or More Criminals in a Hunt
let reCriminals = /C+/; // Change this line

// Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result12 = calRegex.test(rickyAndCal);

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result13 = lastRegex.test(caboose);

// Match All Letters and Numbers
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result14 = quoteSample4.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result15 = quoteSample5.match(nonAlphabetRegex).length;

// Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result16 = movieName.match(numRegex).length;

// Match All Non-Numbers
let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result17 = movieName2.match(noNumRegex).length;

// Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i // Change this line
let result18 = userCheck.test(username);

// Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result19 = sample.match(countWhiteSpace);

// Match Non-Whitespace Characters
let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result20 = sample2.match(countNonWhiteSpace);

// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result21 = ohRegex.test(ohStr);

// Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result22 = haRegex.test(haStr);

// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result23 = timRegex.test(timStr);

// Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result24 = favRegex.test(favWord);

// Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result25 = pwRegex.test(sampleWord);

// Check For Mixed Grouping of Characters
let myString2 = "Eleanor Roosevelt";
let myRegex6 = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
let result26 = myRegex6.test(myString2); // Change this line

// After passing the challenge experiment with myString and see how the grouping works
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result27 = reRegex.test(repeatNum);

// Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result28 = str.replace(fixRegex, replaceText);

// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result29 = hello.replace(wsRegex, ""); // Change this line