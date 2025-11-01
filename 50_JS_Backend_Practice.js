/**
 * 50_JS_Backend_Practice.js
 * Answers to 50 JavaScript logic-building questions for backend mastery (Node + Express).
 * Each question has a function (q1...q50) with an example call and inline explanations.
 *
 * Save and run with Node.js: `node 50_JS_Backend_Practice.js`
 * Study pattern: function + comment explaining the approach + example usage.
 */

// ------------------------- Section 1: Core JS & Syntax -------------------------

// 1. Check if a number is even or odd WITHOUT using %
function q1_isEvenWithoutModulo(n) {
  // Use bitwise AND: even numbers have least significant bit 0.
  // n & 1 === 0 means even, ===1 means odd.
  return (n & 1) === 0;
}
console.log("q1:", q1_isEvenWithoutModulo(4)); // true

// 2. Swap two variables without using a third variable
function q2_swap(a, b) {
  // Use array destructuring (modern JS) to swap in-place.
  // This avoids temporary variables and is readable.
  [a, b] = [b, a];
  return [a, b];
}
console.log("q2:", q2_swap(1, 2)); // [2,1]

// 3. Reverse a string without using .reverse()
function q3_reverseString(str) {
  // Build a new string by iterating backwards.
  // Strings are immutable, so we construct a new string.
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) res += str[i];
  return res;
}
console.log("q3:", q3_reverseString("hello")); // 'olleh'

// 4. Check if a string is a palindrome
function q4_isPalindrome(s) {
  // Normalize (lowercase, remove non-alphanum) then compare with reversed.
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Use two-pointer compare for efficiency (O(n) time, O(1) extra).
  let i = 0,
    j = clean.length - 1;
  while (i < j) {
    if (clean[i] !== clean[j]) return false;
    i++;
    j--;
  }
  return true;
}
console.log("q4:", q4_isPalindrome("A man, a plan, a canal: Panama")); // true

// 5. Count the number of vowels in a given string
function q5_countVowels(s) {
  // Use regex to match vowels and length of array result.
  const matches = s.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log("q5:", q5_countVowels("Hello World")); // 3 (e,o,o)

// 6. Capitalize the first letter of each word in a sentence
function q6_titleCase(sentence) {
  // Split words, capitalize first char and join.
  return sentence
    .split(" ")
    .map((word) =>
      word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ""
    )
    .join(" ");
}
console.log("q6:", q6_titleCase("make this Title case"));

// 7. Factorial using recursion
function q7_factorial(n) {
  if (n < 0) throw new Error("Negative not allowed");
  if (n === 0 || n === 1) return 1;
  return n * q7_factorial(n - 1); // typical recursion
}
console.log("q7:", q7_factorial(5)); // 120

// 8. Fibonacci sequence up to n terms
function q8_fibonacci(n) {
  // Return array of first n fibonacci numbers.
  if (n <= 0) return [];
  if (n === 1) return [0];
  const res = [0, 1];
  while (res.length < n) {
    const a = res[res.length - 1],
      b = res[res.length - 2];
    res.push(a + b);
  }
  return res;
}
console.log("q8:", q8_fibonacci(6)); // [0,1,1,2,3,5]

// 9. Find largest and smallest number in an array
function q9_minMax(arr) {
  // Use a single pass to track min and max (O(n))
  if (arr.length === 0) return { min: undefined, max: undefined };
  let min = arr[0],
    max = arr[0];
  for (const v of arr) {
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return { min, max };
}
console.log("q9:", q9_minMax([3, 1, 9, 2]));

// 10. Flatten a nested array (recursive)
function q10_flatten(arr) {
  // Recursively concatenate nested arrays.
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item)) res.push(...q10_flatten(item));
    else res.push(item);
  }
  return res;
}
console.log("q10:", q10_flatten([1, [2, [3, 4], 5], 6])); // [1,2,3,4,5,6]

// ------------------------- Section 2: Arrays -------------------------

// 11. Remove duplicates from an array (multiple ways)
function q11_removeDuplicates(arr) {
  // Fastest modern way: Set to remove duplicates, then back to array
  return [...new Set(arr)];
}
console.log("q11:", q11_removeDuplicates([1, 2, 2, 3, 3, 3]));

