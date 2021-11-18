/* Lexical Environtment */
function printName() {
  return 'Dante Ulinder';
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

console.log(sayMyName());

/*
  Lexical environtment just means where is the code written e.g. global, inside a function etc.
  Lexical scope is in which scope some data is written.
  Dynamic scope is where we run our function.
*/
