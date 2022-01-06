/*
First approach can be to sort through linked list and have a memoization object storing values already collected and if a next Node has a
repetitive value then have a while loop sorting through until the next node is distinct and make current node . next value to that node and keep going. This would be O(N) space.

The answer below runs at O(N) time due to having to go through
the entire linkedlist and then at O(1) space. Just resetting .next
values.
Maybe discuss the two whiles aspect.
*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while(currentNode!==null){
    let nextDistinctNode = currentNode.next;
    while(currentNode.value === nextDistinctNode.value){
      nextDistinctNode = nextDistinctNode.next;
    }
    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }
  return linkedList;
}
