# Question
The `Function.prototype.bind()` method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

Implement your own Function.prototype.bind without calling the native bind method. To avoid overwriting the actual Function.prototype.bind, implement the function as Function.prototype.myBind.

Examples
```js
const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42
```

## A refresher on Function.prototype.bind and this
The native bind is a method on Function.prototype, so every function you declare in your program automatically inherits such a method from the prototype chain.

One common use case for bind is to preserve the binding of a method when called as a function. A method call is a function on an object that is being called. For example:

```js
const person = {
  name: 'John',
  getName() {
    return this.name;
  },
};

person.getName(); // 'John'
```

In a method call, this is implicitly bound to the object that is calling it. Object here refers generally to either a plain old JavaScript object or a function (as we will see later).

```js
person.getName(); // In this case the `this` bound to the method call `getName()` is `person`.
```

However that's not the case for function calls. **A function call is different in that it doesn't get invoked on an object**.

For example, we can assign person.getName to another variable so it contains a reference to the same function as person.getName:

```js
const getName = person.getName;
const name = getName(); // In strict mode, this raises a TypeError: Cannot read properties of undefined (reading 'name')
```

When the same method is called as a function call, there is no implicit binding, thus resulting in this bound to the global object (in non-strict mode) or an error being thrown (in strict mode).

This is where bind comes in handy - we can preserve the context of the method call to person via person.getName.bind(person):

```js
const getName = person.getName.bind(person);
const name = getName(); // 'John'
```

If you found this confusing, it is normal. this is arguably one of the bad parts about JavaScript, as unlike everything else which is statically bound, only this is dynamically bound, which means that the caller of the function, not the maker of the function, determines its binding. This deviation is a source of confusion.

Another use case for bind is to create partially applied functions with pre-specified initial arguments. Check out the MDN's section on "Partially applied functions" if you need a refresher.

# Solution
```js
Function.prototype.myBind = function (thisArg, ...argArray) {
  // How do we refer to the original method that `bind` is called upon in the new
  // returned function.
  // Original method = this;
  // as `person.getName.myBind(person)`: for myBind this refers to person.getName.
  const originalMethod = this;

  return function(...args) { // These args are parameters passed to function returned from myBind.
    return originalMethod.apply(thisArg, [...argArray, ...args]);
  }
};
```

----

#### Actual pollyfill implementaion of Function.prototype.bind:
https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/function-bind.js