class User {
    constructor(username, email, password){ //it is called when new keyword is invoked
     
        this.username = username;
        this.password = password
        this.email = email;
    } 
/*encryptPassword :- method to encrypt password */
    encryptPassword(){
          return `${this.password}abc`
    }
    
    capptalLetters(){
       return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword())
console.log(chai.capptalLetters())

//------IF WE HAVE TO RUN ABOVE CODE WITH THE CLASS-----------------


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());