// 12. Sort array ascending/descending
function q12_sortNumbers(arr) {
  // Use slice to avoid mutating input, comparator for numeric sort
  const asc = [...arr].sort((a, b) => a - b);
  const desc = [...arr].sort((a, b) => b - a);
  return { asc, desc };
}
console.log("q12:", q12_sortNumbers([5, 2, 9, 1]));

// 13. Intersection and union of two arrays
function q13_intersectionUnion(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  // Intersection: items in both
  const intersection = [...setA].filter((x) => setB.has(x));
  // Union: combine sets
  const union = [...new Set([...a, ...b])];
  return { intersection, union };
}
console.log("q13:", q13_intersectionUnion([1, 2, 3], [2, 3, 4]));

// 14. Group elements by property
function q14_groupBy(arr, keyFn) {
  // keyFn can be a string key or a function
  const map = new Map();
  for (const item of arr) {
    const key = typeof keyFn === "function" ? keyFn(item) : item[keyFn];
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  }
  // Convert Map to plain object for convenience
  return Object.fromEntries(map);
}
console.log(
  "q14:",
  q14_groupBy([{ age: 20 }, { age: 21 }, { age: 20 }], "age")
);

// 15. Frequency of each element in an array
function q15_frequency(arr) {
  const freq = {};
  for (const item of arr) freq[item] = (freq[item] || 0) + 1;
  return freq;
}
console.log("q15:", q15_frequency(["a", "b", "a", "c", "b", "a"]));

// 16. Rotate an array by k positions (right rotate)
function q16_rotate(arr, k) {
  const n = arr.length;
  if (n === 0) return [];
  k = k % n; // normalize
  return arr.slice(-k).concat(arr.slice(0, n - k));
}
console.log("q16:", q16_rotate([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]

// 17. Split array into chunks
function q17_chunk(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}
console.log("q17:", q17_chunk([1, 2, 3, 4, 5, 6, 7], 3));

// 18. Find second largest and second smallest
function q18_secondMinMax(arr) {
  // Use a single pass to find unique min/max and second min/max
  const unique = [...new Set(arr)];
  if (unique.length < 2)
    return { secondSmallest: undefined, secondLargest: undefined };
  unique.sort((a, b) => a - b);
  return {
    secondSmallest: unique[1],
    secondLargest: unique[unique.length - 2],
  };
}
console.log("q18:", q18_secondMinMax([5, 1, 2, 2, 9, 9, 3]));

// 19. Remove falsy values from an array
function q19_removeFalsy(arr) {
  return arr.filter(Boolean); // Boolean constructor used as predicate filters truthy values
}
console.log("q19:", q19_removeFalsy([0, 1, false, 2, "", 3, null, NaN, 4]));

// 20. Merge two sorted arrays into one sorted array (like merge step in merge sort)
function q20_mergeSorted(a, b) {
  const res = [];
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) res.push(a[i++]);
    else res.push(b[j++]);
  }
  while (i < a.length) res.push(a[i++]);
  while (j < b.length) res.push(b[j++]);
  return res;
}
console.log("q20:", q20_mergeSorted([1, 3, 5], [2, 4, 6]));

// ------------------------- Section 3: Objects & Maps -------------------------

// 21. Invert keys and values in an object
function q21_invertObject(obj) {
  const res = {};
  for (const [k, v] of Object.entries(obj)) {
    res[v] = k; // assume values are unique and stringifiable
  }
  return res;
}
console.log("q21:", q21_invertObject({ a: 1, b: 2, c: 3 }));

// 22. Deep compare two objects
function q22_deepEqual(a, b) {
  // Handle primitives and functions straightforwardly
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;
  // Compare keys length
  const aKeys = Object.keys(a),
    bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  // Recursively compare values
  for (const key of aKeys) {
    if (!q22_deepEqual(a[key], b[key])) return false;
  }
  return true;
}
console.log(
  "q22:",
  q22_deepEqual({ x: 1, y: { z: 2 } }, { x: 1, y: { z: 2 } })
); // true

