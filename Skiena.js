function findmatch(target, article){
  let targetLength = target.length;
  let articleLength = article.length;

  let j = 0;
for(let i = 0; i < articleLength-targetLength; i++){
  while( j < targetLength && article[j + i] === target[j]){
    j++;
  }
}
if(j === targetLength) return true;
return -1;
}
