// Implement an infinite add currying function.

// console.log(add(5)(2)(4)(5)()); // should return 16

// Solution #1: My original solution
function add(n) {
    let result = n; // All nested returned function will remember result value due to clousre. And keep adding their own value to it.
    return function returnFn(a) {
        if(a) {
            result += a;
            return returnFn;
        } else {
            return result;
        }
    }
    // -----------Brute Force------------
    // return function(n2) {
    //    return function(n3) {
    //         return function(n4) {
    //             return function() {
    //                 return n1 + n2 + n3 + n4;
    //             }
    //         }
    //    }
    // }
};

// Solution #2: Same thing but different
function add2(a) {
    return function(b) {
        if (b) return add(a + b);
        return a;
    }
}

console.log(add2(5)(2)(4)(5)(3)());