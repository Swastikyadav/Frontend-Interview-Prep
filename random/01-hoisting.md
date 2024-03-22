## Phase 1
Q. What will be the output of the following code.

```js
function abc() {
    console.log(a);

    var a = 10;
}
```

Answer:
It will console `undefined` as `a` is referenced before declaration of varibale `a`. And because of `var` keyword the varibale is hoisted and intialized with undefined.

When this function runs in execution context, it will hoist variable `a` due to `var` keyword and console log will be `undefined`.

## Phase 2
Q. What will be the output now.

```js
function abc() {
    console.log(a, b, c);

    const c = 30;
    let b = 20;
    var a = 10;
}
```

Answer:
Now the execution context will throw error: `reference error: Cannot access b/c before intialization`. Variable `b` and `c` are also hoisted but in TDZ (Temporal dead zone). Variable in TDZ is not accessable.

- `var`: Varibale is in scope hoisted and intialized with undefiend.
- `let`/`const`: Varibale is in scoep but not accessable. (TDZ)

TDZ is the term to define the state when variable is in scope but not accessable.