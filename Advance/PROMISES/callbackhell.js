/*----------------------------------------------------- CALLBACK HELL --------------------------------------------------*/

/* Callback hell is a term used in JavaScript to describe a situation where multiple nested callbacks
 make the code difficult to read, maintain, and debug. This happens when asynchronous operations
  (such as file handling, API requests, or database queries) are chained together, 
  leading to deeply nested and hard-to-follow code structures. 
  This pattern can make the code look like a pyramid or "staircase" of callbacks, hence the term "callback hell."

Example of Callback Hell
Imagine you need to perform a series of asynchronous operations, where each operation depends on the previous one: */

asyncOperation1(function(result1) {
    asyncOperation2(result1, function(result2) {
        asyncOperation3(result2, function(result3) {
            asyncOperation4(result3, function(result4) {
                // Continue nesting as needed...
                console.log('All operations complete');
            });
        });
    });
});

/* Solutions to Avoid Callback Hell
Several modern JavaScript features and patterns help avoid callback hell:

Promises: Promises allow you to chain asynchronous operations in a more linear and readable way. 
They provide methods like .then() and .catch() to handle the results and errors, respectively. */

asyncOperation1()
    .then(result1 => asyncOperation2(result1))
    .then(result2 => asyncOperation3(result2))
    .then(result3 => asyncOperation4(result3))
    .then(result4 => {
        console.log('All operations complete');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
/*Async/Await: Introduced in ES2017, async and await provide an even more readable way to
 write asynchronous code, making it look almost like synchronous code.*/
 
 async function performOperations() {
    try {
        const result1 = await asyncOperation1();
        const result2 = await asyncOperation2(result1);
        const result3 = await asyncOperation3(result2);
        const result4 = await asyncOperation4(result3);
        console.log('All operations complete');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

performOperations();
