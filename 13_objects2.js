//object singleton --> how can we declare objects using constructor
const tinderUser1 = new Object(); //singleton
const tinderUser2 = {} //non singleleton
//console.log(tinderUser1);
//console.log(tinderUser2);

//non singleton object
const tinderUserDetails = new Object();
 
tinderUserDetails.name = "Arnav Sagar"
tinderUserDetails.gender = "Male"
tinderUserDetails.age = 21

//console.log(tinderUserDetails);


//singleton object

const tinderUserDetails_2 = {
    name: "Sakshi",
    gender: "Female",
    age: 21,
    adress:{
        street:{
            area: {
            house_name : 123,
            house_no : 321
            }
        }
    }
    
}
console.log(tinderUserDetails_2);
console.log(tinderUserDetails_2.adress.street.area.house_name);





//combinig objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 ={obj1,obj2} //cannot do like this
console.log(obj3);

//.assign()

const obj4 = Object.assign({}/*target*/, obj1, obj2) //do like this
console.log(obj4);

// ... -> spread operator (best case) use this
const obj5 = {...obj1,...obj2} //best to use like this
console.log(obj5);


//for database 


//**** How to store an object into an array (verry imp)

//.keys() --> use to access all the keys data types n the object in form of array

console.log(tinderUserDetails)
console.log(Object.keys(tinderUserDetails))
console.log(Object.keys(tinderUserDetails_2))

//.values() --> use to access all the key values in the object in form of array

console.log(Object.values(tinderUserDetails_2))


//to check if a property is present in an object

//.hasOwnProperty()

console.log(tinderUserDetails.hasOwnProperty("isLoggedIn"));