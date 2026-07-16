// //LRU Cache

// const cache = new Map();
// const capacity = 3;

// function get(key) {
//   const cacheData = cache.get(key);
//   if (!cacheData) {
//     return false;
//   }

//   cache.delete(key);
//   cache.set(key, cacheData);

//   return cacheData;
// }

// function put(key, value) {
//   const cacheData = cache.has(key);
//   if (!cacheData) {
//     cache.delete(key);
//   }

//   cache.set(key, value);
//   const size = cache.size;
//   console.log(size, capacity);

//   if (size > capacity) {
//     const oldestKey = cache.keys().next().value;
//     cache.delete(oldestKey);
//   }
// }

// put(1, "Mohit");
// put(2, "Sidhant");
// put(3, "Ankit");
// console.log(cache);

// const getMohit = get(1);
// console.log(getMohit);
// console.log(cache);

// put(4, "Shubham");
// console.log(cache);

const array = ["eat", "tae", "rst", "str", "ate", "abc", "bca"];
const unique = {};

for (let index = 0; index < array.length; index++) {
  const element = array[index].split("").sort().join("");
  if (!unique[element]) {
    unique[element] = [];
  }
  unique[element].push(array[index]);
}

const anagram = [];
for (const key in unique) {
  anagram.push(unique[key]);
}

console.log(anagram);
