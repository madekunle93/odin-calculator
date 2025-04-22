function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Can't divide by zero!";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalide operator";
    }
}

// Grab all number buttons and the display
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.btn.number');

// Start the calculator with '0'
let currentDisplay = '0';

// Show numbers in the display area
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const digit = button.textContent;
        if (currentDisplay === '0' || shouldResetDisplay) {
            currentDisplay = digit;
            shouldResetDisplay = false;
        } else {
            currentDisplay += digit;
        }

        display.textContent = currentDisplay;
    })
})

// Grab operator & equals buttons
const operatorButtons = document.querySelectorAll('.btn.operator');
const equalsButton = document.getElementById('equals');

let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

// Set operator button logic
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (operator !== null) {
        evaluate();
      }
      operator = button.textContent;
      firstOperand = parseFloat(currentDisplay);
      shouldResetDisplay = true;
    });
  });

// Set equals button logic
equalsButton.addEventListener('click', () => {
    if (operator === null || shouldResetDisplay) return;
    evaluate();
    operator = null;
  });

// To do the sums when equals is pressed
function evaluate() {
    const secondOperand = parseFloat(currentDisplay);
    const result = operate(operator, firstOperand, secondOperand);
    currentDisplay = result.toString();
    display.textContent = currentDisplay;
    firstOperand = result;
    shouldResetDisplay = true;
  }

// Grab clear button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearCalculator);
// Reset everything
function clearCalculator() {
    currentDisplay = '0';
    firstOperand = null;
    operator = null;
    shouldResetDisplay = false;
    display.textContent = currentDisplay;
}

// Refine divide funtion
function divide(a,b) {
    if (b === 0) {
        return "Can't divide by zero!"
    }
    return a / b;
}

