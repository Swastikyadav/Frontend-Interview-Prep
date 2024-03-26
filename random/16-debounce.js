/*
- Debounce is a technique to rate limit / reduce the number of requests to the server.
- For example, when user types in an input, instead of sending request for every character typed, we send request
only when user stops typing for a time period.
- And if user starts typing again before give time period, we cancel the ongoing request and start a new one.
*/

function fetchData(event) {
    console.log("fetching data", event);
}

// Implementation without function. This is how I understand it, then I will wrap it inside a function.
/*
let timeoutId = null;
let inputValue = "";

document.querySelector("#textInput").addEventListener("input", (e) => {
    inputValue = e.target.value;
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fetchData(inputValue), 3000);
});
*/

// Debounce function implementation.

function debounce(callback, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    }
}

const debouncedFetchData = debounce(fetchData, 5000);

document.querySelector("#textInput").addEventListener("input", (e) => {
    debouncedFetchData(event.target.value);
});