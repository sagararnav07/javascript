//for in loop { and directly for maps}

//object
const myObject = {
    firstName: "Arnav",
    lastName: "Sagar",
    dateOfBirth: "07May2002"
}

//the for of loop will not work as objects are not iterateable by default
//for (const [key, value] of myObject){
    //console.log(key, ":-", value);
 // }

  //we use for in loop in objects to iterarate  
  for (const key in myObject){
   //console.log(`${key} is ${myObject[key]}`);
  }
  

  /*1. the major difference between for of loop and for in loop is that 
  in for of loop the key with its value can be dumped directly
  whereas in for in loop the values cannotnbe accessed directly
  
  2. in for in loop you cannot directly iterate through a map and
  in for of loop you cannot directly iterate through an object*/

//map

//map cannot be iterated by for in loop directly first you have to convert it into arrays
  const map = new Map()
  map.set('IN', "India")
  map.set('USA', "United States Of America")
  map.set('FR', "France")
  
  //converted map to array
const mapToArray = [];
  for (const [key,value] of map){
    mapToArray.push([key,value]);
  }

 //iterated map using for in loop
  for (const key in mapToArray){
   // console.log(`${mapToArray[key]}`);
  }
  
//for in loop for object

const objectLoop = {

  Name: "Arnav",
  Title: "Sagar",
  School: "Kairali"

}

for( const key in objectLoop){
  console.log(`${key} :->  ${objectLoop[key]}`);
}

//for in loop for String

const String = "Vikas Vidyaniketan"

for(const i in String)
  {
    console.log(`${String[i]}`)
  }

//for of loop for string

for(const i of String)
{
  console.log(i);
  
}


//for in loop for array

  const programming = ["cpp","js","java","rb","c","py"]

  for(const key in programming){
    //console.log(programming[key])
  }