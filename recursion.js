/*
For the optimized solution you are just keeping track of an array and adding up numbers. The Time will be O(N) since we have
to still loop through the length of n and add up all the values. But for O(Space) it will be O(1)!! We are just adding two values
in an array and then return the value.
*/

function fib(n) {
  if(n==1) return 0;
  if(n===1) return 1;
  else {
    return fib(n-1) + fib(n-2);
  }
}

function getNthFibOptimize(n){
  if(n===1) return 0;
  if(n===2) return 1;
  let array= [0, 1];
  let next;
  for(let i = 3; i <= n; i++){
    next = array[0] + array[1];
    array[0] = array[1];
    array[1] = next;
  }
  return next;
}

function getNthFibMemoize(n, memoize = {1: 0, 2: 1}) {
  if(n in memoize){
    return memoize[n];
  }
  else {
    let returnValue = getNthFibMemoize(n-1, memoize) + getNthFibMemoize(n-2, memoize);
    memoize[n] = returnValue;
    return returnValue;
  }
}
