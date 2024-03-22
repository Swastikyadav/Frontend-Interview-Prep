// Q. Implement caching/memoize function

const clumsyProd = (n1, n2) => {
    for (let i = 0; i < 100000000; i++) {}

    return n1 * n2;
}

console.time("First Call");
console.log(clumsyProd(9467, 7649));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumsyProd(9467, 7649));
console.timeEnd("Second Call");

// Implement caching/memoize function. Function will be tested on the above code.

// Answer:
// So, our goal is to write a function which takes a function as argument
// and returns a memoized ro cached version of that function.

function useMemo(fn, context) {
    const cache = {}; // Closure. The returned functio below remembers this cache object due to closures.

    return function(...args) {
        var argsCache = JSON.stringify(args);

        if (!cache.hasOwnProperty(argsCache)) {
            cache[argsCache] = fn.call(context || this, ...args);
        }

        return cache[argsCache];
    }
};

// const cache = {};
// const clumsyProdCache = (n1, n2) => {
//     if (cache.hasOwnProperty(`${n1}*${n2}`)) {
//         return cache[`${n1}*${n2}`];
//     } else {
//         cache[`${n1}*${n2}`] = n1 * n2;
//     }

//     for (let i = 0; i < 100000000; i++) {};
//     return n1 * n2;
// };

const memoizedClumsyProd = useMemo(clumsyProd);

console.time("First Call Cache");
console.log(memoizedClumsyProd(9467, 7649));
console.timeEnd("First Call Cache");

console.time("Second Call Cache");
console.log(memoizedClumsyProd(9467, 7649));
console.timeEnd("Second Call Cache");