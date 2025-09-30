Here are JavaScript code snippets for all the basic logic building questions listed. Each snippet uses JavaScript methods and syntax designed to support understanding and practice of core programming logic.

***

### Number-based Problems

```javascript
// Check if even or odd
function isEven(num) {
  return num % 2 === 0;
}

// Check if prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Check if Perfect Number
function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

// Check if Armstrong Number
function isArmstrong(num) {
  let sum = 0, temp = num;
  const digits = `${num}`.length;
  while (temp > 0) {
    sum += Math.pow(temp % 10, digits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

// Check if Palindrome Number
function isPalindromeNumber(num) {
  return String(num) === String(num).split('').reverse().join('');
}

// Check if Perfect Square
function isPerfectSquare(num) {
  return Number.isInteger(Math.sqrt(num));
}

// Check if Fibonacci Number
function isFibonacci(num) {
  const isPerfectSquare = x => Number.isInteger(Math.sqrt(x));
  return isPerfectSquare(5*num*num + 4) || isPerfectSquare(5*num*num - 4);
}

// Find Factorial
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Find GCD
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Find LCM
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Reverse a Number
function reverseNumber(num) {
  return parseInt(String(num).split('').reverse().join(''));
}

// Count Digits
function countDigits(num) {
  return String(num).length;
}

// Sum of Digits
function sumDigits(num) {
  return String(num).split('').reduce((sum, d) => sum + Number(d), 0);
}

// Product of Digits
function productDigits(num) {
  return String(num).split('').reduce((prod, d) => prod * Number(d), 1);
}

// Largest & Smallest Digit
function largestDigit(num) {
  return Math.max(...String(num).split('').map(Number));
}
function smallestDigit(num) {
  return Math.min(...String(num).split('').map(Number));
}

// Convert Decimal to Binary/Octal/Hex
function toBinary(num) { return num.toString(2); }
function toOctal(num) { return num.toString(8); }
function toHex(num) { return num.toString(16); }
```

***

### String-based Problems

```javascript
// Check Palindrome String
function isPalindrome(str) {
  const clean = str.replace(/[\W_]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}

// Check Anagram
function isAnagram(str1, str2) {
  const sortStr = s => s.replace(/[\W_]/g, '').toLowerCase().split('').sort().join('');
  return sortStr(str1) === sortStr(str2);
}

// Count Vowels and Consonants
function countVowelsConsonants(str) {
  let vowels = 0, consonants = 0;
  for (let ch of str.toLowerCase()) {
    if ('aeiou'.includes(ch)) vowels++;
    else if (/[a-z]/.test(ch)) consonants++;
  }
  return {vowels, consonants};
}

// Frequency of Each Character
function charFrequency(str) {
  return str.split('').reduce((freq, ch) => {
    freq[ch] = (freq[ch] || 0) + 1;
    return freq;
  }, {});
}

// Contains Only Digits/Alphabets
function isOnlyDigits(str) {
  return /^\d+$/.test(str);
}
function isOnlyAlphabets(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// Pangram
function isPangram(str) {
  return (new Set(str.toLowerCase().replace(/[^a-z]/g, ''))).size === 26;
}

// Longest Word in Sentence
function longestWord(sentence) {
  return sentence.split(/\s+/).reduce((long, curr) => curr.length > long.length ? curr : long, "");
}

// Reverse String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Remove Duplicates
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

// Convert Case
function toUpperCase(str) { return str.toUpperCase(); }
function toLowerCase(str) { return str.toLowerCase(); }

// Count Words
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Replace Spaces
function replaceSpaces(str) {
  return str.replace(/ /g, '_');
}

// Remove Whitespaces
function removeWhitespaces(str) {
  return str.replace(/\s/g, '');
}

// First Non-repeating Character
function firstNonRepeating(str) {
  for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
  }
  return null;
}

// Check if Strings Are Rotations
function areRotations(str1, str2) {
  return (str1.length === str2.length) && ((str1 + str1).includes(str2));
}
```

