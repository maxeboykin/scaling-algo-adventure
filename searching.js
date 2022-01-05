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

