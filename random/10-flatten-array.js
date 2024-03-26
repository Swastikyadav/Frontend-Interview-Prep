// Flatten the Array

let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, [8, 8.5]], 9],
    [10, 11, 12],
];

// Answer:
// 1 level of flattening
let flattened = [].concat(...arr);

// Multiple level flattening. Using recursion
function arrFlatten(arr) {
    return arr.reduce((acc, cv) => {
        let flattenedCv = Array.isArray(cv) ? arrFlatten(cv) : [cv];
        acc = [...acc, ...flattenedCv];
        return acc;
    }, []);
}

// Native Js Array flat method. Implement this custom flat method.
// console.log(arr.flat(2)); // Takes the depth level of array to be flattened. 2 means flatten upto 2 level.

function myFlat(arr, depth=1) {
    // let result = [];
    // arr.forEach(ar => {
    //     if(Array.isArray(ar) && depth > 0) {
    //         result.push(...customFlat(ar, depth-1));
    //     } else result.push(ar);
    // });
    // return result;

    return arr.reduce((acc, cv) => {
        let flattenedCv = [];
        if (Array.isArray(cv) && depth > 0) {
            flattenedCv = myFlat(cv, depth-1);
        }else {
            flattenedCv = [cv];
        }
        acc = [...acc, ...flattenedCv];
        return acc;
    }, []);
}

// console.log(arrFlatten(arr));
console.log(myFlat(arr, 3));