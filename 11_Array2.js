const marvel_heroes = ["Thor", "Ironman" ,"Spiderman"]
const dc_heroes = ["Superman", "Batman", "Wonder Woman" ]

//PUSH()

// marvel_heroes.push(dc_heroes);//push inserts and array as an element within another existing array
console.log(marvel_heroes);  
//if you want to  access any alement in an array that is pushed to another array then use
// console.log(marvel_heroes[3][2]);

//CONCAT()

const All_heroes = marvel_heroes.concat(dc_heroes);
console.log(All_heroes); //comcats merege to arrays and store it on another variable

//SPREAD()

const All_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(All_new_heroes); //same as concat but more widely used

//FLAT()

const anotherArray = [1,2,[3,4],5,5,[6,7,[8,8,9]]]

const realAnotherArray = anotherArray.flat(Infinity); //recursively distributes all the nested arrays within single array
console.log(realAnotherArray);

//.isArray() --> returns boolean value after checking if the input is an Array or not

console.log(Array.isArray("Arnav"))

//.from() --> converts string,objects,number into array

console.log(Array.from ("Arnav"))
console.log(Array.from ({name: "Arnav"})) //interesting

//.of() --> converts multiple variable into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));