// getting our display element
const display = document.getElementById('display');

// variable to track if u hv done a proper calculation T/F
let justCalculated = false;

// function append to our display
function appendToDisplay(value){
    console.log('Button pressed:', value);

    let currentValue = display.value;

    if (justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;
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
        display.value = currentValue.slice(0, -1);
    }

    alert('Backspace button was clicked');

}

function calculate(){
    console.log('Equals button pressed.');
   
}

document.addEventListener('keydown', function(event) {
    console.log('key pressed', event.key)

    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
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
});

// set up event listeners
document.addEventListener('DOMContentLoaded', function(){
    console.log('Calculator loaded successfully');
    console.log('Display element', display);

    if (display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
});


