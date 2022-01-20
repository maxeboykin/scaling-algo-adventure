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

function decipherThis(str) {
  let arrOfWords = str.split(" ");
  let decipheredArrOfWords = arrOfWords.map((word) => decipherWord(word)).join(" ");

    //String.fromCharCode()
    return decipheredArrOfWords;
  };


  function decipherWord(word){
    let ASCII = "";
    let secondChar = "";
    let restWord = "";
    let lastChar = "";

    for (let i = 0; i < word.length; i++){
      let char = word[i];
      if(('0123456789').includes(char)){
        ASCII += char;
      }
      else if(i === word.length -1){
        lastChar = char;
      }
      else if(('0123456789').includes(word[i-1]) && !('0123456789').includes(char)){
        secondChar = char;
      }
      else {
        restWord += char;
      }
    }
    return `${String.fromCharCode(parseInt(ASCII))}${lastChar}${restWord}${secondChar}`;
  }

  function high(x){
    let arrOfChars = x.split(" ");
    //let arrOfPoints = x.split(" ").map((word)=> word.reduce((sum, letter) => sum + alphPoints(letter)));
      let arrOfPoints = x.split(" ").map((word)=> {
        let total = 0;
      for(let i = 0; i < word.length; i++){
        total += alphPoints[word[i]];
      }
        return total;
      });
      var indexOfMaxValue = arrOfPoints.reduce((indexMax, word, index, array) => word > array[indexMax] ? index : indexMax, 0);
      return arrOfChars[indexOfMaxValue];
    }


    let alphPoints = {'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,
                      'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}



function disemvowel(str) {
  str = str.split("").filter(char => !"aeiouAEIOU".includes(char)).join("");

  return str;
}
