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
	let matches = query.match(/(\d[\d\.]*)/g);
	let sum = 0;
	if (matches!= null){
		for (let i = 0; i < matches.length; i++) {
			sum += parseInt(matches[i]);
		}
	}
    return (sum).toString();
  }

  if (query.toLowerCase().includes("multiplied")) {
	let matches = query.match(/(\d[\d\.]*)/g);
	let product = 0;
	if (matches!= null){
		for (let i = 0; i < matches.length; i++) {
			product *= parseInt(matches[i]);
		}
	}
	console.log(product)
    return (product).toString();
  }

  if (query.toLowerCase().includes("a square and a cube")) {
	let afterColon = query.split(":")[1];
	let nums = afterColon.substring(1, afterColon.length - 1) 
	let numS = nums.split(",");
	let numV = [];
	for (let i = 0; i < nums.length; i++) {
		let temp = parseInt(numS[i]);
		numV.push(temp);
	}	  
	let result = numV[0];
	for (let i = 1; i < numV.length; i++) {
		const sixthRoot = Math.pow(numV[0], 1/6);
    	if (Number.isInteger(sixthRoot)){
			result = numV[0];
		}
	}
	console.log(result);
    return (result).toString();
  }
  

  return "";
}
