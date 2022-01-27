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
