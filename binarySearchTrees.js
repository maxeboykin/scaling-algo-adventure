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

/*
In a BST, a nodse value must be greater than the nodes to the left
and less than or equal to the nodes to the right. All nodes should
satisfy this property.
*/

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    if(value < this.value) {
      if(this.left === null) this.left = new BST(value);
      else {
        this.left.insert(value);
      }
    } else {
      if(this.right === null) this.right = new BST(value);
      else {
        this.right.insert(value);
      }
    }
    return this;
  }

  contains(value){
    if(this.value === value) return true;
    if(value < this.value){
      if(this.left === null) return false;
      else {
        return this.left.contains(value);
      }
    }
    else if(value> this.value){
      if(this.right === null) return false;
      else {
         return this.right.contains(value);
      }
    }
  }

  remove(value, parent = null) {
    if(value < this.value) { //first step is to find the node you are looking for
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if(value > this.value) {
      if(this.right !== null) {
        this.right.remove(value, this);
      }
    } else { //after you find the node you are trying to rmeove
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue(); //get smallest value on the right side of the BST and assign to current node
        //we want to remove the smallest value of the right tree and move
        //that value to our current node "removing it"
        this.right.remove(this.value, this); //need to remove the node with the value you just grabbed.
      } else if (parent === null) { //this is the root node case with only one child node
        if(this.left !== null) { //watch condition on line 85, left or right has to be null . takes left first to satisfy BST criteria.
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          //this is a single node tree
        }
        //below are cases if the current node, the one you are removing has at least one null value as a child
      } else if (parent.left === this) {//if the parent nodes left child is this
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) { //take the left first both times since its less than the right and a root node has to be greater than left and less than anything to the right to keep it a BST. you will lose this node when you connect the parent, hence removing it
        parent.right = this.left !== null ? this.left : this.right;
      }
    }
    return this;
  }

getMinValue(){
  //base case
  if(this.left === null) return this.value
  else {
    return this.left.getMinValue();
  }
}

getMaxValue(){
  if(this.right === null) return this.value;
  else {
    return this.right.getMaxValue();
  }
}

}
