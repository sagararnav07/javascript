let score = "33abc";
//console.log(typeof(score));
// the code above will tell its a number 
//the code above will tell its a string when you put "33"

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

//"33" => "33"
//"33abc"=> NaN```
//true => 1 ; false => 0

//let isLoggedIn = "arnav";
//let booleanIsLoggedIn = Boolean(isLoggedIn);

//1 => true ; 0 => false
// "" => false
// "arnav" => true

// let isString = 33
// let isStringNumber = String(isString);
// console.log(isString);
// console.log(typeof(isString));


// *******************************************OPERATIONS***********************************************************************

//Basic operation

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);



// let value = 3
// let isValue = -value;
// console.log();

let str1 = "Arnav";
let str2 = "Sagar";
str3 = str1 + " " + str2;
console.log(str3);

// explicit and implicit operations 
let x = ("1" + 2 + 1);
let y = (1 + 2 + "1")
let z = (1 + "2" + 1)
let e = ("1" + 2 + "1")
let f = (1 + 2 + 1)

console.log(x + " " + y + " " + z + " "+ e + " " + f);