***

### Array-based Problems

```javascript
// Largest & Smallest Element
function largestElement(arr) {
  return Math.max(...arr);
}
function smallestElement(arr) {
  return Math.min(...arr);
}

// Second Largest
function secondLargest(arr) {
  let unique = [...new Set(arr)].sort((a,b) => b-a);
  return unique[1] !== undefined ? unique[1] : null;
}

// Sum & Average
function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}
function averageArray(arr) {
  return sumArray(arr) / arr.length;
}

// Count Even/Odd
function countEvenOdd(arr) {
  let even = 0, odd = 0;
  for (let n of arr) (n % 2 === 0 ? even++ : odd++);
  return {even, odd};
}

// Reverse Array
function reverseArray(arr) {
  return arr.slice().reverse();
}

// Check if Sorted
function isSorted(arr) {
  return arr.every((v,i,a) => i === 0 || a[i-1] <= v);
}

// Find Missing Number [1,n]
function missingNumber(arr, n) {
  let sum = (n*(n+1))/2;
  let arrSum = sumArray(arr);
  return sum - arrSum;
}

// Remove Duplicates
function removeArrayDuplicates(arr) {
  return [...new Set(arr)];
}

// Merge Sorted Arrays
function mergeSortedArrays(a, b) {
  return [...a, ...b].sort((x,y) => x-y);
}

// Rotate Array by k
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}
```

***

### Searching and Sorting

```javascript
// Linear Search
function linearSearch(arr, target) {
  return arr.indexOf(target);
}

// Binary Search (Array sorted asc)
function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}

// Bubble Sort
function bubbleSort(arr) {
  let a = arr.slice();
  for (let i = 0; i < a.length-1; i++)
    for (let j = 0; j < a.length-i-1; j++)
      if (a[j] > a[j+1]) [a[j], a[j+1]] = [a[j+1], a[j]];
  return a;
}

// Selection Sort
function selectionSort(arr) {
  let a = arr.slice(), n = a.length;
  for (let i = 0; i < n-1; i++) {
    let min = i;
    for (let j = i+1; j < n; j++)
      if (a[j] < a[min]) min = j;
    [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}

// Insertion Sort
function insertionSort(arr) {
  let a = arr.slice();
  for (let i = 1; i < a.length; i++) {
    let key = a[i], j = i-1;
    while (j >= 0 && a[j] > key) {
      a[j+1] = a[j]; j--;
    }
    a[j+1] = key;
  }
  return a;
}

// Frequency of Elements
function frequencyElements(arr) {
  return arr.reduce((freq, val) => {
    freq[val] = (freq[val] || 0) + 1;
    return freq;
  }, {});
}

// Pair With Given Sum
function pairWithSum(arr, sum) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(sum - num)) return [num, sum - num];
    seen.add(num);
  }
  return null;
}

// Majority Element
function majorityElement(arr) {
  let freq = frequencyElements(arr);
  let n = arr.length;
  for (let k in freq)
    if (freq[k] > n/2) return +k;
  return null;
}
```

***

### Pattern Printing Examples

```javascript
// Right Triangle Pattern
function rightTriangle(n) {
  for (let i = 1; i <= n; i++)
    console.log('*'.repeat(i));
}

// Number Pyramid
function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n-i) + Array(i).fill(i).join(' '));
  }
}
```

***

### Mathematical Problems

