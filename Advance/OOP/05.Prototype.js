let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
       //  console.log(`Spidy power is ${this.spiderman}`);
    }
}

//------------PROTOTYPE-------------------------------

/* ".prototype" :- gives you powers and you can insert your own methods like it is shown below by using .prototype
But as we know Function, Array, String and everything finally returns and object in javascript.
So if we insert a method with ".prototype" in an "Object" then we can use that method in Functions, String and Arrays too
But if we insert a method with ".prototype" in an "Function" or "Array" or "String" seperately then we cannot use it in object  */

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

//--------------------PROTOTYPAL INHERITENCE (old syntax)----------------

//__proto__

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//---------------------------- modern syntax-------------------------

 //.setPrototypeOf:- inherit object into another object

Object.setPrototypeOf(TeachingSupport, Teacher)



//-------------------------Creating a protype method .trueLength-----------------

/*.trueLength :- It should return actual length of the string 
for i.e if we take "Arnav   "  then ".length" will return" 8 as it also
counts the blank spaces
*/


let anotherUserName = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
} 

anotherUserName.trueLength()
