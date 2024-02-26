# Explain how `this` works in JavaScript.

The `this` keyword refers to the object it belongs to. There are four rules to identify, where the `this` keyword is refering.

- new fn() -> A brand new object.
- fn() -> window
- obj.fn() -> this referes to obj. If any function is using this then this becomes the object at left of (.).
- bind, call, apply -> “this” value is specified.
- new keyword creates and returns this implicitly.

`this` is changing context.

## `this` in libraries
- Libraries will sometime intentionally bind the value of `this` inside their function, which makes the library convenient but does not prevent from controlling context via `.call` and `.apply`.

And as a result the library will not properly bind `this` in your event handler.

----

Reference: https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3