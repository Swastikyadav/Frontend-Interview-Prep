// Q. What will be the output of the following code?

console.log("a");
setTimeout(() => console.log("set"), 0);
Promise.resolve().then(() => console.log("pro"));
console.log("b");

// Answer:
/*
a: regular js console.
b: regular js console.
pro: promise moved to priority task que.
set: set timeout moved to task que. setTimeout is not part of JS is part of browser API.
*/

// Both "pro" and "set" runs after all other JS code is executed.
// Priority/Micro task que has higher priority than task que.

// Visualize how event loop works in JavaScript: https://www.jsv9000.app/