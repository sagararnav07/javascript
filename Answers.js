// ==================== NUMBER-BASED PROBLEMS ====================

// 1. Check if a number is even or odd
const isEven = (n) => n % 2 === 0;
// console.log(isEven(4)); // true

// 2. Check if a number is prime
const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};
// console.log(isPrime(17)); // true

// 3. Check if a number is a perfect number
const isPerfectNumber = (n) => {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n && n > 0;
};
// console.log(isPerfectNumber(28)); // true

// 4. Check if a number is an Armstrong number
const isArmstrong = (n) => {
  const digits = String(n).split('').map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
  return sum === n;
};
// console.log(isArmstrong(153)); // true

// 5. Check if a number is a palindrome
const isNumberPalindrome = (n) => {
  const str = String(Math.abs(n));
  return str === str.split('').reverse().join('');
};
// console.log(isNumberPalindrome(121)); // true

// 6. Check if a number is a perfect square
const isPerfectSquare = (n) => {
  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
};
// console.log(isPerfectSquare(16)); // true

// 7. Check if a number is a Fibonacci number
const isFibonacci = (n) => {
  const check = (x) => isPerfectSquare(5 * x * x + 4) || isPerfectSquare(5 * x * x - 4);
  return check(n);
};
// console.log(isFibonacci(21)); // true

// 8. Find the factorial of a number
const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
// console.log(factorial(5)); // 120

// Iterative version
const factorialIterative = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

// 9. Find the GCD (Greatest Common Divisor)
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
// console.log(gcd(48, 18)); // 6

// 10. Find the LCM (Least Common Multiple)
const lcm = (a, b) => (a * b) / gcd(a, b);
// console.log(lcm(12, 18)); // 36

// 11. Reverse a number
const reverseNumber = (n) => {
  const sign = n < 0 ? -1 : 1;
  return sign * parseInt(String(Math.abs(n)).split('').reverse().join(''));
};
// console.log(reverseNumber(12345)); // 54321

// 12. Count digits in a number
const countDigits = (n) => String(Math.abs(n)).length;
// console.log(countDigits(12345)); // 5

// 13. Sum of digits
const sumOfDigits = (n) => {
  return String(Math.abs(n)).split('').reduce((sum, d) => sum + parseInt(d), 0);
};
// console.log(sumOfDigits(123)); // 6

// 14. Product of digits
const productOfDigits = (n) => {
  return String(Math.abs(n)).split('').reduce((prod, d) => prod * parseInt(d), 1);
};
// console.log(productOfDigits(123)); // 6

// 15. Find largest and smallest digit
const largestDigit = (n) => Math.max(...String(Math.abs(n)).split('').map(Number));
const smallestDigit = (n) => Math.min(...String(Math.abs(n)).split('').map(Number));
// console.log(largestDigit(45821)); // 8

// 16. Check if a number is a happy number
const isHappy = (n) => {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = String(n).split('').reduce((sum, d) => sum + d * d, 0);
  }
  return n === 1;
};
// console.log(isHappy(19)); // true

// 17. Check if a number is a strong number
const isStrongNumber = (n) => {
  const sum = String(n).split('').reduce((acc, d) => acc + factorial(parseInt(d)), 0);
  return sum === n;
};
// console.log(isStrongNumber(145)); // true

// 18. Check if a number is a spy number
const isSpyNumber = (n) => {
  const digits = String(n).split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  const product = digits.reduce((a, b) => a * b, 1);
  return sum === product;
};
// console.log(isSpyNumber(1124)); // true

// 19. Check if a number is a neon number
const isNeonNumber = (n) => {
  const square = n * n;
  return sumOfDigits(square) === n;
};
// console.log(isNeonNumber(9)); // true

// 20. Convert decimal to binary, octal, hexadecimal
const decimalToBinary = (n) => n.toString(2);
const decimalToOctal = (n) => n.toString(8);
const decimalToHex = (n) => n.toString(16).toUpperCase();
// console.log(decimalToBinary(10)); // "1010"


// ==================== STRING-BASED PROBLEMS ====================

// 21. Check if a string is a palindrome
const isPalindrome = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
};
// console.log(isPalindrome("A man a plan a canal Panama")); // true

// 22. Check if strings are anagrams
const areAnagrams = (str1, str2) => {
  const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
};
// console.log(areAnagrams("listen", "silent")); // true

// 23. Count vowels and consonants
const countVowelsConsonants = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
  const vowels = cleaned.match(/[aeiou]/g)?.length || 0;
  const consonants = cleaned.length - vowels;
  return { vowels, consonants };
};
// console.log(countVowelsConsonants("Hello World")); // {vowels: 3, consonants: 7}

