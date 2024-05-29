//Ques4. currying vs partial application

//Partial Application :  It transforms a function into another function with arity(small no. of arguments). 
//Here we have three arguments and we're returjning only two functions. 
function sum(a) {
    return function (b, c) {
        return a + b + c;
    }
}

console.log(sum(12)(16, 20));



//Currying :

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

    console.log(sum(12)(16)(20));