```javascript
// Generate Fibonacci Series
function fibonacciSeries(n) {
  let a = 0, b = 1, res = [];
  while (res.length < n) {
    res.push(a);
    [a, b] = [b, a+b];
  }
  return res;
}

// Sum of Natural Numbers
function sumNatural(n) {
  return n*(n+1)/2;
}

// Arithmetic Progression
function arithmeticProgression(a, d, n) {
  return Array.from({length: n}, (_, i) => a + i*d);
}

// Geometric Progression
function geometricProgression(a, r, n) {
  return Array.from({length: n}, (_, i) => a * Math.pow(r, i));
}

// Calculate Simple Interest
function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}

// Calculate Compound Interest
function compoundInterest(p, r, t, n = 1) {
  return p * Math.pow(1 + r/(n*100), n*t) - p;
}

// Roots of Quadratic Equation
function quadraticRoots(a, b, c) {
  let D = b*b - 4*a*c;
  if (D > 0)
    return [(-b + Math.sqrt(D))/2*a, (-b - Math.sqrt(D))/2*a];
  else if (D == 0)
    return [-b/2*a];
  else
    return [];
}

// Calculate Power
function power(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) res *= x;
  return res;
}
```

***

### Conditional Logic Problems

```javascript
// Maximum of Three Numbers
function maxOfThree(a,b,c) {
  return Math.max(a, b, c);
}

// Leap Year Check
function isLeapYear(y) {
  return (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
}

// Grade Calculation
function calculateGrade(marks) {
  if(marks >= 90) return 'A';
  if(marks >= 80) return 'B';
  if(marks >= 70) return 'C';
  if(marks >= 60) return 'D';
  return 'F';
}
```

***

### Loop-based Problems

```javascript
// Print Multiplication Table
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++)
    console.log(`${n} x ${i} = ${n*i}`);
}

// Print All Factors
function factors(n) {
  let f = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) f.push(i);
  return f;
}

// Generate All Permutations (string)
function permutations(str) {
  if (str.length <=1) return [str];
  let out = [];
  for (let i = 0; i < str.length; i++) {
    let rest = str.slice(0,i) + str.slice(i+1);
    for (let sub of permutations(rest))
      out.push(str[i] + sub);
  }
  return out;
}
```

***

### Miscellaneous Logic Problems

```javascript
// Rock, Paper, Scissors
function rps(player, bot) {
  if (player === bot) return 'Tie';
  if (player === 'Rock' && bot === 'Scissors' ||
      player === 'Scissors' && bot === 'Paper' ||
      player === 'Paper' && bot === 'Rock') return 'Player wins';
  return 'Bot wins';
}

// Temperature Conversion
function celsiusToFahrenheit(c) { return c * 9/5 + 32; }
function fahrenheitToCelsius(f) { return (f-32) * 5/9; }
function celsiusToKelvin(c) { return c + 273.15; }
```

***

### Data Structure Basics

```javascript
// Stack using Array
class Stack {
  constructor() { this.data = []; }
  push(val) { this.data.push(val); }
  pop() { return this.data.pop(); }
  peek() { return this.data[this.data.length-1]; }
  isEmpty() { return this.data.length === 0; }
}

// Queue using Array
class Queue {
  constructor() { this.data = []; }
  enqueue(val) { this.data.push(val); }
  dequeue() { return this.data.shift(); }
  front() { return this.data[0]; }
  isEmpty() { return this.data.length === 0; }
}

// Check Balanced Parentheses
function isBalancedParentheses(expr) {
  let stack = [];
  for (let ch of expr) {
    if (ch === '(') stack.push(ch);
    else if (ch === ')') {
      if (!stack.length) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

// Infix to Postfix (Basic)
function infixToPostfix(expr) {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  let out = [], stack = [];
  for (let ch of expr.replace(/\s/g, '')) {
    if (/\d/.test(ch)) out.push(ch);
    else if ('+-*/'.includes(ch)) {
      while (stack.length && precedence[stack[stack.length-1]] >= precedence[ch])
        out.push(stack.pop());
      stack.push(ch);
    }
  }
  while (stack.length) out.push(stack.pop());
  return out.join(' ');
}
```

***

These examples cover all the major types of logic questions useful to master JavaScript programming fundamentals. Copy and run these functions in a JS console to see them in action, and modify arguments to practice further.

Sources