// 24. Find frequency of each character
const charFrequency = (str) => {
  return str.split('').reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
};
// console.log(charFrequency("hello")); // {h:1, e:1, l:2, o:1}

// 25. Check if string contains only digits
const isOnlyDigits = (str) => /^\d+$/.test(str);
// console.log(isOnlyDigits("12345")); // true

// 26. Check if string contains only alphabets
const isOnlyAlphabets = (str) => /^[a-zA-Z]+$/.test(str);
// console.log(isOnlyAlphabets("Hello")); // true

// 27. Check if string is a pangram
const isPangram = (str) => {
  const letters = new Set(str.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
};
// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

// 28. Find the longest word in a sentence
const longestWord = (sentence) => {
  const words = sentence.match(/\b\w+\b/g) || [];
  return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
};
// console.log(longestWord("The quick brown fox")); // "quick"

// 29. Reverse a string
const reverseString = (str) => str.split('').reverse().join('');
// console.log(reverseString("hello")); // "olleh"

// 30. Remove duplicates from string
const removeDuplicates = (str) => [...new Set(str)].join('');
// console.log(removeDuplicates("hello")); // "helo"

// 31. Convert to uppercase/lowercase
const toUpper = (str) => str.toUpperCase();
const toLower = (str) => str.toLowerCase();

// 32. Count words in a string
const countWords = (str) => str.trim().split(/\s+/).filter(w => w).length;
// console.log(countWords("Hello world from JavaScript")); // 4

// 33. Replace spaces with underscores
const replaceSpaces = (str) => str.replace(/\s+/g, '_');
// console.log(replaceSpaces("Hello World")); // "Hello_World"

// 34. Remove all whitespaces
const removeWhitespace = (str) => str.replace(/\s+/g, '');
// console.log(removeWhitespace("Hello World")); // "HelloWorld"

// 35. Find first non-repeating character
const firstNonRepeating = (str) => {
  const freq = charFrequency(str);
  return str.split('').find(char => freq[char] === 1) || null;
};
// console.log(firstNonRepeating("aabbcde")); // "c"

// 36. Check if strings are rotations
const areRotations = (str1, str2) => {
  return str1.length === str2.length && (str1 + str1).includes(str2);
};
// console.log(areRotations("waterbottle", "erbottlewat")); // true


// ==================== ARRAY-BASED PROBLEMS ====================

// 37. Find largest and smallest element
const findLargestSmallest = (arr) => ({
  largest: Math.max(...arr),
  smallest: Math.min(...arr)
});
// console.log(findLargestSmallest([3, 5, 1, 8, 2])); // {largest: 8, smallest: 1}

// 38. Find second largest element
const secondLargest = (arr) => {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1] !== undefined ? unique[1] : null;
};
// console.log(secondLargest([3, 5, 1, 8, 2])); // 5

// 39. Sum and average of array
const sumArray = (arr) => arr.reduce((sum, n) => sum + n, 0);
const averageArray = (arr) => arr.length ? sumArray(arr) / arr.length : 0;
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// 40. Count even and odd numbers
const countEvenOdd = (arr) => {
  const even = arr.filter(n => n % 2 === 0).length;
  return { even, odd: arr.length - even };
};
// console.log(countEvenOdd([1, 2, 3, 4, 5, 6])); // {even: 3, odd: 3}

// 41. Reverse an array
const reverseArray = (arr) => [...arr].reverse();
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 42. Check if array is sorted
const isSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};
// console.log(isSorted([1, 2, 3, 4, 5])); // true

// 43. Find missing number in array (1 to n)
const findMissingNumber = (arr, n) => {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = sumArray(arr);
  return expectedSum - actualSum;
};
// console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3

// 44. Remove duplicates from array
const removeDuplicatesArray = (arr) => [...new Set(arr)];
// console.log(removeDuplicatesArray([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 45. Merge two sorted arrays
const mergeSortedArrays = (arr1, arr2) => {
  const result = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  return result.concat(arr1.slice(i), arr2.slice(j));
};
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// 46. Rotate array by k positions
const rotateArray = (arr, k) => {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
};
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// 47. Linear search
const linearSearch = (arr, target) => arr.indexOf(target);
// console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2

// 48. Binary search
const binarySearch = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

// 49. Bubble sort
const bubbleSort = (arr) => {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
};
// console.log(bubbleSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]

