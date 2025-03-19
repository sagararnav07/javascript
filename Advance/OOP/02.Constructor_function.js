//CONSTRUCTOR FUNCTION

/* "new" keyword  :- is called constructor function it's job is to make multiple instances of the same object literal */

//const promiseOne = new Promise()
//const date = new Date()

//let's see how these literals (new, this) is used.


function User(username, loginCount, isLoggedIn){
 
   /* If we pass a variable same name as the value called "username" then how would we know which is which?
 to solve this problem we use `this` keyword to represent the current context */

         //  username = username 
    this.username  /*varialble*/ = username /* value*/ 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this //IMPLICITALLY DEFINED 
}

//------ USE OF NEW KEYWORD VVI EXPLAINATION----------//

//const userOne = User(`Arnav`, 8, true)
//const userTwo = User(`Sagar`, 9, false)

//console.log(userOne) 

//OUTPUT 

/*{
  username: 'Sagar',
  loginCount: 9,
  isLoggedIn: false 
}*/

/* We have created two varrables "userOne & userTwo" and printed the value of only "userOne" in line 27.
But we saw in the output that the values got overwritted by "userTwo" because of using "this" keyword as it always return 
current context*/

/*ONLY FOR THIS WE USE CONSTRUCTOR FUNCTION "NEW" KEYWORD AS IT CREATES AN INDEPENDENT INSTANCE AND DO NOT 
GET EFFECTED ANY PREVIOUS VALUE */


// ------------ 4 STEP WORKING OF 'NEW' KEYWORD------------------- 

/* 1. When "new" keyword is invoked the na empty object "{}" gets cretaed
   2. Constructor function gets called by 'new' keyword
   3. Arguments gets injected in the 'new' keyword
   4. if there 'this' keyword gets inserted and function generated output */


//------ USE OF NEW KEYWORD VVI PROPER USE----------//

const userOne = new User(`Arnav`, 8, true)
const userTwo = new User(`Sagar`, 9, false)

console.log(userOne, userTwo)
