// What will be the output of the following code?

function a() {
    for(var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i); // What is logged?
        }, i * 1000); // i * 1000 will log each value at 1 second interval. If we remove i and keep only 1000 it will log all values at once after 1 second.
    };
}

// a();

// Answer:

/*
The output will be: 3 3 3.
3 will be consoled thrice.

Because i is initialized with var which is function scoped and not block scoped. If-Else is a block not a function.

In the execution context of function a.
- setTimeout goes into task que
- When the call stack is empty, the event loop will check the task que and execute the console inside setTimeout.
- The console will print 3 because i is 3 at that time. The latest value of i at that time is 3.

The solution to this is using `let` instead of `var`. Because let is block scoped so it will be initialized everytime the loop runs.
Means let will create three blocks for each iteration and each block will have its own i variable.

So when the console is executed, it will print the value of i in each block. Which will be 0, 1, 2.
*/

// Working solution

function b() {
    for(let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i); // What is logged?
        }, i * 1000);
    };
}

// b();

// Phase 2: Fix the above codebase without using let variable.
// If not allowed to use let variable. We have to somehow bring var into function scope so that for every iteration it creates a new scope for i.
// As we know var is function scope, we can wrap setTimeout in an IIF block.

function c() {
    for (var i = 0; i < 3; i++) {
        (function(i) { // This creates a new function scope for i in each iteration.
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        })(i);
    };
}

c();