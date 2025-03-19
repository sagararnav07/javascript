//there are two types of memory in javascript
//1. HEAP MEMORY  2.STACK MEMORY

/* ALL PRIMITIVE DATA TYPES USE STACK MEMORY
   ALL REFERNCE DATA TYPES USE HEAP MEMORY
   
   
When stack memory is used then you get a copy of the data stored in the variable whereas
When heap memory is used then a reference of the data is given which is stored in heap memory* i.e*/

//examply of stack memory 
let myName = "Arnav";
let yourName = myName;
yourName = "Sakshi";

console.log(myName);
console.log(yourName);

//examply of heap memory

let arnavId ={
    roll: 2129055,
    branch: "CSCE",
};

let sakshiId = arnavId;

sakshiId.branch = "BBA";

console.log(arnavId);
console.log(sakshiId);

