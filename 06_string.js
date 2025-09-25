//old syntax

const name ="Arnav"
const repoCount = 90
console.log(name + " " +  repoCount + " Value"); //not a very best way to write code outdated form to write code 

//new syntax 

//it uses backticks (` `) like thise and uses string interpolation and it makes placeholders to inject variables 

console.log(`Hello my name is ${name} and on my girhub profile I have a repository count of ${repoCount}`);

 // another way to declare a string is 

 const boy = new String("   HELLO   "); // object name boy that stores a string value in its constructor 
console.log(boy); 
// Output: [String: '   HELLO  ']
//===================================================================================================================
// SOME COMMON METHODS IN STRINGS

console.log(boy.length);            
// Output: 10  --> includes spaces at the beginning and end

console.log(boy.toLowerCase());     
// Output: '   hello   '

console.log(boy.charAt(7));         
// Output: 'L' --> character at index 7 (0-based)

console.log(boy.indexOf('E'));      
// Output: 4  --> first occurrence of 'E'

console.log(boy.substring(0, 7));   
// Output: '   HELL' --> from index 0 to 6 (7 not included)

console.log(boy.trim());            
// Output: 'HELLO' --> removes spaces from both ends

console.log(boy.slice(3, -3));      
// Output: 'HEL' --> from index 3 to (length - 3), which is index 7

console.log(boy.replace("H", "B")); 
// Output: '   BELLO   ' --> replaces first 'H' with 'B'

console.log(boy.includes("L"));     
// Output: true --> 'L' exists in the string
console.log(boy.startsWith("H"));        
// Output: false --> starts with spaces, not "H"

console.log(boy.trim().startsWith("H")); 
// Output: true  --> after removing spaces

console.log(boy.endsWith(" "));          
// Output: true  --> ends with spaces

console.log(boy.trim().endsWith("O"));   
// Output: true  --> after trimming

console.log(boy.includes("ELL"));        
// Output: true  --> substring exists

console.log(boy.search("L"));            
// Output: 5  --> index of first match of 'L'

console.log(boy.match(/L/g));            
// Output: [ 'L', 'L' ] --> finds all Ls using regex

console.log(boy.repeat(2));              
// Output: '   HELLO     HELLO   ' --> repeats full string

console.log(boy.trim().split(""));       
// Output: [ 'H', 'E', 'L', 'L', 'O' ] --> splits each character after trim

console.log(boy.toUpperCase());          
// Output: '   HELLO   ' --> already uppercase, no change

console.log(boy.toLocaleLowerCase());    
// Output: '   hello   ' --> locale-aware lowercase

console.log(boy.lastIndexOf("L"));       
// Output: 6 --> last occurrence of 'L'

console.log(boy.concat(" WORLD"));       
// Output: '   HELLO    WORLD' --> appends to the original

console.log(boy.normalize());            
// Output: '   HELLO   ' --> used mainly for Unicode consistency

(function makeStringFlow(x = 10, y = 20){
   console.log(x + y)
})

()



