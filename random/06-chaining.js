// Implement this code.

/*
const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
*/

const calc = {
    result: 0, // Could name this `total` directly instead to defining a getter function for total.
    add: function(n) { // Arrow function won't work here as it would point `this` to window object.
        this.result += n;
        return this;
    },
    multiply: function(n) {
        this.result *= n;
        return this; // Returning this would return the calc object itself.
    },
    substract: function(n) {
        this.result -= n
        return this;
    },
    get total() { // Without get keyword, it would return the initialized value (undefined) of result. Or we would have to make `total` a method to be called.
        return this.result;
    },
}

const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result);
console.log(result.total);