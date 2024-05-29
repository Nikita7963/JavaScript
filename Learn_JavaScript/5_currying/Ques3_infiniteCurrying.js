//Ques1. infinite currying -> sum(1)(2)(3)...(n)

function add (a){
    return function (b){
       if (b) return add(a+b); 
       return a;
    }
}

console.log(add(5)(6)(8)(9)(1)(4));