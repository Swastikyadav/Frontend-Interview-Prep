// Problem solving
// Implement Pangram string checker function.
// Pangram checks if a sentence contains all english alphabets or not.

/*
1: Forced Approach
The first approach that comes to mind is creating a string of all english letters from "a" to "z".
And looping through each letter and checking if it exists in the given sentence.

2: Maybe we can utilize regex in some way to solve this.
/^[a-zA-Z]+$/ - This will check if all alphabet exists in a sentence or not.

3: Check if a capital character falls between "A" and "Z".
if (char >= "A" && char <= "Z")
Check if a small character falls between "a" and "z".
if (char >= "a" && char <= "z")

Create an array of 26 length. For each character fill the index of that character in aplhabet to true.
For example for character "d" index 3 will be filled as true.

At last check the array, if even a single index is false, the string is not a pangram else it is a pangram.
*/

function checkPanagram(str) {
    const arr = new Array(26).fill(false);

    let index;

    for (let i = 0; i < str.length; i++) {
        if(str[i] >= "A" && str[i] <= "Z") { // If a capital character is an alphabet
            index = str.charCodeAt(i) - "A".charCodeAt(0);
        }
        if(str[i] >= "a" && str[i] <= "z") { // If a small character is an alphabet
            index = str.charCodeAt(i) - "a".charCodeAt(0);
        }
        else continue; // This will skip the further steps if the charcater is not alphabet.

        arr[index] = true;
    }

    console.log(arr);
    return !arr.some(bool => bool === false);
}

const pangramText = "The quic brown fox jumps over the lazy dog";
console.log(checkPanagram(pangramText));