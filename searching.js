/*
Binary search is real life. find someone in a pile of essays that is alphabetic. cut in the middle to see where you are at
and eliminate half of the potential options. for a binary search the pre-req is that the input array has to be
sorted. if an element is not in the array, a pointer will cross over either left or right as it keeps slicing.
Time is O(logN)) and Space is O(1). If space is done recursively it will be O(N) due to the call stack.
*/


function binarySearch(array, target) {
  let left = 0;
  let right = array.length -1;
  while(left<right){
    let middle = Math.floor((left + right) / 2);
    if(array[middle] === target) return middle;
    else if(array[middle] < target) left = middle + 1;
      else{
        right = middle -1;
      }
  }
  return -1;
}

/*
Time is O(N) since we have to go through the entire input array. Space is O(1) since its just an array of 3 memory slots
*/

function findThreeLargestNumbers(array) {
  let threeNums = ['-', '-', '-'];
  for(let i = 0; i < array.length; i++){
    if(threeNums[1] === '-' || threeNums[2] === '-'){
      if(threeNums[2] === '-') threeNums[2] = array[i]; //all numbers are empty
      else if(threeNums[1] === '-') threeNums[1] = array[i]; //right number filled, first two empty
    }
    else if(array[i] > threeNums[0] || threeNums[0] === '-'){
      if(array[i] > threeNums[1]){
        if(array[i] > threeNums[2]){
          threeNums[0] = threeNums[1];
          threeNums[1] = threeNums[2];
          threeNums[2] = array[i];
          continue;
        }
        threeNums[0] = threeNums[1];
        threeNums[1] = array[i];
        continue;
      }
      threeNums[0] = array[i];
      continue;
    }
  }
  return threeNums;
}
