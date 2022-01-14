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
  }
  if(i !== 0 || numIterations !== array.length) return false;

  return true;
}

breadthFirstSearch(array =[]) {
  const queue = [this];
  while(queue.length > 0){
    let currentNode = queue.shift();
    array.push(currentNode.name);
    for(let child of currentNode.children){
      queue.push(child);
    }
  }
  return array;
}


function riverSizes(matrix) {
	const sizes = [];
	const visited = matrix.map(row => row.map(value => false));

//const visited = createMatrix(matrix.length, matrix[0].length);
for(let i = 0; i < matrix.length; i++){
	//let row = matrix[i];
	for(let j =0; j < matrix[i].length; j++){
		if (visited[i][j]) continue;
		traverseNode(i, j, matrix, visited, sizes);
	}
}
	return sizes;
}

function traverseNode(i, j, matrix, visited, sizes){
	let currentRiverSize = 0;
	const nodesToExplore = [[i, j]];
	while(nodesToExplore.length){
		const currentNode = nodesToExplore.pop();
		i = currentNode[0];
		j = currentNode[1];
		if(visited[i][j]) continue;
		visited[i][j] = true;
		if(matrix[i][j] === 0) continue;
		currentRiverSize++;
		const unvisitedNeighbors = checkNeighbors(i, j, matrix, visited);//adding elements at end of the array if there is a 1 found
		// thats why we use pop on line 20
		for (const neighbor of unvisitedNeighbors) {
			nodesToExplore.push(neighbor);
		}
	}
	if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

