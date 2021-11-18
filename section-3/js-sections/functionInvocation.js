// Function Expression gets defined when the function is invoked (dosn't get hoisted)
const canada = () => {
  console.log('Cold');
}

// Function Declaration gets defined at parse time (gets hoisted)
function india() {
  console.log(arguments); // We have arguments but it's undefined
  console.log('warm');
}

// Function Invocation/Call/Execution
canada();
india();

function marry(person1, person2) {
  // We get the arguments Object when we run a function for the function scope
  // argumments is weird and not really good to use so we can use other techniques instead
  console.log(arguments);
  return `${person1} is now married to ${person2}`;
}

console.log(marry('Rick', 'Jane'));

// ES6 techniques
function marry2(...args) {
  console.log(args);
  return `${args[0]} is now married to ${args[1]}`;
}

console.log(marry2('Erik', 'Sandra'));
