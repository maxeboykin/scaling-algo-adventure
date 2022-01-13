/*
A vertex is a node in a graph. V = vertex. edges are the connected lines in teh graph. e stands for edges.
Depth-firstSearch method on a node class traverses a tree navigating from left to right and stores all the nodes
names each time it enteres a new node/vertex. Also apparently you can use stack to traverse via depth first search.
Time complexity is O(v+e) since for every vertex we enter we also have a for loop for each of the edges/children.
Space complexity is O(v) since the call stack will be at most O(v) if its a graph with all of vertices being single children of each other. a -> b--> c --> d instead of
    a
    /\
   b  c
   /\ /\
  d e f g
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(name);
    return this;
  }

  depthFirstSearch(array = []){
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++){
      let child = this.children[i];
      child.depthFirstSearch(array);
    }
    return array;
  }
}


function hasSingleCycle(array){
  let i = 0;
  let numIterations = 0;
  while(numIterations < array.length){
    if(array[i] === 'Infinity') return false;
    let move = array[i];
    array[i] = 'Infinity';
    i = (i+move) % array.length;
    if(i<0) i = i + array.length;
    numIterations++;
  }]if(i !== 0 || numIterations !== array.length) return false;

  return true;
}
