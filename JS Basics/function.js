function add(num1, num2) {
    console.log(num1 + num2);
}
add(2, 5);
add(2, '5');
add(8, 'k');

function calculatecartprice(...num) { // rest operator
    return num;
}
console.log(calculatecartprice(2, 3, 4, 5, 6, 7, 8, 9));

function calculateCartPrice(num1, num2, ...num) { // corrected function name
    return num;
}
console.log(calculateCartPrice(2, 3, 4, 5, 6, 7, 8, 9));

// Variable hoisting example
// console.log(a); // Uncommenting this will throw an error because `a` is not hoisted
// const a = function () {
//     console.log('hello');
// };

console.log(this); // window object for browser and global object for Node.js

function non() {
    let username = 'srijan';
    console.log(this.username); // undefined because `this` refers to the global object
}
non();

const non1 = () => {
    let username = 'srijan';
    console.log(this.username); // undefined because arrow functions don't bind `this`
};
non1();

const non2 = () => {
    let username = 'srijan';
    console.log(this); // `this` refers to the enclosing lexical scope
};
non2();

const add1 = (num1) => {
    console.log(num1 + 1);
};
add1(9); // Moved after declaration

const add2 = (num1) => num1 + 2; // implicit return
console.log(add2(9));

const abc = () => ({ username: 'Srijan' }); // implicit return with parentheses
console.log(abc());

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log('DB CONNECTED');
})();

(() => {
    console.log('DB CONNECTED 2');
})();

//Nullish Coalescing Operator
const a = null;
const b = 0;
const c = 5;
const d = a ?? b ?? c; // will return 0 because `a` is null and `b` is 0
console.log(d); // 0