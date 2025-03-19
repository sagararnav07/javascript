//Immedeately invoked function expression is a way to execute a function to 
//remove the pollution from global scope 

// function chai(){
//     console.log("Arunabh loves chai");
// }
// chai()

//the above method is to call a function but not in IIFE form

(function chai(x=10, y=20){
    console.log(`Arunabh loves chai ${x+y}`);
})
(); //named IIFE

// ( (name) => {console.log(`DB CONNECTED TWO ${name}`)})
// ('Arnav'); //unnamed IIFE also with a parameter
//the above method is correct IIFE format 

((name) => {
    console.log(`Arunabh don't like ${name} chai `)
}) ('Shikhanjhi');