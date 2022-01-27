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
