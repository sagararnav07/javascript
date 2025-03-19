
/* explicit :- Explicit means that the code clearly and directly shows what is happening. The programmer has intentionally written the code to perform a specific action, leaving no room for ambiguity.
   implicit :- Implicit means that the code does something automatically without the programmer needing to specify it. */

   //.Call  :- passes current execution context into another function. It is used to call a function explicitly(i.e calling a function inside another function)


 function setUserName(username){ /* the 'username' is called but it is not then passed to "createUser" because "username" with it's variable gets out of the current execution context */ 
    //complex Db calls
    this.username = username
    console.log("called")
}

function createUser(username,email,password){ /* We will not create username in this function. Username creation is outsourced to "setUserName()" function */
    /* we will call the username using ".call" in order to get the output*/

    setUserName.call(this, username) /*we use "this" keyword to bring all the variable from "setUserName" function into "createUser" function as the variables from "setUserName" function 
                                      get pushed out of the current execution context while passing down refer to "06.call.png" */

    this.email = email
    this.password = password
}

const chai = new createUser('Arnav', 'Arnav@fb.com', '12345')
console.log(chai)