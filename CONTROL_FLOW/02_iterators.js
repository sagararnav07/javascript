//for

// for(var i = 0; i <= 10; i++){
//     const element  = i;
//     console.log(element);
    

// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value: ${j} and outer loop value ${i}`);

//     }

// }

// for arrays

// let myArray = ["a", "b", "c", "d", "e", "f", "g", "h"]
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// break and continue

for (let index = 0; index <=10 ; index++) {
    if(index == 5){
        console.log(`detected ${index}`);
        break;
    }
    console.log(index);
    
}

// for (let index = 0; index <=10 ; index++) {
//     if(index == 5){
//         console.log(`detected ${index}`);
//         continue;
//     }
//     console.log(index);
    
// }