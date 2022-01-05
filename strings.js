
function isPalindrome(string) {
  while(string.length > 1){
    if(string[0] === string[string.length -1]){
    string = string.slice(1, string.length -1);
    }
    else {
      return false;
    }
  }
    return true;
  }

function isPalindrome(string) {
  //base case
  if(string.length < 2){
    return true;
  }
  //recursive case
  if(string[0] === string[string.length-1]){
    return isPalindrome(string.slice(1, string.length -1));
  }
  else {
    return false;
  }
}
