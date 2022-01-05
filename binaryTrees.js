/*
When you hit a leaf node you want to add all the values of that branch.
Time complexity is O(N), as you have to go through all the nodes. Its a constant time operation when you are at
each node but overall time is O(N).
Space complexity can be more complicated as its a bit recursive.
the final sumArr is based on the number of nodes. For a binary tree, roughly half the nodes in a binary tree are leaf nodes,
which is the number of entries in the sumArr final result.
So O(n/2) is for space => O(N).
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, prevSum = 0, sumArr = []) {
  let curSum = prevSum + root.value;

  //base case if at a leaf
  if(root.left === null & root.right === null) sumArr.push(curSum);
  //not at a leaf
  else {
    if(root.left !==null) branchSums(root.left, curSum, sumArr);
    if(root.right !== null) branchSums(root.right, curSum, sumArr);
  }
  return sumArr;
}
