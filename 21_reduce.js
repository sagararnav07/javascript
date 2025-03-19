//reduce => it has two components 1st is an accumulator and second is a current value
//accumulator is a value that has to be defined initially and current value is the array
//what it does it make operation by adding, multiplying,deviding or subtraction the accumulator with
//current value in a loop until the array ends

const arr = [1,2,3]

//in normal functon format

const reduce = arr.reduce(function (acc,currval)
 {console.log(`accumulator: ${acc} current value: ${currval}`)
    return acc + currval}, 0);
console.log(reduce);

//in arrow function format

const arrowReduce = arr.reduce((acc,curr) => 
    {console.log(`accumulator: ${acc} current value: ${curr}`)
    return acc+curr},0)

console.log(arrowReduce);