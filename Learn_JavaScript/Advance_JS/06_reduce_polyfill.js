Array.prototype.myReduce = function(cb,initialValue){
    var accumulator = initialValue;
   
    for(let i = 0; i<this.length; i++){
      accumulator = accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
}

const number = [1, 2, 3, 4, 5, 6];
const sum = number.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);


console.log(sum);