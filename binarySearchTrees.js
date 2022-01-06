/*
In a BST, a nodse value must be greater than the nodes to the left
and less than or equal to the nodes to the right. All nodes should
satisfy this property.
Average case for time is O(logn) and O(logn) for space if the BST is
balanced. We will traverse on average half of the tree each time.
Worst case is O(N) for both time and space if the tree is extremely
unbalanced (either always left or always right node).
*/


class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}


function findClosestValueInBstHelper(tree, target, closest = tree.value){
  if(tree === null) return closest;
  if(Math.abs(tree.value - target) < Math.abs(closest - target)) closest = tree.value;
  if(tree.value > target) return findClosestValueInBstHelper(tree.left, target, closest);
  else if(tree.value < target) return findClosestValueInBstHelper(tree.right, target, closest);
  else {
    return closest;
  }
}
