function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	if (num === 0) return a;
	if (num === 1) return b;
	//iterate till the given num
	for(let i=2; i<num; i++){
		//sum of last two numbers 
		let c=a+b;
		//asign the last value to first
		a=b;
		//asign the sum to the last
		b=c;
	}
	//if the num is 0 return a else return b
	return b;
}

module.exports = fibonacci;
