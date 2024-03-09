# Question

Implement a function uniqueArray that takes in an array and returns a duplicate-free version of the array where only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

## Examples
```js
uniqueArray([1, 2, 3]); // [1, 2, 3]
uniqueArray([1, 1, 2]); // [1, 2]
uniqueArray([2, 1, 2]); // [2, 1]
```

# Solution
## #1: Brute force solution || O(n^2)
```js
function uniqueArray(array) {
  const resultArr = [];

  array.forEach(n => {
    if(!resultArr.includes(n)) {
      resultArr.push(n);
    }
  });

  return resultArr;
  // return Array.from(new Set(array));
}
```

## #2: Using Set || O(n) || Set is faster O(1) to look up
```js
function uniqueArray(array) {
  const resultArr = [];
  const tracker = new Set();

  array.forEach(n => {
    if(!tracker.has(n)) {
      resultArr.push(n);
      tracker.add(n);
    }
  });

  return resultArr;
  // return Array.from(new Set(array));
}
```
