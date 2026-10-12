Anonymous
//Anonymous function created as an expression. 
(function () {});

//Created as an arrow funciton. 
() => {};

// -------------------
// Named
function ben() {}

// -------------------
//Expression.
(function ben () {});

// -----------------------
//Arrow
const ben = () => {};

// ------------------------
// Inner
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square (a) + square(b);
}

// Same thing, but with arrow functions.
const addSquare2 = (a, b) => {
    const square = (x) => x * x;
    return square (a) + square(b);
}

// ----------
// Recursive
function loop (x) {
    if (x >= 10) return;
    loop(x + 1);
}


const loop2 = (x) => {
    if (x >= 10) return;
    loop2(x + 1);
};

// ------------// A recursive function can also look like this;
def recurse (x):
    if x > 0:
        print (x)
        recurse (x - 1)

recurse(10)
// Output will be numbers from 10 to 1 printed in descending order.

// ------------------------------------------------
// Immediately Invoked Function Expression. (IIFE)
(function ben () {
    console.log('Hello')
})();

(function corolla () {
    console.log('Hello Corolla')
})();

( () => console.log('Hello Corolla'))();

// Declared functions can't be called this way, because IIFE's must be function expressions. 
