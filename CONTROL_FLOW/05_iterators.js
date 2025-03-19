//for of loop {not for objetcs}

//array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

// string
const String = "Hello World";

for (const char of String) {
  console.log(`Each character is ${char}`);
}

//maps

//maps are objects by default in javascript

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

//maps does not let you store duplicate values 
map.set('IN', "India")

console.log(map);

for (const [key, value] of map){
  console.log(key, ":-", value);
}



