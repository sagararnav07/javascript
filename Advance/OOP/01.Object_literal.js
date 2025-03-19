//OBJECT LITERAL

/* "this" keyword is to return current context */
const user = {
    username: "Arnav",
    loginCount: "8",
    signedIn: true,

    getUserDetails: function() {
        //console.log("Got user details form database");
        //console.log(`Username: ${this.username}`);

        console.log(this); //It will return current context (local)
        
    }
}
console.log(this);  //It will return current context (global)
/* now if you perform this same console log as above in the browser you will get a "window" object 
that contains a whole lot of things */

console.log(user.username, user.getUserDetails())
