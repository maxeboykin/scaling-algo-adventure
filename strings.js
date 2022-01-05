/*
function below operates in O(N) time since we have to check each letter in the palindrome
operates in O(1) space since we have only created leftIdx and rightIdx variables (pointers)
*/
function isPalindromeOptimal(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
 while(leftIdx < rightIdx){
   if(string[leftIdx] !== string[rightIdx]) return false;
   leftIdx++;
   rightIdx--;
 }
 return true;
}
/*
function below operates in O(N) time since we have to check each letter in the palindrome
operates in O(N) space since we have the call stack growing through each recursive case. really its 1/2 * N since we only call it half the times but over time constant goes away
*/
function isPalindromeRecursive(string, left = 0, right = string.length -1) {
  //base case
  if(left >= right){
    return true;
  }
  //recursive case
  if(string[left] !== string[right]) return false;
  left++;
  right--;
  return isPalindromeRecursive(string, left, right);
}
/*
Given a non empty string of lowercase letters and a non negative integer representing a key, write a function taht returns a new string by shifting every letter in the input string by k positions in the alphabet where k is the key.
CHAR CODE AT is used after being given a array/string "string.charCodeAt" and it takes in the index parameter of that input and spits out
the unicode code
STRING. FROM CHAR CODE takes in the number code and spits out character. needs "String." to precede it
takes O(N) time and O(N) space
another way of approaching it if you dont new charCodeAt or fromCharCode is to create an alpabet array "const alpabet = abcdefghijklmonopqrstuvwxyz.split('')" and iterate through that instead. that method will also take O(N) space since.
One way around O(N) space is to try and find spots where you can put in 26 rather than a variable size. not sure about this one just yet.
*/

function caesarCipherEncryptor(string, key){
  const newLetters = [];
  key = key % 26; //if the key is larger it should wrap around
  for(let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i);
    code = code + key;
    code > 122 ? code = (code % 122) + 96 : '';
    //code > 122 ? code -=26 : ''; this also works
    newLetters.push(String.fromCharCode(code));
  }
  return newLetters.join("");
}
/*
never do string += since strings concatenation is immutable, each time you do that the program needs to re read the entire string so each time its an O(N) operation!!!!!
for space it will be 2 x n since for each character we will also have a number so that is best case scenario. sometimes you will have duplicates of each char if the count is more than 9. this leads to an O(N) operation

Note that I had a while loop inside a for loop which caused an O(N^2) time operation. I ended up changing it to an if statement which held the opposite logic (to not continue counting length) which made it easier to enable an O(N) operation, "string[i] !== string[i-1] || length ==9 vs while (string[i] === string[i-1] && length < 9)
*/

function runLengthEncoding(string) {
  let chars = [];
  let length = 1;
  for (let i = 1; i < string.length; i++){
    if(string[i] !== string[i-1] || length === 9){
      chars.push(length);
      chars.push(string[i-1]);
      length = 0;
    }
    length++;
  }
    chars.push(length);
    chars.push(string[string.length-1]);

  return chars.join("");
}

/*
Many ways to do this problem. If you loop through the document, you would need to loop through the document again to know the count of that one letter and then loop through the given characters to see if there is enough. m = length of document, n = length of characters. It would be O(m (m + n)) => m^2 + mn and then you would have o(1) for space since nothing is being created except for a count variable.

Another solution is through memoization. You would loop through the document again and characters again and if there is enough characters for that document char then you would add that letter to the memoization object. So if you see that latter again in your loop through the document you would just continue to the next character. This would be O ( c (n + m)) with c being the number of unique characters in the document, m = length of document and and = length of characters.

Best solution is to make a hash table.
*/

function generateDocument(characters, document){
  let counts = {};
  for(let char of characters){
    if(counts[char]) counts[char]++;
    counts[char] = 1;
  }
  for(let char of document){
    if(counts[char] > 0) counts[char]--;
    else return false;
  }
  return true;
}