// 23. Clone an object (shallow and deep)
function q23_cloneShallow(obj) {
  return { ...obj }; // spread creates shallow clone
}
function q23_cloneDeep(obj) {
  // Simple deep clone using structuredClone (Node 17+) or JSON fallback
  if (typeof structuredClone === "function") return structuredClone(obj);
  return JSON.parse(JSON.stringify(obj)); // note: loses functions/undefined/Date/RegExp
}
console.log("q23 shallow:", q23_cloneShallow({ a: 1, b: { c: 2 } }));
console.log("q23 deep:", q23_cloneDeep({ a: 1, b: { c: 2 } }));

// 24. Count number of properties in an object
function q24_countProps(obj) {
  return Object.keys(obj).length;
}
console.log("q24:", q24_countProps({ a: 1, b: 2, c: 3 }));

// 25. Convert object to key-value pairs and vice versa
function q25_objToPairs(obj) {
  return Object.entries(obj);
}
function q25_pairsToObj(pairs) {
  return Object.fromEntries(pairs);
}
console.log(
  "q25:",
  q25_objToPairs({ a: 1, b: 2 }),
  q25_pairsToObj([
    ["a", 1],
    ["b", 2],
  ])
);

// 26. Deep merge two objects
function q26_deepMerge(a, b) {
  const res = { ...a };
  for (const [k, v] of Object.entries(b)) {
    if (
      v &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      res[k] &&
      typeof res[k] === "object"
    ) {
      res[k] = q26_deepMerge(res[k], v); // recursive merge for nested plain objects
    } else {
      res[k] = v;
    }
  }
  return res;
}
console.log(
  "q26:",
  q26_deepMerge({ x: 1, y: { a: 1 } }, { y: { b: 2 }, z: 3 })
);

// 27. Delete specific keys from an object
function q27_deleteKeys(obj, keys) {
  const res = { ...obj };
  for (const k of keys) delete res[k];
  return res;
}
console.log("q27:", q27_deleteKeys({ a: 1, b: 2, c: 3 }, ["b", "c"]));

// 28. Find a key by its value
function q28_findKeyByValue(obj, target) {
  return Object.keys(obj).find((k) => obj[k] === target);
}
console.log("q28:", q28_findKeyByValue({ a: 1, b: 2, c: 3 }, 2)); // 'b'

// 29. Flatten nested object paths into dot notation
function q29_flattenObject(obj, prefix = "") {
  const res = {};
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      Object.assign(res, q29_flattenObject(v, path));
    } else {
      res[path] = v;
    }
  }
  return res;
}
console.log("q29:", q29_flattenObject({ a: { b: { c: 1 } }, d: 2 }));

// 30. Deep freeze an object (freeze nested properties)
function q30_deepFreeze(obj) {
  Object.freeze(obj);
  for (const val of Object.values(obj)) {
    if (val && typeof val === "object" && !Object.isFrozen(val))
      q30_deepFreeze(val);
  }
  return obj;
}
const obj30 = { a: { b: 1 } };
q30_deepFreeze(obj30);
// now obj30 and nested objects cannot be mutated
console.log("q30 frozen:", Object.isFrozen(obj30), Object.isFrozen(obj30.a));

// ------------------------- Section 4: Asynchronous JavaScript -------------------------

// 31. Create a promise that resolves after a random delay
function q31_randomDelayPromise() {
  const delay = Math.floor(Math.random() * 1000); // up to 1s
  return new Promise((resolve) => setTimeout(() => resolve(delay), delay));
}
q31_randomDelayPromise().then((d) =>
  console.log("q31 resolved after", d, "ms")
);

// 32. Fetch two promises in parallel using async/await
async function q32_parallel(p1, p2) {
  // Use Promise.all to run in parallel and await both results
  const [r1, r2] = await Promise.all([p1, p2]);
  return [r1, r2];
}
(async () => {
  const r = await q32_parallel(
    Promise.resolve(1),
    new Promise((res) => setTimeout(() => res(2), 100))
  );
  console.log("q32:", r);
})();

// 33. Retry mechanism for a failed async function
async function q33_retry(fn, retries = 3, delay = 200) {
  // Try calling fn(); on failure wait and retry up to retries times.
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err; // last attempt -> rethrow
      await new Promise((r) => setTimeout(r, delay));
    }
  }
}
(async () => {
  let attempt = 0;
  const unstable = async () => {
    attempt++;
    if (attempt < 3) throw new Error("fail");
    return "ok";
  };
  const res = await q33_retry(unstable, 5, 100);
  console.log("q33 retry result:", res);
})();

