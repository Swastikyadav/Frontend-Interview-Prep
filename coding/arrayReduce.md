# Question
Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element.

The final result of running the reducer across all elements of the array is a single value.

Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce which is being used by the autograder, we shall instead implement it as Array.prototype.myReduce.

Examples
```js
[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
```

# Solution
```js
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const length = this.length;
  const noInitialValue = initialValue === undefined;

  let acc = noInitialValue ? this[0] : initialValue;
  let i = noInitialValue ? 1 : 0;

  if (noInitialValue && length === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  for (i; i < length; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};
```

## Nuances
- The reducer callback is passed the currentIndex and array as the third and fourth argument respectively?
- If there is no initial value supplied to the reduce function, the array element at index 0 is used and the iteration starts from the next element (index 1 instead of index 0).

## Edge Cases
- Empty array, with and without the initialValue argument.
- Single-value array, with and without the initialValue argument.
- Passing the index and array to the reducer callback.
- Sparse arrays, e.g. [1, 2, , 4]. The empty values should be ignored while traversing the array.