// 50. Selection sort
const selectionSort = (arr) => {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[j] < sorted[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [sorted[i], sorted[minIdx]] = [sorted[minIdx], sorted[i]];
    }
  }
  return sorted;
};
// console.log(selectionSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]

// 51. Insertion sort
const insertionSort = (arr) => {
  const sorted = [...arr];
  for (let i = 1; i < sorted.length; i++) {
    let key = sorted[i], j = i - 1;
    while (j >= 0 && sorted[j] > key) {
      sorted[j + 1] = sorted[j];
      j--;
    }
    sorted[j + 1] = key;
  }
  return sorted;
};
// console.log(insertionSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]

// 52. Find frequency of elements
const arrayFrequency = (arr) => {
  return arr.reduce((freq, item) => {
    freq[item] = (freq[item] || 0) + 1;
    return freq;
  }, {});
};
// console.log(arrayFrequency([1, 2, 2, 3, 3, 3])); // {1:1, 2:2, 3:3}

// 53. Find pair with given sum
const findPairWithSum = (arr, target) => {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(target - num)) return [target - num, num];
    seen.add(num);
  }
  return null;
};
// console.log(findPairWithSum([1, 2, 3, 4, 5], 9)); // [4, 5]

// 54. Find majority element (appears more than n/2 times)
const majorityElement = (arr) => {
  const freq = arrayFrequency(arr);
  const threshold = arr.length / 2;
  for (const [key, count] of Object.entries(freq)) {
    if (count > threshold) return key;
  }
  return null;
};
// console.log(majorityElement([1, 2, 2, 2, 3])); // "2"


// ==================== PATTERN PRINTING ====================

// 55. Right triangle star pattern
const rightTriangle = (n) => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    pattern += '*'.repeat(i) + '\n';
  }
  return pattern;
};
// console.log(rightTriangle(5));

// 56. Left triangle star pattern
const leftTriangle = (n) => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    pattern += ' '.repeat(n - i) + '*'.repeat(i) + '\n';
  }
  return pattern;
};

// 57. Pyramid pattern
const pyramid = (n) => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    pattern += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
  }
  return pattern;
};
// console.log(pyramid(5));

// 58. Diamond pattern
const diamond = (n) => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    pattern += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
  }
  for (let i = n - 1; i >= 1; i--) {
    pattern += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
  }
  return pattern;
};
// console.log(diamond(5));

// 59. Hollow rectangle pattern
const hollowRectangle = (rows, cols) => {
  let pattern = '';
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (i === 1 || i === rows || j === 1 || j === cols) {
        pattern += '*';
      } else {
        pattern += ' ';
      }
    }
    pattern += '\n';
  }
  return pattern;
};
// console.log(hollowRectangle(5, 8));

// 60. Floyd's triangle
const floydsTriangle = (n) => {
  let pattern = '', num = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += num++ + ' ';
    }
    pattern += '\n';
  }
  return pattern;
};
// console.log(floydsTriangle(5));

// 61. Pascal's triangle
const pascalsTriangle = (n) => {
  const triangle = [];
  for (let i = 0; i < n; i++) {
    triangle[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }
  return triangle.map(row => row.join(' ')).join('\n');
};
// console.log(pascalsTriangle(5));


// ==================== MATHEMATICAL PROBLEMS ====================

// 62. Generate Fibonacci series
const fibonacciSeries = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
};
// console.log(fibonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 63. Generate prime numbers up to n
const primesUpToN = (n) => {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};
// console.log(primesUpToN(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

// 64. Sum of natural numbers
const sumOfNaturalNumbers = (n) => (n * (n + 1)) / 2;
// console.log(sumOfNaturalNumbers(10)); // 55

// 65. Sum of squares
const sumOfSquares = (n) => (n * (n + 1) * (2 * n + 1)) / 6;
// console.log(sumOfSquares(5)); // 55

// 66. Sum of cubes
const sumOfCubes = (n) => Math.pow((n * (n + 1)) / 2, 2);
// console.log(sumOfCubes(5)); // 225

// 67. Arithmetic progression
const arithmeticProgression = (first, diff, n) => {
  return Array.from({ length: n }, (_, i) => first + i * diff);
};
// console.log(arithmeticProgression(2, 3, 5)); // [2, 5, 8, 11, 14]

// 68. Geometric progression
const geometricProgression = (first, ratio, n) => {
  return Array.from({ length: n }, (_, i) => first * Math.pow(ratio, i));
};
// console.log(geometricProgression(2, 3, 5)); // [2, 6, 18, 54, 162]

