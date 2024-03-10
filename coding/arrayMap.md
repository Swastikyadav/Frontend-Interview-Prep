# Question
Array.prototype.map creates a new array populated with the results of calling a provided function on every element in the calling array.

Implement Array.prototype.map. To avoid overwriting the actual Array.prototype.map which is being used by the autograder, we shall instead implement it as Array.prototype.myMap.

Examples
```js
[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]
[1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]
```

# Solution
```js
Array.prototype.myMap = function (callbackFn, thisArg) {
  const newArr = new Array(this.length);

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    // Invoke callbackFn if i index has valid element in array (this).
    // Else the invalid elements are already there in newArr.
    if (Object.hasOwn(this, i)) {
      newArr[i] = callbackFn.apply(thisArg, [element, i, this]);
    }
  }

  return newArr;
};
```

## Edge Case
- Passing the index and array to the map callback.
- Calling the map callback with the correct this if thisArg is specified.
- Sparse arrays (e.g. [1, 2, , 4]). The empty values should be ignored while traversing the array.