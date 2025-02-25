export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "vallin";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "vickyzhu";
  }

  if (query.toLowerCase().includes("largest")) {
	let afterColon = query.split(":")[1];
	let nums = afterColon.substring(1, afterColon.length - 1) 
	let numS = nums.split(",");
	let numV = [];
	for (let i = 0; i < nums.length; i++) {
		let temp = parseInt(numS[i]);
		numV.push(temp);
	}	  
	let max = numV[0];
	for (let i = 1; i < numV.length; i++) {
		if (numV[i] > max) {
			max = numV[i];
		}
	}
	console.log(max);
    return (max).toString();
  }

  if (query.toLowerCase().includes("plus")) {
	const numbers = [];
	const words = query.split(" ");

	for (const word of words) {
		const num = Number(word); // Convert the word to a number
		if (!Number.isNaN(num)) { // Now it's safe to check if it's NaN
			numbers.push(num);
		}
	}
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log(sum)
    return (sum).toString();
  }

  return "";
}
