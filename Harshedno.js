function isHarshadNumber(num) {
  if (num === 0) return false;

  // Step 1: Convert number to string, then sum its digits
  let sumOfDigits = num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  // Step 2: Check divisibility
  return num % sumOfDigits === 0;
}

// Example usage
let number = 18;
if (isHarshadNumber(number)) {
  console.log(`${number} is a Harshad number`);
} else {
  console.log(`${number} is not a Harshad number`);
}
