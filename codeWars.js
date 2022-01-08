function expandedForm(num) {
  let returnStr= '';
  let length = num.toString().length;
  let stringNum = num.toString();
  let lastChar = stringNum[stringNum.length -1];
  for(let i = 0; i < stringNum.length-1; i++){
    let curChar = stringNum[i];
    if(curChar !== '0') returnStr += curChar + '0'.repeat(length-i-1) + ' + ';
  }
  if(lastChar !== '0') returnStr += lastChar;
  if(returnStr.slice(returnStr.length-3, returnStr.length) === ' + ') returnStr = returnStr.slice(0,-3);
  return returnStr;
}

function incrementString (strng) {
  var num = 0
  let numStr = ""
  if (strng.length < 1) return "1";
  if (!'0123456789'.includes(strng[strng.length-1])) return strng += '1';
  else {
    num = 1;
    while('0123456789'.includes(strng[strng.length-num])){
      numStr += strng[strng.length-num];
      num++;
    }
  }
  let stringNum = (numStr.split("").reverse().join(""));
  let numLength = stringNum.length;
  let originalNum = parseInt(stringNum);
  originalNum++;
  let newStringNum = originalNum.toString();
  while(newStringNum.length < numLength){
    newStringNum = '0' + newStringNum;
  }

  strng = strng.slice(0, strng.length - num+1);

  return strng + newStringNum;
}

function count (string) {
  let dict = {};
  for (let char of string){
    if(dict[char]) dict[char]++;
    else {
      dict[char] = 1;
    }
  }
   return dict;
}
