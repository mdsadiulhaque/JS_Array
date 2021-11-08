const numbers =[1,-1,2,3];



const sum= numbers.reduce(( accumulator,currentValue)=>
 accumulator+currentValue
);

let sum=0;
for(let n of numbers)
    sum +=n;
    
console.log(sum);
