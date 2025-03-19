//object literals

const hi = Symbol("Hello"); //how to use symbol as a key value pair in object

const jsUser = {

    name: "Arnav",
    "fullName": "Arnav Sagar",
    age:18,
    [hi] : "Bye", //always write a symbol in square brackets
    location: "Bhubaneswar",
    email: "sagararnav327@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
    }

    console.log(jsUser.email) //access using '.' method
    console.log(jsUser["fullName"])//access using '[""]' method
    console.log(jsUser["location"]);
    console.log(jsUser[hi])//accessing a symbol

    //.freeze() --> freezez the object so that it cannot be changed

    jsUser.email = "sunnymoney327@gmail.com"
    console.log(`The user's details is ${console.log(jsUser)}`);
    
    Object.freeze(jsUser) //freezed 
    jsUser.email = "sunnymoney327@hotmail.com"
    console.log(`The user's details is ${console.log(jsUser)}`);

    // incoprating functions into objects

    jsUser.greeting = function(){console.log("Hello JS user");}
    jsUser.greetingTwo = function(){console.log(`Hello JS user ${this.name}`)}
    console.log(jsUser.greeting()) //here the function cannot determine which object you are reffering to
    console.log(jsUser.greetingTwo())