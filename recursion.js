/*
For the optimized solution you are just keeping track of an array and adding up numbers. The Time will be O(N) since we have
to still loop through the length of n and add up all the values. But for O(Space) it will be O(1)!! We are just adding two values
in an array and then return the value.

Another way to do this is using memoization which is like a hash table. It will be a constat time operation when the value is
stored in the hash table. Go over this Time Complexity with someone. Why is it O(N) time complexity for memoization? The space will be O(N) due to storing each value of n in the object table.

The fib function ends up being a time complexity of 2^n. Crazy bad! For every n there will be two branched recursion stacks caused from it.
Hence this can be really bad. Many duplicates happening too. The call stack will add a new layer for each n.
Ex: func(fib(6) => call stack will be | fib2 | fib3 \ fib4 | fib5 | fib6 ), hence it will be O(N). Would it mathematically be O(N-2)? since we already have N(1) and N(2)???
*/

function fib(n) {
  if(n===1) return 0;
  if(n===2) return 1;
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
