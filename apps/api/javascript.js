const arrayToFlat = [
  10,
  20,
  30,
  [12, 56, 778, 322],
  [123, 235, 57, 213],
  78,
  [231, 2314, 567, 8983, 456],
];
const flatArrManually = (arrayToFlat, flatArray = []) => {
  for (let index = 0; index < arrayToFlat.length; index++) {
    const element = arrayToFlat[index];
    if (Array.isArray(element)) {
      flatArrManually(element, flatArray);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};
console.log(flatArrManually(arrayToFlat));

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let index = 3; index <= Math.sqrt(number); index += 2) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
};

const findPrimeNumber = (primeNumberStr) => {
  const numbers = primeNumberStr.split("");
  const primeNumbers = {};
  let highestOccurrence = 0;
  let primeNum;

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const checkPrime = isPrime(parseInt(element));
    if (checkPrime) {
      primeNumbers[element]
        ? (primeNumbers[element] += 1)
        : (primeNumbers[element] = 1);
    }
  }

  for (const element in primeNumbers) {
    const occurrence = primeNumbers[element];

    if (occurrence > highestOccurrence) {
      highestOccurrence = occurrence;
      primeNum = element;
    }
  }

  return {
    allPrime: primeNumbers,
    primeNumWithHighestOccurrence: `Prime Number ${primeNum} has the highest occurrence that is ${highestOccurrence} occurrence in string ${primeNumberStr}`,
  };
};

console.log(findPrimeNumber("333555777777772229995"));


