/*What is reduce ?

    The reduce method reduces an array of values down to just one value 
Just like map and filter reduce also execute the callback for each element of an array.

It receives two things: callback function and initial value.
The callback function has parameter: acc, curr, i, arr where acc - result of the previous compution, curr - current value, i - iterator, arr - original array

*/
const number = [1, 2, 3, 4, 5, 6];
const sum = number.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);


console.log(sum);