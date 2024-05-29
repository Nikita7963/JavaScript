/*What is map?
map - The map method is used to create a new array from an existing one from applying function to each one of the element of the first array.
Now I need to multiply each element by 3 
This takes a callback function. and parameter(num, i, arr) where num is 1, 2, 3, 4and i is iterator, arr is original array.
*/


const nums = [1, 2, 3, 4, 5];

const multiplyByThree = nums.map((num, i, arr) => {
    return num * 3 + i;// 1*3+0
});

console.log(multiplyByThree);

/*
output:

1 * 3 + 0
2 * 3 + 1
3 * 3 + 2
*/