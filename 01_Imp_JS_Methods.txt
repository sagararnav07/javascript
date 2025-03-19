
Here’s a list of important JavaScript methods categorized by their type and usage:

Object Methods
Object.keys(obj): Returns an array of a given object’s property names.
Object.values(obj): Returns an array of a given object’s property values.
Object.entries(obj): Returns an array of a given object’s own enumerable string-keyed property [key, value] pairs.
Object.assign(target, ...sources): Copies the values of all enumerable own properties from one or more source objects to a target object.
Object.create(proto, [propertiesObject]): Creates a new object with the specified prototype object and properties.
Object.freeze(obj): Freezes an object, preventing new properties from being added, existing properties from being removed or altered, and marks all properties as read-only.


Array Methods
Array.push(...items): Adds one or more elements to the end of an array and returns the new length of the array.
Array.pop(): Removes the last element from an array and returns that element.
Array.shift(): Removes the first element from an array and returns that element.
Array.unshift(...items): Adds one or more elements to the beginning of an array and returns the new length of the array.
Array.map(callback): Creates a new array populated with the results of calling a provided function on every element in the calling array.
Array.filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
Array.reduce(callback[, initialValue]): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
Array.forEach(callback): Executes a provided function once for each array element.
Array.find(callback): Returns the first element that satisfies the provided testing function.
Array.sort([compareFunction]): Sorts the elements of an array in place and returns the sorted array.
Array.slice([begin[, end]]): Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items to select.


String Methods
String.toUpperCase(): Returns the calling string value converted to uppercase.
String.toLowerCase(): Returns the calling string value converted to lowercase.
String.includes(searchString[, position]): Determines whether one string may be found within another string, returning true or false as appropriate.
String.slice(beginIndex[, endIndex]): Extracts a section of a string and returns it as a new string.
String.replace(searchValue, newValue): Returns a new string with some or all matches of a pattern replaced by a replacement.
String.split([separator[, limit]]): Splits a String object into an array of strings by separating the string into substrings.


Number Methods
Number.toFixed(digits): Formats a number using fixed-point notation.
Number.isInteger(value): Determines whether the passed value is an integer.
Number.parseFloat(string): Parses a string argument and returns a floating point number.
Number.parseInt(string[, radix]): Parses a string argument and returns an integer.
Math Methods
Math.max(...values): Returns the largest of zero or more numbers.
Math.min(...values): Returns the smallest of zero or more numbers.
Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
Math.round(x): Returns the value of a number rounded to the nearest integer.
Math.sqrt(x): Returns the square root of a number.


Function Methods
Function.call(thisArg, ...args): Calls a function with a given this value and arguments provided individually.
Function.apply(thisArg, [argsArray]): Calls a function with a given this value and arguments provided as an array (or array-like object).
Function.bind(thisArg[, ...args]): Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.


Date Methods
Date.now(): Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
Date.getDate(): Returns the day of the month for the specified date according to local time.
Date.getMonth(): Returns the month in the specified date according to local time.
Date.getFullYear(): Returns the year in the specified date according to local time.
Date.setDate(dayValue): Sets the day of the month for a specified date according to local time.
Date.setMonth(monthValue): Sets the month for a specified date according to local time.
Date.setFullYear(yearValue): Sets the full year for a specified date according to local time.



RegExp Methods
RegExp.test(string): Tests whether the regular expression matches a portion of a string.
RegExp.exec(string): Executes a search for a match in a specified string.
These methods cover a broad range of common tasks in JavaScript, from manipulating objects and arrays to handling strings and dates.



