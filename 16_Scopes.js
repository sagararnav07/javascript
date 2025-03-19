 // {} ---> is scope of a program or function
//line 3 - 7 is a block scope, while outside is global scope
// variable defined  in Global Scope is available within a block scope, 
//but variable defined inside block scope is not avialable outside block scope 
// but "var is an exception"

let a = 100

if(true){
 let a = 10;
 const b = 20;
 var c = 30;
 console.log("inner scope", a);
}

console.log(a); // does not work outside block scope
console.log(b); // does not work outside block scope
console.log(c); //  work outside block scope(that's why don't use var)