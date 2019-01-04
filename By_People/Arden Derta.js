/*
 Given an integer array, output all distinct pairs that sum up to a specific value k.
 Consider the fact that the same number can add up to k with its duplicates in the array.
For example the array is [1, 1, 2, 3, 4] and the desired sum is 4. Should we output the pair (1, 3) twice or just once?
Also do we output the reverse of a pair, meaning both (3, 1) and (1, 3)?
Let’s print both. So, we will output two copy of (1, 3) and (3, 1). 
Also note that we shouldn’t output (2, 2) because it’s not a pair of two distinct elements.
Example
f(10, [3, 4, 5, 6, 7]) // [4, 6], [3, 7], [6, 4], [7, 3]
f(8, [3, 4, 5, 4) // [3, 5],  [4, 4]
f(10, [3, 5, 6, 8]) // Nothing
*/



let w = 8;
let arr = [3, 4, 5, 4];
let result = [];


arr.forEach((cur, i) => {
    for (var i2 = 0; i2 < arr.length; i2++) {
        if (i != i2) {
           if (cur + arr[i2] == w) {
            if (!result.includes([cur, arr[i2]]) ) {
                result.push([cur, arr[i2]]);
            }
           }
        }
    }
});

console.log(result);