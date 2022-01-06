/*
Ex. [1, 2, 3, 4, 5, 6]; 1 will add to waiting time 5 times from 2 to 6 at
index 0. so to calculate waiting time for 1 it would be value *
(array.length which is 6 - i which is 0 which is 6 ) so we minus 1 to get the amount of times.

Draw out the example and think through the pattern!!!!!
The Time complexity O(nlogn) due to sorting the array. n is the number of queries in the input array. we also have to loop through the
sorted array so its O(nlogn) + O(n) => which becomes O(nlogn)
Space complexity is O(1) since we only create a pointer and sum variables.
Note that sorting is mutable so we are not creating another array.
*/


function minimumWaitingTime(queries) {
  let sum = 0;
  queries.sort((a,b) => a-b);
  for(let i = 0; i < queries.length -1; i++){
    let pointer = queries[i];
    sum += pointer*(queries.length - i -1); //

  }
  return sum;
}
