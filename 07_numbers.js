const score = 400; // to define a  variable
const balance = new Number(100);// to define an object that must contain a number
console.log(score);
console.log(balance);
console.log(balance.toString().length); //"toString" converts the number to the string and "length()" gives the length of the string.
console.log(typeof balance); // give the datatype
console.log(balance.toFixed(2));//give fixed length of decimal places 

const value = 334.98765
console.log(value.toPrecision(4)); //give the precise value till the key value its selected

const value_2 = 90800986504
console.log(value_2.toLocaleString()); // gives the value with commas by default the US standards 
console.log(value_2.toLocaleString('en-IN')); // gives the value with commas with INDIAN standards

