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
        if (currentDisplay === '0') {
            currentDisplay = digit;
        } else {
            currentDisplay += digit;
        }

        display.textContent = currentDisplay;
    })
})
