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

