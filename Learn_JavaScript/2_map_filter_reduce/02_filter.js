//What is filter?
/*
the filter method takes each element in an Array and it applies a conditional statement against it.
If conditional returns true, the element gets pushed into the o/p Array.
If conditional returns false, the element doesn't gets pushed into the o/p Array.
*/

const numbers=[1,2,3,4,5];

const moreThanTwo = numbers.filter((num)=>{
    return num>2;
})

console.log(moreThanTwo);