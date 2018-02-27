
//the clock is basically like a trig circle
//a circle with 360 degrees

function clock_angles(hour, minute) { //two parameters given

	//angle between minute hand and 12 o'cloc
		//360 * minute / 60
	
	//angle between hour hand and 12 o'clock
		//360 * (hour % 12) / 12 + 360 * (minute / 60) * (1 / 12)
	
	//angle between hour and 12 o'clock
		//(hour angle - minute angle) % 360
	
	//so angle between hour and minute is simplified to following
		//(30 * hour - 5.5 * minute) % 360
	
	var angle = (30 * hour - 5.5 * minute) % 360;
    return angle;

}

/*
 * Complete the function below.
 */
function divisor_checker(divisor_array, low, high) {

	for(i = low; i <= high; i++) {

		for(var i = 1; i < divisor_array.length; i++) {
        
        	if(divisor_array[i] % element == 0) {
        		console.log(i + "all_match");
        	}
        }
}

/*
 * Complete the function below.
 */
def deep_array_sum(arr):
	sum = 0;

	for row in range (len(input)):
	    for col in range(len(input[0])):
	    	sum = sum + input[row][col]

	return sum;

# Complete the function below.


def  sum_of_overlap(x1,  x2,  y1,  y2):
    for i in range(x1,x2):
        for j in range(y1,y2):
            if (i == j):
                sum += i
	return sum

sum_of_overlap(1,10,5,20)



