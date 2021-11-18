/* Hoisting is a behaviour in JS where var or function declaration gets pushed to the top of our scope */
console.log('1-------');
console.log(hello); // gets assigned undefined before we have assigned the actual value
test(); // Will run function and console.log the text
// myFunc(); // is not a function

var hello = "Hey"; // Only works with var and not const / let

// function expression
var myFunc = function() {
  console.log('my function');
}

// function declaration
function test() {
  console.log("Random test");
}

/*
  In the creation phase, JS hoists var and functions.
  For const and let it dosn't get hoisted.
  This is why we like const and let.
*/


/* Hoisting exercise 2 */
var favouriteFood = 'grapes'; // same place

var foodThoughts = function() { // same place
  console.log('Original favourite food: ' + favouriteFood); // log undefined

  var favouriteFood = "sushi"; // hoisted (undefined) before we get to this line and the correct value is assigned

  console.log('New favourite food: ' + favouriteFood); // log sushi
};

foodThoughts();
// Output:
// 'Original favourite food: undefined'
// 'New favourite food: sushi'