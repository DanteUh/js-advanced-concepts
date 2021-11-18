/* 'this' is the object that the function is a property of */

console.log(this); // In global 'this' referes to the window object

function a() {
  console.log(this); // still window
}
a();

function b() {
  'use strict';
  console.log(this);
}
b(); // now this is undefined

// 1: gives methods access to their object
const myObj = {
  name: 'Erik',
  sing() {
    console.log(this); // now 'this' referes to the object the function is part of instead

    return 'la-la-la-' + this.name;
  },
  singAgain() {
    return this.sing() + '!';
  }
};

console.log(myObj.singAgain());


// 2: execute same code for multiple objects
function importantPerson() {
  console.log(this.name);
}

const name = 'Sunny';

const obj1 = {
  name: 'Josie',
  importantPerson
}

const obj2 = {
  name: 'Johan',
  importantPerson
}

obj2.importantPerson();



/* Excercise: Dynamic vs Lexical scope */
const x = function() {
  console.log('x', this);

  const b = function() {
    console.log('b', this);

    const c = {
      hi: function() {
        console.log('c', this)
    }}
    c.hi(); // c, c(Object)
  }
  b();
}

x();
// a, window
// b, window


/* this dosn't work */
const obj = {
  name: 'Johny',
  sing() {
    console.log('a', this); // this referes to the object

    const anotherFunc = function() {
      console.log('b', this); // here this refers to the window object
    }
    anotherFunc(); // gets called inside the sing
  }
}

obj.sing();

/*
  this dosn't care where it's written just how it is called.
  anotherFunc dosn't get called from obj but from sing and this defaults to window.
  if we use arrow function that auto binds this to the object.
*/

const newObj = {
  name: 'Johny',
  sing() {
    console.log('new a', this); // this referes to the newObj

    const self = this; // another way to solve this problem because here this refers to the object so we can use it inside the anotherFunction
    const anotherFunc = () => {
      console.log('self', self);
      console.log('new b', this); // this now refers to newObj
    }
    anotherFunc(); // gets called inside the sing
  }
}

newObj.sing();
