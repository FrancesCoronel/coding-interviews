//FVCproductions
//Hackbright Academy Application

#include <stdio.h>

int printSixes(int num);

int main() {  
 	printf("All multiples of 6 between 1 and 100 are: \n");
	printSixes(6);
	return 0;  
}

int printSixes(int num) {
	int i;
	for (i = 1; i <= 100; i++)
		if (i % num == 0)
			printf("%d\n", i);
	return 0;
}
