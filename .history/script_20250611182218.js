// const { is } = require("express/lib/request");

// getting our display element
const display = document.getElementById('display');

// variable to track if u hv done a proper calculation T/F
let justCalculated = false;

// function isOperator(char) {
//     return ['+', '-', '*', '/'].includes(char)
// }

// function getLastChar() {
//     return display.value.slice(-1);
// }


// function append to our display
// event listeners
function appendToDisplay(value){
    console.log('Button pressed:', value);

    let currentValue = display.value;

    if (justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;
    }

    if (justCalculated && isOperator(value)) {
        display.value = currentValue + value;
        justCalculated = false;
        return;
    }

    // handles operators
    if (isOperator(value)) {
        // don't allow operator as 1st char (exception for minus)
        if (currentValue === '0' && value !== '-') {
            return;  //do nothing
        }

        // if the last character is already an operator, replace it
        if (isOperator(getLastChar())) {
            display.value = currentValue.slice(0, -1) + value;
        } else {
            display.value = currentValue = value;
        }
    } else if (!isNaN(value)) {
        if (currentValue === '0') {
            display.value = value;
        } else {
            display.value = currentValue + value;
        }
    } else if (currentValue === '.') {
        
        if(currentValue === '0') {
            display.value = currentValue +value;
        } else {
            // get the last number in the display after last operator
            let parts = currentValue.split('/[+\-*/');
            let lastNumber = parts[parts.length -1];

            // only add decimal if number doesn't already have one
            if (!lastNumber.includes('.')) {
                display.value = currentValue + value;
            }
        }
    } else {
            display.value = currentValue + value;
        }

    justCalculated = false;

    console.log('Display updated to:', display.value);
}

function clearDisplay(){
    console.log('Clear button pressed.');

    display.value = '0';
    justCalculated = false;

    display.style.backgroundColor= '#f0f0f0';
    setTimeout(() =>{
        display.style.backgroundColor = '';
    }, 150);

    
}

function deleteLast(){
    console.log('Backspace button pressed.');

    let currentValue = display.value;

    // if theres only 1 character or its 0, reset to 0
    if(currentValue.length <=1 || currentValue === '0') {
        display.value = '0';
    } else {
        display.value = currentValue.slice(0, -1);
    }
}

function calculate(){
    console.log('Equals button pressed.');
   
}

document.addEventListener('keydown', function(event) {
    console.log('key pressed', event.key)
0
    } else if (event.key === '.') {
        appendToDisplay('.');
    } else if (event.key === '+') {
        appendToDisplay('+');
    } else if (event.key === '-') {
        appendToDisplay('-');
    } else if (event.key === '*') {
        appendToDisplay('*');
    } else if (event.key === '/') {
        event.preventDefault();
        appendToDisplay('/');
    }

    else if (event.key === 'Enter'  || event.key === '=') {
        calculate();
    } else if (event.key === 'Escape' || event.key === 'c'  || event.key === 'C') {
        clearDisplay();
    } else if (event.key === 'Backspace') {
        deleteLast();
    }
});

// set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator loaded successfully');
    console.log('Display elemet', display);

    if (display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
});