// 34. Implement Promise.all
function q34_promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    if (promises.length === 0) return resolve([]);
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((v) => {
          results[i] = v;
          completed++;
          if (completed === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
}
q34_promiseAll([Promise.resolve(1), Promise.resolve(2)]).then((r) =>
  console.log("q34:", r)
);

// 35. Async function to simulate API call chaining
async function q35_chainAPIs() {
  // Example: call API A -> use result to call API B -> return final result
  const a = await Promise.resolve("A-result");
  const b = await Promise.resolve(a + " + B-result");
  return b;
}
q35_chainAPIs().then((r) => console.log("q35:", r));

// 36. Timeout wrapper around a promise
function q36_withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );
  return Promise.race([promise, timeout]);
}
q36_withTimeout(
  new Promise((res) => setTimeout(() => res("done"), 50)),
  100
).then((r) => console.log("q36:", r));

// 37. Demonstrate event loop ordering (microtasks vs macrotasks)
// Microtask (Promise) runs before macrotask (setTimeout) in the same tick
function q37_eventLoopDemo() {
  console.log("q37 start");
  setTimeout(() => console.log("q37 macrotask (setTimeout)"), 0);
  Promise.resolve().then(() => console.log("q37 microtask (promise)"));
  console.log("q37 end");
}
q37_eventLoopDemo(); // order: start, end, microtask, macrotask

// 38. Rate-limit API calls using closure (token bucket simplified)
function q38_rateLimiter(limitPerInterval, intervalMs) {
  let tokens = limitPerInterval;
  setInterval(() => (tokens = limitPerInterval), intervalMs); // refill
  return function tryCall(fn) {
    if (tokens > 0) {
      tokens--;
      return fn();
    } else {
      return Promise.reject(new Error("Rate limit exceeded"));
    }
  };
}
const limiter = q38_rateLimiter(2, 1000);
// calling limiter(() => Promise.resolve('ok')) ; demonstration:
limiter(() => Promise.resolve("ok"))
  .then(console.log)
  .catch(console.error);

// 39. Debounce and throttle
function q39_debounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}
function q39_throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
// quick demo (not printing extensively)

// 40. Read files asynchronously sequentially (simulate with promises)
async function q40_readFilesSequential(filePromises) {
  const res = [];
  for (const p of filePromises) {
    // await ensures sequential processing
    res.push(await p);
  }
  return res;
}
(async () => {
  const files = [Promise.resolve("file1"), Promise.resolve("file2")];
  console.log("q40:", await q40_readFilesSequential(files));
})();

// ------------------------- Section 5: Strings, Sets & Maps -------------------------

// 41. Remove duplicate characters from a string
function q41_removeDuplicateChars(s) {
  // Keep order by using Set while iterating
  const seen = new Set();
  let out = "";
  for (const ch of s) {
    if (!seen.has(ch)) {
      seen.add(ch);
      out += ch;
    }
  }
  return out;
}
console.log("q41:", q41_removeDuplicateChars("banana")); // 'ban'

// 42. Most frequent character in a string
function q42_mostFrequentChar(s) {
  const freq = {};
  for (const ch of s) freq[ch] = (freq[ch] || 0) + 1;
  let maxChar = null,
    maxCount = 0;
  for (const [ch, count] of Object.entries(freq)) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = ch;
    }
  }
  return { char: maxChar, count: maxCount };
}
console.log("q42:", q42_mostFrequentChar("aabccc"));

// 43. Count word occurrences in a paragraph
function q43_wordCount(paragraph) {
  // Normalize spaces and punctuation, split on whitespace
  const words = paragraph
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  return q15_frequency(words); // reuse frequency function
}
console.log("q43:", q43_wordCount("Hello hello, world! Hello."));

// 44. Check if two strings are anagrams
function q44_areAnagrams(a, b) {
  const normalize = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  return normalize(a) === normalize(b);
}
console.log("q44:", q44_areAnagrams("Listen", "Silent"));

// 45. Find all substrings of a given string
function q45_substrings(s) {
  const subs = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      subs.push(s.slice(i, j));
    }
  }
  return subs;
}
console.log('q45 count for "abc":', q45_substrings("abc").length);

