// Global scope

function sayMyName() {
  // local scope

  var a = 'a' ;
  console.log(a);

  return function findName() {
    var b = 'b';
    console.log(a, b);

    return function printName() {
      var c = 'c';
      console.log(a, b, c); // Has access to all scopes

      return 'Dante Ulinder';
    }
  }
}

console.log(sayMyName()); // Function: findName
console.log(sayMyName()()); // Function: printName
console.log(sayMyName()()()); // 'Dante Ulinder'

/*
  All scopes know the information of it's parent scope.
  This is why all of the functions has access to all the global scope variables.
  Even before ruunning the code JS knows what scopes is chained together and have acces to certain data.
*/



/* Exercise: JS is Weird */

// Height is just declared by JS in global
// We can 'use strict' to avoid this
function weird() {
  'use strict';
  // Leakage of global variables
  const height = 50;
  console.log(height);
}

weird();


// doodle is not part of this scope
// it gets created in it's own context
var heyhey = function doodle() {
  // we can access the doodle here
  console.log('Heyhey');
}

heyhey();
doodle(); // doodle is not defined
