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

//------------------------------------------------------
/*
Time complexity is the same for the stack/iterative approach as well as the recursive approach below. need to go through all nodes so its O(N).
Space complexity for the recursive approach is is the maxinum number
of callstacks and is the deepest you get so its the
height of the binary tree. O(H).
For the iterative stack approach, it all depends on the tree and
if its balanced or not. if its balanced then space will be
around the height of the tree as well
*/
class BinaryTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function nodeDepthsRecursive(node, depth = 0){
  //base case is at the leaf
  if(node.left === null && node.right === null) return depth;
  //recursive cases
  if(node.left !== null && node.right !== null) return depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1);
  if(node.left !== null) return depth + nodeDepths(node.left, depth + 1);
  if(node.right !== null) return depth + nodeDepths(node.right, depth + 1);
}

function nodeDepthsRecursiveSimple(node, depth = 0){
  if(node === null) return 0;
  return depth + nodeDepthsRecursiveSimple(node.left, depth + 1) + nodeDepthsRecursiveSimple(node.right, depth + 1);
}


/*
The stack here is an array of objects.
*/
function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{node: root, depth: 0}];
  while(stack.length > 0){
    const {node, depth} = stack.pop();
    if(node === null) continue;
    sumOfDepths += depth;
    stack.push({node: node.left, depth: depth + 1});
    stack.push({node: node.right, depth: depth + 1});
  }
  return sumOfDepths;
}
