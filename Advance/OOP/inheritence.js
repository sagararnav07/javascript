// extends :- is used to inherit a class into another class
//super :- is used to inherit a method of a class into method of another class

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }

    Developer(){
        console.log(`${this.username} is also a developer`)
    }
    static payment(){    //static keyword is use to restrict access of a method in class
        console.log(Math.floor(Math.random() * 10))
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
    totalBill(){
        console.log(`Calculating total bill for ${this.username}...`);
        this.payment(); // Call the inherited payment() method    
    }

}

const userOne = new teacher('Arnav', 'Arnav@gmail.com', 'Arnav@123') //creating an isntance of "teacher" class. It cann access any method in "User" as well as in Teacher class
console.log(userOne)
userOne.addCourse()
userOne.Developer()
userOne.totalBill()

const userTwo = new User("Hitesh") //created an instance for user class. It can access any method in "User" class but not in "Teacher" class
userTwo.logMe() //It can access any method in the user class
// userTwo.totalBill() //cannot access

/* " instanceof ":- To check if an object is an instance of a class */

// console.log(userOne instanceof teacher) //true
// console.log(userTwo instanceof teacher) //false
// console.log(userOne instanceof User) //true
// console.log(userTwo instanceof User) //true
