//old syntax

// const name ="Arnav"
// const repoCount = 90
// console.log(name + " " +  repoCount + " Value"); //not a very best way to write code outdated form to write code 

//new syntax 

//it uses backticks (` `) like thise and uses string interpolation and it makes placeholders to inject variables 

// console.log(`Hello my name is ${name} and on my girhub profile I have a repository count of ${repoCount}`);

 // another way to declare a string is 

 const boy = new String("   HELLO   "); // object name boy that stores a  string value in its constructor 
 console.log(boy); 
 
 // SOME COMMON METHODS IN STRINGS

 console.log(boy.length);
 console.log(boy.toLowerCase());
 console.log(boy.charAt(7));
 console.log(boy.indexOf('E'));
 console.log(boy.substring(0,7));
 console.log(boy.trim());
 console.log(boy.slice(3,-3));
 console.log(boy.replace("H", "B"));
 console.log(boy.includes("L"));