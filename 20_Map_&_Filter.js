
//filter

/*In javascript for each loop iterate the array but does not return the value in the array
i.e If we need to return a value that has a condition then we use filter */


const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.filter( (item) => item >4)
//console.log(newNums);


//vvi If we use arrow functions then you should always remember to use return, because
//if you don't the arrow callback function wil return empty array because you have started a new block
//whenever you open a scope then use return keyword to return a value

const myNums = nums.filter( (val) => {
    return val > 7   
})
//console.log(myNums);


//add numbers in each member of an array using call back function

const myNumbers = [4,7,4,2,5,0,7,6,4,6,8,9,9]

const newNumbers = myNumbers.map((nums) => nums = nums +10) //call back function without using {}
console.log(newNumbers);


//chaining => it is a process to use multiple map and filter methods to get desired result
//we can use multiple map and filter function together and eachtime the value changed get passed down 
//to another method to execute
 
const chainedNums = myNumbers
                             .map((nums)=>{return nums = nums * 10})
                             .map((nums)=>{return nums = nums +1})
                             .filter((nums) => nums >= 40)
console.log(chainedNums);