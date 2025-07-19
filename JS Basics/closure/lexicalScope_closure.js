function outerFunction(outerVariable) {
    const outerConstant = "I am from outer scope";

    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Outer Constant: ${outerConstant}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

// Create a closure
const closureFunction = outerFunction("Outer Value");

// Call the closure with an inner variable
closureFunction("Inner Value");

// Output:
// Outer Variable: Outer Value
// Outer Constant: I am from outer scope
// Inner Variable: Inner Value