Array.prototype.myFilter = function(cb){

    let temp=[];
    for(let i = 0; i<this.length; i++){
        if(cb(this[i],i,this))
        temp.push(cb(this[i],i,this))
    }
    return temp;
}

const numbers=[1,2,3,4,5];

const moreThanTwo = numbers.myFilter((num)=>{
    return num>2;
})

console.log(moreThanTwo);