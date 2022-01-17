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


/*
Comments for removeIslands
Comments
*/


function removeIslands(matrix) {

	const visitedOnes = matrix.map(row => row.map(value => false));

  // loop through the border of the image
	for (let row = 0; row < matrix.length; row++){
		for (let col = 0; col < matrix[0].length; col++){
		const rowIsBorder = (row === 0 || row === matrix.length-1);
	  const colIsBorder = (col === 0 || col === matrix[0].length -1);
		const isBorder = (rowIsBorder || colIsBorder);
			if (!isBorder) continue;
			if(matrix[row][col] === 1){
				getOneNeighbors(row, col, matrix, visitedOnes);
			//visitedOnes[row][col] = true;
			}
		}
	}
	cleanUpOnes(matrix, visitedOnes);
  return matrix;
}

function getOneNeighbors(row, col, matrix, visitedOnes){
	let nodeList = [[row,col]];
	while(nodeList.length > 0){
		let currentNode = nodeList.pop();
		let row = currentNode[0];
		let col = currentNode[1];
		if(matrix[row][col] === 0)continue; //if its not a 1
		if(visitedOnes[row][col]) continue; //if visited before
		visitedOnes[row][col] = true;
		let neighborsArray = findNeighbors(row, col, matrix, visitedOnes);
		for (let neighbor of neighborsArray){
			nodeList.push(neighbor);
		}
	}
}

function findNeighbors(row, col, matrix, visitedOnes){
	let currentNeighbors = [];
	let rowMax = matrix.length;
	let colMax = matrix[0].length;
	if(row > 0 && !visitedOnes[row-1][col]) currentNeighbors.push([row-1,col]); //up
	if(row < rowMax-1 && !visitedOnes[row+1][col]) currentNeighbors.push([row+1, col]) //down
	if(col > 0 && !visitedOnes[row][col-1]) currentNeighbors.push([row, col-1]); //left
	if(col < colMax -1 && !visitedOnes[row][col+1]) currentNeighbors.push([row, col+1])//right
	return currentNeighbors;
}


function cleanUpOnes(matrix, visitedOnes){
	let rowMax = matrix.length;
	let colMax = matrix[0].length;
	for (let row = 0; row < rowMax; row++){
		for (let col = 0; col < colMax; col++){
			if(!visitedOnes[row][col]) matrix[row][col] = 0;
		}
	}
}
