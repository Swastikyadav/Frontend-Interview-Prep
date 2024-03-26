// Implement custom Promise.all

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

Promise.all([showText('Hello', 1000), showText('World', 2000), Promise.resolve("hi")])
.then(values => {
    console.log(values);
});

// Once all promise is resolved it returns a new promise with all the values in an array.

// Answer: Polyfill for Promise.all
// The promise polyfill takes promises and returns new promise if all resolved and throws error if any one of the promise is rejected.

function promiseAll(promises) {
    let result = [];

    return new Promise((res, rej) => {
        promises.forEach((p, i) => {
            p.then(value => {
                result.push(value);
                if (i === promises.length - 1) {
                    res(result);
                }
            }).catch(err => {
                rej(err);
            });
        });
    });
}

promiseAll([showText('Hello', 1000), showText('World', 2000), Promise.resolve('hi')])
.then(values => {
    console.log(values);
});