function simpleInterestCalculator() {
    let principal = parseFloat(prompt("Enter the principal amount:"));
    let rate = parseFloat(prompt("Enter the rate of interest:"));
    let time = parseFloat(prompt("Enter the time (in years):"));
    let simpleInterest = (principal * rate * time) / 100;
    return `The simple interest is: ${simpleInterest}`;
}

console.log(simpleInterestCalculator());
