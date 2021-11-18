/* funcion scope vs block scope */

if (5 > 4) {
  var secret = '12345';
}
secret; // We have access to the varible outside the if-statement scope

function a() {
  var anotherSecret = '32152';
}

// Functions scope can't be accessed from outside
// Most other programming languages use block scope so every scope is blocked from outside

/* ES6 */
if (2 < 3) {
  let blockScopeSecret = 'asdasdasd';
  const secret = 'jdksk123';

  // With ES6 and const and let we have created block scope
}


/* Exercise: Block Scope */
function loop() {
  for(var i = 0; i < 5; i++) {
    // This is not block scoped because of var
    console.log(i); // log i 0-4
  }

  // Can access the i outside
  console.log('final', i); // log 'final' and 5 because i becomes 5 before the loop stops
}
loop();

function anotherLoop() {
  for(let i = 0; i < 5; i++) {
    // This is now block scoped because of let
    console.log(i); // log i 0-4
  }

  // Can't acces the i
  console.log('final', i);
}
anotherLoop();
