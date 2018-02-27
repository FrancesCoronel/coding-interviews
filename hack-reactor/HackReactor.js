//fvcproductions
//august 4, 2014

var myArray = ["FVC productions", "sweetcoronel"]; //declaring array with two strings: name, skype handle

//function that splits given string with a space as delimiter and returns separate strings instead
//i.e. "FVC productions" returns "FVC", "productions"

function cutName (myString) { //a String is supposed to be called

	var split = myString.split(" ");
	return split;

}

var myData = {}; //declaring object called myData as empty

myData.fullName = cutName(myArray[0]); //full name initialized as first element in myArray
myData.skype = myArray[1]; //skype handle initialized as second element in array
myData.github = "fvcproductions"; //github handle initialized

console.log(myData); //printing out data in object called myData

HackReactor.showApp(); //shows application window for Hack Reactor's bootcamp