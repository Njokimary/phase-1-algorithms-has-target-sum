function hasTargetSum(array, target) {
  // Create a set to store the numbers we have seen so far
  const seenNumbers = new Set();

  // Iterate through the array
  for (let num of array) {
    // Calculate the difference between the target and the current number
    const difference = target - num;

    // If the difference is in the set, then we found a pair that adds up to the target
    if (seenNumbers.has(difference)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // If we reach this point, no pair adds up to the target
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n) - Linear time complexity, where n is the number of elements in the array.
  The function iterates through the array once, performing constant time operations in each iteration.

  Space Complexity: O(n) - Linear space complexity, where n is the number of elements in the array.
  The function uses a Set to store the numbers we have seen so far, which can grow to hold all elements in the array.
*/

/* 
  Add your pseudocode here
  1. Create an empty Set called 'seenNumbers'.
  2. Iterate through each number 'num' in the 'array'.
  3. Calculate the 'difference' between 'target' and 'num'.
  4. Check if 'difference' is in 'seenNumbers':
       a. If yes, return true, as we found a pair that adds up to the target.
       b. If no, add 'num' to 'seenNumbers'.
  5. If the loop finishes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  The function uses a Set to keep track of the numbers seen so far while iterating through the input array. For each number in the array, it calculates the difference between the target and the current number. If the difference is already in the Set, it means there is a pair that adds up to the target, and the function returns true. Otherwise, it adds the current number to the Set and continues the iteration. If the loop completes without finding a pair, the function returns false.

  This approach has a time complexity of O(n) because it iterates through the array once, and a space complexity of O(n) because it uses a Set to store the numbers seen so far, which can grow to hold all elements in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
