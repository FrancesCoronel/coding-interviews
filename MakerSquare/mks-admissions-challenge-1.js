/*

  FVCproductions
  Makersquare Admissions Challenge
  mks-admissions-challenge-1.js
  
  To include: 
    - Attachment of your 'mks-admissions-challenge-1.js' file.
    - Attachment of your resume or a link to your LinkedIn profile

*/

///// *** MY LINKEDIN *** /////

/* http://linkedin.com/in/fvcproductions */

// Exercise #1.1
// Write a function yell that takes a string and console logs that string in all caps.

var yell = function (string) {
  
  string = string.toUpperCase();
  console.log(string);

}

yell("I want to learn.");

// Exercise #1.2
// Write a function addFive such that the following code works:

var addFive = function (x) {
  
  x += 5;
  return x;

}

console.log("addFive(3) should be 8:", addFive(3));
console.log("addFive(6) should be 11:", addFive(6));

// Exercise #1.3
// Write a function divideBy such that the following code works:

var divideBy = function (num1, num2) {

  result = num1/num2;
  return result;

}

var result = divideBy(50, 2);
console.log('Result should be 25:', result);

result = divideBy(40, 10);
console.log('Result should be 4:', result);

result = divideBy(99, 3);
console.log('Result should be 33:', result);

// Exercise #2.1
// Fix the following code (1 syntax error) so that the function returns 'SLAP':

var slap = function() {

  return 'SLAP';

};

slap();

// Exercise #2.2
//Fix the following code (1 syntax error) so that the function runs:

var poke = function (name) {

  return name + ' reproaches your behavior.';

};

poke('Billy');

// Exercise #2.3
// Fix the following code (2 logic errors) so that the function returns a sensible message:

var doubleIt = function (x) {
  
  return x + ' times two is ' + (x*x);

};

doubleIt(8);

// Exercise #2.4
// Fix the following code (1 logic error) so that the function runs:

var greet = function (name) {

  return "Welcome, " + name;

};

greet('Bob');

// Exercise #2.5
// Fix the following code (1 syntax error, 1 logic error) so that the function runs:

var poke = function () {
  
  console.log('ow');

};

poke();

// Exercise #2.6
// Fix the following code (1 syntax error, 1 logic error) so that the code alert the correct message:

var askify = function (request) {

  return "Can you please " + request + "?";

};

var result = askify('fix me');
console.log('Result should be "Can you please fix me?":', result);

// Exercise #2.7
// Fix the following code (2 syntax errors) so that the function runs:

var multiplyString = function (string, times) {
  
  if (times === 0) {
    
    return '';
  
  }
  
  else {
  
    return string + ' ' + multiplyString(string, (times - 1)); // recursion, noice.
  
  }

};

var result = multiplyString('Mike', 5);
console.log(result);

// Exercise #3.1
// Write a JavaScript program that prompts the user for a number:
// If the number is divisible by 7, alert a lucky message
// If the number is even, alert that they are an even steven.

var lucky = function(number) {

  if (number % 7 === 0)
    console.log("Lucky you!");
  else
    console.log("You're even steven!");

}

lucky(10);
lucky(49);

// Exercise #3.2
// Write a JavaScript program that prompts the user for a password of your choice:
// If correct, it alerts an access granted message
// If not correct, it alerts an access denied message
// Only allow the user to try up to three times.

var password = function() {

  var actual = "up.to.no.good";

  var count = 0;

  var bool = false;
  
  while (count < 3 && bool === false) {
    
    var attempt = prompt("Type in the password: ");
    
    if (actual === attempt) {
    
      console.log("Access granted.");
      bool = true;
    
    }
    
    else {
    
      console.log("Access denied.");
      count++;
    
    }
  
  }

}

password();

// Exercise #3.3
// Write a JavaScript program that prompts three times, 
// and then shows a single alert with all three strings 
// in the opposite order they were prompted.

var reverse = function() {

  var string1 = prompt("First string: ");
  var string2 = prompt("Second string: ");
  var string3 = prompt("Third string: ");
  console.log(string3 + " " + string2 + " " + string1)

}

reverse();

// Exercise #4
// Write a function welcome that:
// Takes two parameters name1 and name2
// If two parameters are present, returns "Welcome, #{name1} and #{name2}!"
// If only one parameter is present, returns "Welcome, #{name1}!"
// Remember JavaScript does not have string interprolation, so you can't just use "#{name1}".

var welcome = function(name1, name2) { // does take into case neither names are undefined

  if (typeof name2 === 'undefined') { // case 1: name 1 is undefined aka, only 1 parameter is defined

    return "Welcome, " + name1 + "!";
  }

  else { // case 2: both names are defined aka both parameters are defined
    return "Welcome, " + name1 + " and " + name2 + "!";
  
  }

}

var result = welcome('Alice', 'Bob'); // case 2
console.log('Result should be "Welcome, Alice and Bob!"', result);

var result = welcome('Alice'); // case
console.log('Result should be "Welcome, Alice!"', result);
