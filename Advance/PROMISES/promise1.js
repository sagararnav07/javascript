/* A Promise in JavaScript is like a placeholder for a value that will be available in the future. 
It's used to handle operations that take some time to complete, like fetching data from a server, without blocking the rest of your code.
Understanding a Promise
A promise can be in one of three states:

1.Pending: The operation is still in progress. The promise hasn't been fulfilled or rejected yet.
2.Fulfilled: The operation completed successfully, and the promise has a result (the resolved value).
3.Rejected: The operation failed, and the promise has an error or reason for the failure.

Creating a Promise
You can create a promise using the Promise constructor. It takes a function (called the executor function) with two parameters: resolve and reject.

resolve: This function is called when the operation is successful. It marks the promise as fulfilled.
reject: This function is called when the operation fails. It marks the promise as rejected.*/
//The correct order of parameters should be resolve first and then reject.

//Using a Promise
//To work with the result of a promise, you use the .then() and .catch() methods.

//.then(): This is called when the promise is fulfilled. It receives the "resolved" value.
//.catch(): This is called when the promise is rejected. It receives the error or reason for "rejection".


//---------------------------------PROMISE 1-------------------------------------------------------------

const promiseOne = new Promise(function(resolve, reject) {

    // Do an async task
    // db calls, cryptography, etc.

    setTimeout(function(){
        //console.log('Async task is complete');
        resolve(); // This should be called to mark the promise as fulfilled
    }, 1000);
});

promiseOne.then(function(){
    //console.log('Promise consumed');
});


//---------------------------------PROMISE 2-------------------------------------------------------------

//Better syntax than above code as it uses less memory and efficient too

new Promise((resolve,reject)=>{
   //console.log('Async task 2')
   resolve()
}).then(()=>{
   // console.log('promise 2 is compolete');
    
});


//---------------------------------PROMISE 3-------------------------------------------------------------


const promiseThree = new Promise((resolve,reject) => {

    resolve({name : "Arnav Sagar" , email : "arnav.07.sagar@gmail.com" , branch: "CSCE", Roll_no : "2129055"})
    //console.log(`promise 3 is created of profiile Arnav Sagar`)

}).then((user) => { //let's call the above created "resolve" object as "user" and pass it as a parameter
    //console.log(user)  //print the object user
})


//---------------------------------PROMISE 4-------------------------------------------------------------

       1/* CONSUMING PROMISE USING "THEN, CATCH, FINALLY"*/

/* In this promise we are going to learn about what if the promise does not "resolve" and causes an error and 
then how it is rejected and sent to ".catch()" block also we will see 
 ".finally() :- this method will be executed doen's matter if the code is either "resolved" or "rejected"  */

 /* In the promise execution we will learn about "chaining" and how data is retrieved by using chaining*/

 const promiseFour = new Promise(function(resolve,reject){ //promiseFour is a promise created using the Promise constructor.
   // console.log("promise-4 is executed")
    setTimeout( () => {  //The promise includes a setTimeout function that delays the resolution or rejection of the promise by 2 seconds (2000 milliseconds).
        let Error = true;
        if(!Error){
        resolve({work : "learning javascript", name : "chai aur code", username : "sagararnav_07"})
        }
        else{
        reject("Error: SOMETHING WENT WRONG")
        }
       }, 2000)
})
  
/* This code below is called "chaining :- Chaining in JavaScript refers to the technique of calling multiple methods 
on an object sequentially in a single statement, where each method call returns the object itself (or another object), 
allowing the next method to be invoked. This pattern is also known as method chaining" to prevent callback hell*/
    
promiseFour.then(function(user){ 
    //console.log("Promise-4 is utilized");
    return user.username //return value is passed down to the below function through "chaining"
}).then(function(username){
   // console.log(username) //recieved value is printed
}).catch(function(Error){
   // console.log(Error)
}).finally(function(){
   // console.log("Either resolve or reject is executed and utilized")
})

//---------------------------------PROMISE 5-------------------------------------------------------------

          2/* CONSUMING PROMISE USING "ASYNC/AWAIT" IN TRY-CATCH BLOCK */

/* async/await is a modern syntax in JavaScript simplifies working with promises,making asynchronous code look and behave 
more like synchronous code. It builds on top of promises but provides a more readable and convenient way to handle asynchronous operations.*/

const promiseFive = new Promise(function(resolve,reject){
    //console.log("promise-5 is executed")
    setTimeout( () => {
        let Error = false;
        if(!Error){
        resolve({ work: "learning promise", channel: "chai aur code", username : "arnav.07.sagar"})
        }
        else{
        reject("Error: SOMETHING WENT WRONG")
        }
       }, 2000)
})

//The try...catch block is essential for catching and handling errors when awaiting promises. As async/await does not provide necessary methods to deal with error handling
async function consumePromiseFive() {
    try {
        const response = await promiseFive  //The await keyword pauses the execution of consumePromiseFive until promiseFive is resolved or rejected.
       // console.log(response, response.username);
        
    } catch (error) {
       // console.log(error)
    }
}

consumePromiseFive() //running the function

//---------------------------------FETCH-------------------------------------------------------------

/*The fetch() function in JavaScript is used to make network requests, typically to retrieve data from an API or a server. 
It's a modern, promise-based API that has largely replaced older methods like XMLHttpRequest. 
The fetch() function is versatile and can be used for various HTTP requests (e.g., GET, POST, PUT, DELETE).*/


                        1 //USING "ASYNC/AWAIT"

/* async and await provide a more readable and concise way to work with promises. Instead of chaining 
.then() and .catch(), you can write code that looks synchronous but handles asynchronous operations.

Async/Await Syntax
async: Used to declare an asynchronous function.
await: Pauses the execution of the async function until the promise settles (i.e., resolves or rejects).
 */

async function getAllUsers(){
    /* without try catch the promise will be always in "pending state"*/
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`) //fetch takes time so use "await" and dtore it into response variable
        const data = await response.json() //await is used here because converting data takes a lot of time 
                                           //convert fetched data into ".json" because we can't retrieve data from fetched file as it is string
       // console.log(data)
        
    } catch (error) {
        //console.log(error);
        
    }
      
}
getAllUsers()


                        2//USING "THEN/CATCH"

/* fetch() returns a Promise that resolves to a Response object representing the response to the request. The Promise can be handled using .then() and .catch() methods:

.then()/.catch() Syntax
.then(): Used to handle the fulfilled state of the Promise (i.e., when the request is successful).
.catch(): Used to handle errors or rejections (i.e., when the request fails).
 */

fetch('https://jsonplaceholder.typicode.com/users') //retrieving data from url

.then((response)=>{   
    return response.json() //converting retrieved "string" data to ".json" and passing it down using "chaining"
}).then((data) => {
    console.log(data) //printing retrieved data
})
.catch((error) => {
    console.log(error,`Something went wrong`) //error handling
})