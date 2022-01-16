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

/*
Comments for riverSizes

*/




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

function checkNeighbors(i, j, matrix, visited){
	const unvisitedNeighbors = []; //check left, up, right, down
	//check up
	if(i > 0 && !visited[i-1][j]) unvisitedNeighbors.push([i-1, j]);
	//check down
	if(i < matrix.length -1 && !visited[i+1,j]) unvisitedNeighbors.push([i+1, j]);
	//check left
	if ( j > 0 && !visited[i][j-1]) unvisitedNeighbors.push([i, j-1]);
	//check right
	if(j < matrix[0].length-1 && !visited[i][j+1]) unvisitedNeighbors.push([i, j+1]);
	return unvisitedNeighbors;
}

/*
Comments for cycleInGraph

*/


const [WHITE, GREY, BLACK] = [0, 1, 2];

function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
	let colors = new Array(numberOfNodes).fill(WHITE);

	//go through each node via depth first search
	for(let node = 0; node < numberOfNodes; node++){

		let result = traverseNodes(node, edges, colors);

		if(result === true) return true;
	}

  return false;
}

function traverseNodes(node, edges, colors){
	colors[node] = GREY;

	let neighborsSet = edges[node]; // do all these checks before depth first Search
	for(let neighbor of neighborsSet){
		if(colors[neighbor] === GREY) return true;
		if(colors[neighbor] === BLACK) continue;
		let result = traverseNodes(neighbor, edges, colors); //DPS
		if(result === true) return true;
	}
	colors[node] = BLACK;
	return false;
}

function removeIslands(matrix) {
	let visited = matrix.map(row => row.map(value => false));

  return [];
}

function traverseImage(i, j, matrix, visited){
	const nodesToExplore = [[i,j]]
	while(nodesToExplore.length > 0){
		let currentNode = nodesToExplore.pop();
		i = currentNode[0];
		j = currentNode[1];
		visited[i][j] = true;
		if((matrix[i][j]) === 0) continue;
		const [neighboringIslands, oneAtBorder] = checkNeighbors(i, j, matrix, visited);
		for(let neighbor of neighboringIslands){
			nodesToExplore.push(neighbor);
		}
	}
}

function checkNeighbors(i, j, matrix, visited){
	let unvisitedNeighbors = [];
	let oneAtBorder = false;
	//if it is 1 and its part of this island and its on the border it should remove a special case
	if(i > 0 && !visited[i - 1][j]){
		unvisitedNeighbors.push([i - 1, j]);
		if ((i-1 === 0 || j === 0 || j === matrix.length -1) && matrix[i - 1][j] === 1){
			oneAtBorder = true;
		}
	}
	if(i < matrix.length -1 && !visited[i+1][j]){
		unvisitedNeighbors.push([i+1, j]);
		if ((i+1 === matrix.length -1 || j === 0 || j === matrix.length -1) && matrix[i + 1][j] === 1){
			oneAtBorder = true;
		}
	}

	if(j > 0 && !visited[i][j-1]){
		unvisitedNeighbors.push([i, j-1]);
		if ((i === 0 || i === matrix[0].length -1 || j-1 === 0) && matrix[i][j-1] === 1){
			oneAtBorder = true;
		}
	}
	if(j < matrix.length -1 && !visited[i][j+1]){
		unvisitedNeighbors.push([i+1, j]);
		if ((i === 0 || i === matrix[0].length -1 || j+1 === matrix.length -1) && matrix[i][j+1] === 1){
			oneAtBorder = true;
		}
	}

	return [unvisitedNeighbors, oneAtBorder];
}
