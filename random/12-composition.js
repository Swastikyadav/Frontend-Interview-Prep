// Write a composition polyfill for following function:

// Pipe: Evaluates from left to right.
// Compose: Evaluates from right to left.

function addFive(a) {
    return a + 5;
}

function substractTwo(a) {
    return a - 2;
}

function multiplyFour(a) {
    return a * 4;
}

function compose(...fns) {
    return function(iv) {
        return fns.reduceRight((acc, fn) => {
            acc = fn(acc);
            return acc;
        }, iv);
    }    
}

console.log(compose(addFive, substractTwo, multiplyFour)(5));
// const evaluate = compose(addFive, susbstractTwo, multiplyFour);
// console.log(evaluate(5)); // 23