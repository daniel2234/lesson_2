// let m = p * (j / (1 - Math.pow((1 + j), (-n))));
// 2.99 example
// let m = 100000 * (0.00249 / 1 - Math.pow((1 + 0.00249), (-96))));

//let m = 200000 * (0.0024916666666666668 / (1 - Math.pow((1 + 0.0024916666666666668), (-96))));
//m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months
// When you write your program,
// don't use the single-letter variables m, p, j, and n; use explicit names.
// For instance, you may want to use loanAmount instead of p.

// Try to print the payment amount as a dollar and cents amount,
// e.g., $123.45 or $371.00.

// Finally, don't forget to run your code through ESLint.
// Also, consider asking for a code review after you've reviewed your code
//against the possible solution, and made any adjustments that you need to make.

//give the user for the monthly payment, m
//ask the user for the loan amount, p
//ask the user for the loan duration in months, n
//ask the user the for the monthly interest rate , j

//let loanAmount instead of p

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
//function that checks for invalid number
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number <= 0;
}

function showFormattedLoanAmount(monthlyPayment) {
  return monthlyPayment.toFixed(2).toLocaleString("en-US");
}

function monthlyInterestRateConversion(interest) {
  return Number(interest) / 12;
}

function interestRateConversion(interest) {
  return Number(interest) / 100;
}

function monthlyPaymentCalculation(loanAmount, interest, loanMonthDuration) {
  return loanAmount *
        (interest / (1 - Math.pow((1 + interest), (-loanMonthDuration))));
}

prompt('Welcome to the Auto Loan Calculator');

prompt('What is the loan amount?');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt("This does not seem like it is the right value");
  loanAmount = readline.question();
}

prompt("What is the loan duration in months?");
let loanMonthDuration = readline.question();

while (invalidNumber(loanMonthDuration)) {
  prompt("This does not seem like it is the right value");
  loanAmount = readline.question();
}

prompt("What is the monthly interest rate? (ex.2.99)");
let interest = readline.question();

while (invalidNumber(interest)) {
  prompt("This does not seem like it is the right value");
  interest = readline.question();
}

interest = monthlyInterestRateConversion(interest);
interest = interestRateConversion(interest);

let monthlyPayment = monthlyPaymentCalculation (
  loanAmount, interest, loanMonthDuration
);

monthlyPayment = showFormattedLoanAmount(monthlyPayment);

prompt(`$${monthlyPayment}`);