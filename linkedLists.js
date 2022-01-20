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

/*
Creating an new doubly linked list
*/

// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if(this.head === null) {
			this.head = node;
			this.tail = node;
			return
		}
		this.insertBefore(this.head, node);

  }

  setTail(node) {
    if(this.tail === null) {
			this.setHead(node);
			return;
		}
		this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
		this.remove(nodeToInsert);
		nodeToInsert.prev = node.prev;
		nodeToInsert.next = node;
		if(node.prev === null){
			this.head = nodeToInsert;
		} else {
			node.prev.next = nodeToInsert;
		}
		node.prev = nodeToInsert;

  }

  insertAfter(node, nodeToInsert) {
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
     this.remove(nodeToInsert);
     nodeToInsert.next = node.next;
     nodeToInsert.prev = node;
     if(node.next === null){
       this.tail = nodeToInsert;
     } else {
       node.next.prev = nodeToInsert;
     }
     node.next = nodeToInsert;
   }

   insertAtPosition(position, nodeToInsert) {
    if(position === 1) {
			this.setHead(nodeToInsert);
			return;
		}
		let currentPosition = 1;
		let currentNode = this.head;
		while(currentNode !== null && currentPosition++ !== position) currentNode = currentNode.next;
				if(currentNode === null) this.setTail(nodeToInsert); // means that the position we are inserting is already after the array.
		else{
			this.insertBefore(currentNode, nodeToInsert);
		}
		}

    removeNodesWithValue(target) {
      let currentNode = this.head;
      while(currentNode !== null){
        const checkNode = currentNode;
        currentNode = currentNode.next; //always get the next node in order to keep checking if theere is another node of taht value
        if(checkNode.value === target) this.remove(checkNode);
      }
    }

    remove(node) {
      if(this.head === node) this.head = this.head.next;
      if(this.tail === node) this.tail = this.tail.prev;
      let prevNode = node.prev;
      let nextNode = node.next;
        if(prevNode !== null) prevNode.next = nextNode;
        if(nextNode !== null) nextNode.prev = prevNode;
      node.next = null;
      node.prev = null;
    }