// 69. Simple and compound interest
const simpleInterest = (principal, rate, time) => (principal * rate * time) / 100;
const compoundInterest = (principal, rate, time, n = 1) => {
  return principal * Math.pow(1 + rate / (100 * n), n * time) - principal;
};
// console.log(simpleInterest(1000, 5, 2)); // 100

// 70. Area and perimeter of shapes
const circleArea = (r) => Math.PI * r * r;
const circlePerimeter = (r) => 2 * Math.PI * r;
const rectangleArea = (l, w) => l * w;
const rectanglePerimeter = (l, w) => 2 * (l + w);
const triangleArea = (base, height) => (base * height) / 2;

// 71. Roots of quadratic equation
const quadraticRoots = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return { roots: [], type: 'imaginary' };
  if (discriminant === 0) return { roots: [-b / (2 * a)], type: 'equal' };
  const sqrt = Math.sqrt(discriminant);
  return {
    roots: [(-b + sqrt) / (2 * a), (-b - sqrt) / (2 * a)],
    type: 'real'
  };
};
// console.log(quadraticRoots(1, -3, 2)); // {roots: [2, 1], type: "real"}

// 72. Power of a number (without built-in)
const power = (base, exp) => {
  if (exp === 0) return 1;
  if (exp < 0) return 1 / power(base, -exp);
  let result = 1;
  for (let i = 0; i < exp; i++) result *= base;
  return result;
};
// console.log(power(2, 5)); // 32

// 73. Square root using Newton's method
const squareRoot = (n, precision = 0.00001) => {
  if (n < 0) return NaN;
  let guess = n / 2;
  while (Math.abs(guess * guess - n) > precision) {
    guess = (guess + n / guess) / 2;
  }
  return guess;
};
// console.log(squareRoot(16)); // 4


// ==================== CONDITIONAL LOGIC PROBLEMS ====================

// 74. Maximum of three numbers
const maxOfThree = (a, b, c) => Math.max(a, b, c);
// console.log(maxOfThree(5, 10, 3)); // 10

// 75. Check if leap year
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
// console.log(isLeapYear(2024)); // true

// 76. Grade calculation
const calculateGrade = (marks) => {
  if (marks >= 90) return 'A+';
  if (marks >= 80) return 'A';
  if (marks >= 70) return 'B';
  if (marks >= 60) return 'C';
  if (marks >= 50) return 'D';
  return 'F';
};
// console.log(calculateGrade(85)); // "A"

// 77. Electricity bill calculation
const electricityBill = (units) => {
  let bill = 0;
  if (units <= 100) bill = units * 1.5;
  else if (units <= 200) bill = 100 * 1.5 + (units - 100) * 2;
  else if (units <= 300) bill = 100 * 1.5 + 100 * 2 + (units - 200) * 3;
  else bill = 100 * 1.5 + 100 * 2 + 100 * 3 + (units - 300) * 4;
  return bill;
};
// console.log(electricityBill(250)); // 500

// 78. Tax calculation
const calculateTax = (income) => {
  if (income <= 250000) return 0;
  if (income <= 500000) return (income - 250000) * 0.05;
  if (income <= 1000000) return 12500 + (income - 500000) * 0.2;
  return 112500 + (income - 1000000) * 0.3;
};
// console.log(calculateTax(600000)); // 32500

// 79. Triangle type of triangle based on sides
const triangleType = (a, b, c) => {
  if (a === b && b === c) return 'Equilateral';
  if (a === b || b === c || a === c) return 'Isosceles';
  return 'Scalene';
};
// console.log(triangleType(3, 3, 3)); // "Equilateral"

// 80. Check if sides can form a triangle
const canFormTriangle = (a, b, c) => a + b > c && b + c > a && a + c > b;
// console.log(canFormTriangle(3, 4, 5)); // true


// ==================== LOOP-BASED PROBLEMS ====================

// 81. Print multiplication table
const multiplicationTable = (n, limit = 10) => {
  const table = [];
  for (let i = 1; i <= limit; i++) {
    table.push(`${n} x ${i} = ${n * i}`);
  }
  return table.join('\n');
};
// console.log(multiplicationTable(5));

// 82. Find all factors of a number
const findFactors = (n) => {
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
};
// console.log(findFactors(12)); // [1, 2, 3, 4, 6, 12]

// 83. Prime numbers in a range
const primesInRange = (start, end) => {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};

console.log("Arnav Sagar")
// console.log(primesInRange(10, 30)); // [11,