// Algorithms Challenge
// FVCproductions
// MakerSquare

// Along with this challenge. Submit a solution to the following challenge:
// Given an array of integers, find the smallest difference between any two elements of the array. For example:

var findSmallestDifference = function(arr) {

  // Your code goes here
  
  // First, we sort the array with the built in sort function JavaScript has.
  // This is so that we can compare each number linearly and the algorithm becomes more efficient.
  
  arr.sort(); // array looks like this now: [-200, 100, 300, 500, 990, 1000]

  // We will then define and initialize a variable called 'diff' to the largest number in the array
  // This is so that we can then find the smallest difference between any 2 numbers by continuously comparing.
  
  // It can't just be arr.length because we are trying to get the value of the last position (which is the largest number since we sorted it) and not the overall size.
  
  var diff = arr[arr.length-1]; //initially equal to 1000 then
  
  // We will now iterate through the entire array starting from 0 until the end of the array (or array.length) and have it continuously increase by 1.
  
  for(var i = 0; i < arr.length; i++) {

  	// Now we're going to also use an inside for loop so that we make sure to compare every single number with every other number
  	// One for loop inside of another ensures that every number will be compared so that we can find the minimum distance

  	for (var j = i + 1; j < arr.length; j++) {

  		// Here, we are using the abs (or absolute) function in JavaScript's Math class and assining it a variable called temp (for temporary)
  		// The variable temp is being assigned to the absolute value (so there's no negative difference) subtraction of each array element in each of the for loops
  		// Ergo, going through each element in the array and finding the difference between each element - linearly - since it's sorted.
  	
  		var temp = Math.abs(arr[i]-arr[j]);

  		// To find the smallest variable we have to compare and contrast each each number with the other, so we just use a simple if statement
  		// Since we already pre-defined minDiff to be the largest number, we can use that as our continuous comparison 
  		// We are reassigning the minDiff in accordance to our results in the for loop
  		
  		if (temp <= diff) {

  			diff = temp;
  		
  		}

  	}
  
  }

  // returning the result - which is the minimum difference between any two elements in the arrray
  
  return diff; 

}

var result = findSmallestDifference([100, 500, 300, 1000, -200, 990]);

// This code should print out 10 because the different between 1000 and 990 is 10 and there are no pairs that have a smaller difference.
// The answer is 10 for this example because the difference between 1000 and 990 is 10

console.log(result); 
