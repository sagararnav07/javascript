// function sayMyNAme() {
  
//           console.log("A");
//           console.log("R");
//           console.log("N");
//           console.log("A");
//           console.log("V");
// }

// sayMyNAme();



// function addTwoNumbers(number1,number2){
//           console.log(number1 + number2);
// }

// addTwoNumbers(5,90);

// //or


// function addTwoNumbers_2(num1,num2){
//          return num1 + num2;

// }
// console.log(addTwoNumbers_2(10000,70000))

// const sum = addTwoNumbers_2(5,90);
// console.log(sum);

// function loginUserMessage(username){
//     if(username == undefined){  // if(!username)
//         console.log("Please enter a usernamme")
//         return;
//     }
//     return `${username} jsut logged in`
// }

// console.log(loginUserMessage("Arnav"));

// //in the shopping cart if there are many items to add the amount then we use rest operator

// // "..." --> rest operator as well as spread operator they only differentiate based on their usecase
// // rest operator returns the values entered by the user in an array like a bundle

// function calculateCartPrice(...amount1){
//     return amount1
// }

// console.log(calculateCartPrice(200, 400, 800, 3878))


// //how to pass an object in a function

// myProfile = {
//     name: 'Arnav',
//     branch: 'CSCE',
//     roll_no: '2129055'
// }

// //1st method
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.name} and branch is ${anyobject.branch}`);
// }

// handleObject(myProfile)

// //2nd method

// handleObject({
//     name : "Sunny",
//     branch : "CSCE"
// })

// //how to pass an array in a function

// const myNewArray = [200, 400, 500 , 600]
//  function returnSecondFunction(getArray){
//     return getArray[1]
//  }
// console.log(returnSecondFunction(myNewArray))