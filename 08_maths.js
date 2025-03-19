// console.log(Math);
// console.log(Math.abs(-9));//Chnage the value given to it's absolute value 
// console.log(Math.round(4.6));//round the value given to it's absolute value 
// console.log(Math.ceil(4.2));//round the value given to it's absolute value but even if its les than 5 i.e even 4.1 will 
// //be rounded off to 5 only
console.log(Math.floor(4.8));//opp of ceil  
// console.log(Math.min(4,8,5,6,3,9,3,0));//passes minimum value of the array
// console.log(Math.max(4,8,5,6,3,9,3,0));//passes maximum value of the array

//important formulas
console.log(Math.random());//passes any random value betwwn 0 and 1
console.log(Math.random()*10); //moves one value ahead
console.log(Math.random()/10); //moves one value before
console.log(((Math.random()) /10) +1); //the way to make the value always greater than 1

//this formula always gives value equal to or greater than 1
console.log(Math.floor(Math.random()*10)+1);
//sometime you have given a min and max value to generate a random no. So apply this formula below
const min =10
const max =20
console.log(Math.floor(Math.random() * (max - min + 1))+ min);







