const myArray = [0,1,2,3,4,5]
console.log(myArray[1]);

//myArray methods 
myArray.push(6);
myArray.push(7); //to enter element into myArray
console.log(myArray);

myArray.pop();    //to remove element into myArray
console.log(myArray);

myArray.unshift(8) //enter the given element at first and shift compolete myArray to right
console.log(myArray);

myArray.shift()//opp. of unshift
myArray.shift()//opp. of unshift
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(5));

const newArray = new Array(myArray.join()); //.join makes array a string and returns the array in close format
console.log(newArray);
console.log(typeof newArray);
console.log(myArray);

//slice,splice 

let ARRAY_1 = [1,2,3,4,5,6,7,8,9,]

console.log(ARRAY_1.slice(1,3));//doesn't make changes to the original array and it returns n-1 elemnt "n is the user entered parameter"
console.log(ARRAY_1);



let ARRAY_2 = [1,2,3,4,5,6,7,8,9,]

console.log(ARRAY_2.splice(1,3));//make changes to the original array and returns n array
console.log(ARRAY_2)