// 46. Convert sentence into camelCase and snake_case
function q46_cases(s) {
  const words = s.toLowerCase().trim().split(/\s+/);
  const camel =
    words[0] +
    words
      .slice(1)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("");
  const snake = words.join("_");
  return { camel, snake };
}
console.log("q46:", q46_cases("convert THIS to cases"));

// 47. Use Map to count occurrences efficiently
function q47_countWithMap(arr) {
  const m = new Map();
  for (const v of arr) m.set(v, (m.get(v) || 0) + 1);
  return m;
}
console.log("q47:", Array.from(q47_countWithMap(["a", "b", "a"]).entries()));

// 48. Implement caching (LRU-like simple cache using Map)
class SimpleCache {
  constructor(limit = 5) {
    this.limit = limit;
    this.map = new Map(); // preserves insertion order
  }
  get(key) {
    if (!this.map.has(key)) return undefined;
    const val = this.map.get(key);
    // move to end to mark as recently used
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }
  set(key, val) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, val);
    if (this.map.size > this.limit) {
      // remove least recently used (first item)
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
  }
}
const cache = new SimpleCache(2);
cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);
console.log("q48 get a (evicted):", cache.get("a")); // undefined

// 49. Detect circular references in an object
function q49_hasCycle(obj) {
  try {
    // JSON.stringify will throw for circular refs; we can catch it.
    JSON.stringify(obj);
    return false;
  } catch (e) {
    if (e.message && e.message.includes("circular")) return true;
    // fallback: do DFS with seen set
    const seen = new Set();
    function dfs(o) {
      if (o && typeof o === "object") {
        if (seen.has(o)) return true;
        seen.add(o);
        for (const val of Object.values(o)) if (dfs(val)) return true;
        seen.delete(o);
      }
      return false;
    }
    return dfs(obj);
  }
}
const a = {};
a.self = a;
console.log("q49:", q49_hasCycle(a)); // true

// 50. Serialize and deserialize an object manually (simple version)
function q50_serialize(obj) {
  // For primitives and arrays/objects only (no functions)
  return JSON.stringify(obj);
}
function q50_deserialize(s) {
  return JSON.parse(s);
}
console.log("q50:", q50_deserialize(q50_serialize({ a: 1, b: [1, 2, 3] })));

// ------------------------- Bonus utilities used in backend -------------------------

// Pagination utility (bonus)
function paginate(arr, page = 1, perPage = 10) {
  const start = (page - 1) * perPage;
  return arr.slice(start, start + perPage);
}
console.log("bonus paginate:", paginate([1, 2, 3, 4, 5, 6, 7], 2, 3));

// JWT-like validation regex (very simplified) - BONUS
function validateFakeJWT(token) {
  // JWT has three base64url parts separated by dots: header.payload.signature
  return /^[A-Za-z0-9-_]+?\.[A-Za-z0-9-_]+?\.[A-Za-z0-9-_]+?$/.test(token);
}
console.log("bonus jwt-like:", validateFakeJWT("aaaa.bbbb.cccc"));

// Simple middleware runner (bonus)
function runMiddlewares(middlewares, ctx) {
  // sequentially run middleware functions that accept ctx and next()
  let idx = -1;
  function dispatch(i) {
    if (i <= idx)
      return Promise.reject(new Error("next() called multiple times"));
    idx = i;
    if (i === middlewares.length) return Promise.resolve();
    const mw = middlewares[i];
    try {
      return Promise.resolve(mw(ctx, () => dispatch(i + 1)));
    } catch (err) {
      return Promise.reject(err);
    }
  }
  return dispatch(0);
}
(async () => {
  const mws = [
    async (ctx, next) => {
      ctx.val = 1;
      await next();
      ctx.val += 10;
    },
    async (ctx, next) => {
      ctx.val *= 2;
      await next();
      ctx.val *= 3;
    },
  ];
  const ctx = {};
  await runMiddlewares(mws, ctx);
  console.log("bonus middlewares result:", ctx.val); // (1*2)*? then after returns multiply... final result expected
})();

/**
 * End of file.
 * This file demonstrates straightforward, well-explained answers with inline comments for learning.
 * If you want:
 *  - a separate file for tests,
 *  - each question exported as module functions,
 *  - or the same content split into multiple files (e.g., arrays.js, objects.js, async.js),
 * let me know and I'll create them.
 */
