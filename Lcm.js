// Function to find HCF (GCD)
function findHCF(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to find LCM
function findLCM(a, b) {
    return (a * b) / findHCF(a, b);
}

// Example usage
let num1 = 12;
let num2 = 18;

let hcf = findHCF(num1, num2);
let lcm = findLCM(num1, num2);

console.log(`The HCF of ${num1} and ${num2} is ${hcf}`);
console.log(`The LCM of ${num1} and ${num2} is ${lcm}`);
