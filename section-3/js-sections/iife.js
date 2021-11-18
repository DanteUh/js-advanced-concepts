/* IIFE (instantly invoked function expression) */

/*
  Global Variables is usally a bad idea because it takes up memory and polluting the namespace.
  It's also becomes very hard to maintain because of varible collition etc.
*/

// With this we can create a namescpace to avoid polluting the global
// This is a design pattern used, for e.g. jQuery, before ES modules
const number = 123;

const greeting = (function(num) {
  const hello = 'Hello! ' + num;

  const sayHello = () => {
    console.log(hello);
  };

  return {
    sayHello,
    num: 'Hahaha'
  }
})(number);
// We can send in param from global

greeting.sayHello();
console.log(greeting.num) // We can also overwrite the param

/* We store a IIFE that returns an object with all the things we want to make public */

