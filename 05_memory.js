//there are two types of memory in javascript
//1. HEAP MEMORY  2.STACK MEMORY

/* ALL PRIMITIVE DATA TYPES USE STACK MEMORY -> string, number, boolean, undefined, null, bigInt, Sympbol
   ALL REFERNCE DATA TYPES USE HEAP MEMORY -> Array, Object, Function
   
   
When stack memory is used then you get a copy of the data stored in the variable whereas
When heap memory is used then a reference of the data is given which is stored in heap memory* i.e*/

//examply of stack memory 
let myName = "Arnav";
let yourName = myName; //yourName = "Arnav"
yourName = "Sagar"; //overwrite yourName = "Sagar"

console.log(myName);
console.log(yourName);

//examply of heap memory

let arnavId ={
    roll: 212905,
    branch: "CSE",
};

let sagarId = arnavId;

sagarId.branch = "BBA"; //CSE is changes to BBA both the variable are now pointing to branch: BBA

console.log(arnavId);
console.log(sagarId);

/*
 Let’s break it down.

---

### 🔁 **Stack Memory Example:**
```js
let myName = "Arnav";
let yourName = myName;
yourName = "Sagar";

console.log(myName);   // "Arnav"
console.log(yourName); // "Sagar"
```

#### What's happening:
- **`myName`** is assigned `"Arnav"` (a **primitive value**, i.e., a string).
- **`yourName`** is then assigned the value of `myName`, which is `"Arnav"`.
- Then you change `yourName` to `"Sagar"`.

#### Why `myName` stays unchanged:
Primitive values (like strings, numbers, booleans, etc.) are **copied by value** and stored in **stack memory**. So `yourName` gets a **copy** of `"Arnav"`, not a reference to it. Changing `yourName` doesn’t affect `myName`.

---

### 🧠 **Heap Memory Example:**
```js
let arnavId = {
    roll: 212905,
    branch: "CSE",
};

let sagarId = arnavId;

sagarId.branch = "BBA";

console.log(arnavId);
console.log(sagarId);
```

#### What's happening:
- **`arnavId`** is an object, which is stored in **heap memory**.
- When you do `let sagarId = arnavId;`, you're **copying the reference**, not the actual object.
- So both `arnavId` and `sagarId` **point to the same object** in memory.
- Changing `sagarId.branch` affects the same object, so `arnavId.branch` is also `"BBA"` now.

#### Output:
```js
{ roll: 212905, branch: "BBA" }
{ roll: 212905, branch: "BBA" }
```

---

### 💡 Summary:
| Type      | Memory  | Copied By      | Behavior                 |
|-----------|---------|----------------|--------------------------|
| Primitive | Stack   | Value          | Independent copy         |
| Object    | Heap    | Reference      | Shared memory (mutates)  |

 */