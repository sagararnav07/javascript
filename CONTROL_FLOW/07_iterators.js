//for each loop

//for each loop is most widely used array specific loop which uses high order functions to iterate through it

//for each loop uses call back fn form to iterate 

const programming = ["cpp","js","java","rb","c","py"]

// programming.forEach(function(val){
//     console.log(val);
// })

//here val automatically detects the length and value of the array, it is given as a parameter to a higher order call back function
//callback function does not need to define a name



//same thing useing arrow function
//programming.forEach((item) => {console.log(item)})




//using another function as a refernece
function printMe(item){
    // console.log(item)
}
programming.forEach(printMe)






//using arrow function to print complete array with their indexes
//it will print each value in the array with their index and each memeber in array can access how much part of total array.
// programming.forEach( (item, index, arr)=>{console.log(item, index, arr)})



//How to access an object within an array using for each loop

const myProject = [

    {
        language: "javascript",
        languageVal: "JS"
    },
    {
        language: "Java",
        languageVal: "java"
    },
    {
        language: "Python",
        languageVal: "py"
    }
]

//to print entire array
// myProject.forEach( (languageVal) => {
//     console.log(languageVal)
// })

myProject.forEach( (item) => {
    console.log(item.languageVal)
})