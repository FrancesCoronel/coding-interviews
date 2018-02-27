var stringAddition = function(str) {
	var count = 0;
	var arr = str.match(/\d+/g);
	if (arr) {
		arr.forEach(function(n) {
			count += Number(n);
		});
	}
	return count;
};

console.log(stringAddition("22 Fast 22 Furious")); //44
console.log(stringAddition("2 Fast 2 Furious")); //476
console.log(stringAddition("2 F457 2 FUR10U5")); //4