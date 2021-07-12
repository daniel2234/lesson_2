// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
//Number.isNan() method takes any Javascript value and
//returns boolean true if the value is NaN false if it is not
//We check whether Number(number) is NaN
//since calling Number() on a non-numeric string evaluates to NaN.
//Thus, number is invalid if the conversion results in NaN.
//Note that Number() ignores leading whitespace in the number string,
// so Number(' 34') returns 34.
//Number('') returns 0
//
function validateYes(word) {
  return word.toLowerCase();
}

prompt("Welcome to Calculator!");

let lastResponse;

do {
  prompt("What is the first number?");
  let firstNumber = readline.question();

  while (invalidNumber(firstNumber)) {
    prompt('Hmm... this does not look like a valid number.');
    firstNumber = readline.question();
  }

  prompt("What is the second number?");
  let secondNumber = readline.question();

  while (invalidNumber(secondNumber)) {
    prompt('Hmm... this does not look like a valid number.');
    secondNumber = readline.question();
  }

  prompt("What operation would you like to perform? 1)Add 2)Subtract 3)Multiply 4)Divide");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      output = Number(firstNumber) / Number(secondNumber);
      break;
  }

  prompt(output);
  prompt("Would you like to play again (yes/no)??");
  lastResponse = readline.question();

} while (validateYes(lastResponse) === 'yes' || validateYes(lastResponse) === 'y');

//Asking the user for another calculation
//Currently, our calculator asks the user for two numbers and an operation
//and then exits after displaying the result.
//Wouldn't it be nice if we could ask the user if they wanted
//to perform another calculation and start a new calculation
//when they respond with yes?