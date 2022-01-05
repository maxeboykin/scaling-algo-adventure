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

