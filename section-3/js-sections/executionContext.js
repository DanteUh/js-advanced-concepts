/* Execution Context */
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
  An execution context is created everytime we call a function and push it to the call stack.
  Under the hood a global() execution context is created.
  The global() gives us the Global Object and .this

  After the browser has created the Global Execution Context it runs the code that we wrote.
*/
