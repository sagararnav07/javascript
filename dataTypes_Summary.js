//Types of data can be distinguished by how the data is stored and retrieves from the memory
//Basically there are two data types 1=> PRIMITYVE TYPE    2=> REFERENCE TYPE

//PRIMITIVE DATA TYPES ARE CALL BY VALUES which means that it does not give the refernce to the memomy instead what it does is 
//makes a copy of the data and then use as it is. 

// 7 types: 
// STRING(when the value is a collection of characters) 
// NUMBER(when the value is a number or float value) 
// BOOLEAN(when the value is true or false) 
// NULL(when the value is null) 
// UNDEFINED(variable is declared but the value is not given then use undefined)
// SYMBOL(use to declare symbol in advance javascript)
// BIGINT(use to store scientific vallues)

//REFERENCE TYPE OR NON PRIMITIVE TYPE ARE CALL BY REFERENCE which means when the data can be allocated through a reference 
//in the memory

//3 types:
//ARRAY
//OBJECT
//FUNTIONS

//ARRAY

let arnavSagar = [12,13,14,15,156,90];
console.log(arnavSagar);
console.log(typeof arnavSagar);

//OBJECT ==> anything in between {} is declared as an object it can store any data type and it stores everything in keyvalue pairs
let studentId ={
    name: "arnav",
    branch: "CSCE" 
}
console.log(studentId);
console.log(typeof studentId);

//FUNCTION

let myName= function(){
     console.log("HELLO WORLD!")
    }
    myName();

console.log(typeof myName);

