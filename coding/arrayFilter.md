# Question
Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.

For sparse arrays (e.g. [1, 2, , 4]), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).

Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.

Examples
```js
[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
```

# Solution
```js
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const newArr = []; // This array will be returned.

  // `this` will point to the array on which myFilter will be called.
  // So, we loop over this.length.
  for (let i = 0; i < this.length; i++) {
    if (
      // Check if there is no value at index i. For e.x in sparse array.
      // More info **
      Object.hasOwn(this, i) &&
      // Check if invoking callbackFn via apply with elm, idx, and array results in true.
      callbackFn.apply(thisArg, [this[i], i, this])
    ) {
      newArr.push(this[i]);
    }
  }

  console.log(this, newArr);
  return newArr;
};
```

## Edge Case
- Passing the index and array to the filter callback.
- Invoking the filter callback with the correct this if thisArg is specified.
- Sparse arrays, e.g. [1, 2, , 4]. The empty values should be ignored while traversing the array.

----
**
In JavaScript, if you access an index of an array that hasn't been assigned a value, it will return undefined, but there's a difference between an explicitly set undefined and an unassigned (or sparse) index.

The Object.hasOwn(this, k) part checks if the current property (in this case, the index k) actually exists on the array object this.

Object.hasOwn(this, k) specifically checks whether the array has its own property at the index k.