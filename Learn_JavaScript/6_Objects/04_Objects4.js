//Objects in JS


const func = (function (a){
    delete a;  // deletes property , not the local variable
    return a;  
})(5);

console.log(func);