
/* "this" keyword is uded to acces a current context 
current context is nothing but the variable defined at each context
for i.e when username is changed from one to another current context 
changes and "this" keyword will acces the present avialabe context
and context means values*/


const user = {
    username: "Arnav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage(); // current context is "Arnav" so "this" will print Arnav
user.username = "Sagar";
user.welcomeMessage(); // current context is "Sagar" so "this" will print Sagar



// "this" cannot access a variable only inside an object but not inside a funtion
let bhai ={
username: "HOLA",

babu:function chai(){
    let username = "hitesh"
    console.log(this.username)
}

}
bhai.babu(); // will print undefined if "HOLA" was not declared


 // -------------- Arrow Function "=>"-----------------//

 // types to return variables using arrow function
 // 1.
//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }


 //2.
 //const addTwo = (num1,num2) => num1 + num2
      

//3.
// const addTwo = (num1,num2) => (num1 + num2)




  // types to return objects using arrow function


const addTwo = (num1,num2) => ({add: num1 + num2})

console.log(addTwo(3,4))