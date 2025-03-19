//dates

// let myDate = new Date()
// console.log(myDate); //not in readable format

// console.log(myDate.toString()); //converted to string a bit in readable format

// console.log(myDate.toDateString()); // bit more readable

// console.log(myDate.toLocaleString());//dispaly time in locale format

// console.log(typeof(myDate)); //date is object type 

// to declare date 

let myCreateDate = new Date(2023,0,23);
console.log(myCreateDate);  //not in readable format and month in javascript starts with '0'
let newDate = new Date(2023,0,23,5,3)
console.log(newDate.toLocaleString()); //more readable form icludes time also

let myDateFormat = new Date("01-22-2023");
console.log(myDateFormat.toLocaleString()); // to change format

//timestamp 

let myTimeStamp = Date.now()
console.log(myTimeStamp); // in milliseconds (not readable)

console.log(myDateFormat.getTime()); //in milliseconds and comparable 
console.log(Math.floor(Date.now()/1000)); //in seconds readable and omparable

//to get particulars in date and some functions in date
let dateNow = new Date();
console.log(dateNow.getMonth());
console.log(dateNow.getFullYear());
console.log(dateNow.getHours());
console.log(dateNow.getDay());
console.log(dateNow.getTimezoneOffset());
console.log(dateNow.getUTCSeconds());

console.log(`the timestamp is ${myTimeStamp} and the month is ${dateNow.getMonth()}`)