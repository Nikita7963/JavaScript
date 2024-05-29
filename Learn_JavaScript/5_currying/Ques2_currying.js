//Ques1. 
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("difference")(4)(2) => 2


function calculator(operator) {
    return function (a) {
        return function (b) {

            if (operator === "sum")
                return a + b;
            else if (operator === "multiply")
                return a * b;
            else if (operator === "divide")
                return a / b;
            else if (operator === "difference")
                return a - b;
            else
                return "Wrong operator";
        };
    };
};


console.log(calculator("multiply")(4)(2));