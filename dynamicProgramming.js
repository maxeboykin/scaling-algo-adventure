function maxSubsetSumNoAdjacent(array) {
  if(!array.length) return 0;
	if(array.length === 1) return array[0];
	const maxSums = array.slice();
	maxSums[1] = Math.max(array[0], array[1]);
	for(let i = 2; i < array.length; i++){
		maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + array[i]);
	}
	return maxSums[maxSums.length -1];
}


function numberOfWaysToMakeChange(n, denoms) {
  let ways = new Array(n +1).fill(0);
	ways[0] = 1; // at 0 there is one way of getting it ... not doing anything
	for(let denom of  denoms){
		for(let amount = 1; amount < n+1; amount++){
			if(denom <= amount){
				ways[amount] += ways[amount - denom]
			}
		}
	}
	return ways[n];
}
