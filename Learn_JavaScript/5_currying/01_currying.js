//Currying in JavaScript

//Example-  f(a,b) into f(a)(b)

function f(a){
    return function (b){
        return `${a} ${b}`   //console.log(a,b);  
    }
}

console.log(f(5));    //If we use two params then if we pass only 1 value on calling then in console we get another function as an output..        
console.log(f(3)(4)); //If we use two params then if we pass 2 values on calling then in console we get the value