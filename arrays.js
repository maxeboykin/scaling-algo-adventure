function isValidSubsequence(array, sequence) {
	let seqIdx = 0;
  for (const value of array){
		if (value === sequence[seqIdx]){
			seqIdx++;
		}
}
	return (seqIdx === sequence.length);

}



function tournamentWinner(competitions, results) {
	let dict = {};
	let currentBestTeam = '';
	dict[currentBestTeam] = 0;
  for(let i = 0; i < competitions.length; i++){
		let game = competitions[i];
		let whoLost = results[i];
		let whoWon = 1- whoLost;
		let winner =  game[whoWon];
		let loser = game[whoLost];
		if(dict[winner]){
			dict[winner] = dict[winner] + 3;
			if(dict[winner] >= dict[currentBestTeam]) {
				currentBestTeam = winner;
				dict[currentBestTeam] = dict[winner];
			}
		} else {
			dict[winner] = 3;
			if(dict[winner] >= dict[currentBestTeam]) {
				currentBestTeam = winner;
				dict[currentBestTeam] = dict[winner];
			}
		}
		if(!dict[loser]) dict[loser] = 0;
	}

  return currentBestTeam;
}

function threeNumberSum(array, targetSum) {
	let returnArr = [];
  array.sort((a,b) => a - b);

	for (let i = 0; i < array.length-2; i++){
		let left = i +1;
		let right = array.length-1;
		while (left < right) {
			let curSum = array[left] + array[i] + array[right];
			if(curSum === targetSum){
				returnArr.push([array[i], array[left], array[right]]);
				left++;
				right--;
			}
			else if(curSum < targetSum) left++;
			else if (curSum > targetSum) right--;
	}
	}
return returnArr;
}

function nonConstructibleChange(coins) {
  coins.sort((a,b) => a - b);
	let currentChangeCreated = 0;
	for(coin of coins){
		if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
	currentChangeCreated += coin;
	}
  return currentChangeCreated + 1; //if you hit the end of the coins list
}

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let resultArr = [];
	let smallestDif = Infinity;
	let current = Infinity;
	let left = 0;
	let right = 0;
	while(left < arrayOne.length && right < arrayTwo.length){
		let firstNum = arrayOne[left];
		let secondNum = arrayTwo[right];
	if(firstNum < secondNum){
		current = secondNum - firstNum;
		left++;
	}
	else if(secondNum < firstNum){
		current = firstNum - secondNum;
		right++;
	}
		else {
			return [firstNum, secondNum];
		}
		if(smallestDif > current){
			 resultArr = [firstNum,secondNum]
			 smallestDif = current;
			}
}
	return resultArr;
}
