#optimusPrime come to save the day?
#oh yes.
#fvcproductions

import math

def optimusPrime(number):
	if number < 2:
		return False
	for i in range(2,number):
		if not number % i:
			return False
	return True  


#thankyoucodecademy!#

print(optimusPrime(10));