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

    // if current display show 0 and user enters a number, we want to replace the 0
    if (currentValue == "0" && !isNaN(value)) {
        display.value = value;
    }

    // If current display shows 0 and the user enters a decimal,  keep the 0

    alert('You pressed:' +value);
}

function clearDisplay(){
    console.log('clear button pressed.');

    alert('Clear button was clicked');
}

function deleteLast(){
    console.log('Backspace button pressed.');

    alert('Backspace button was clicked');

}

function calculate(){
    console.log('Equals button pressed.');

    alert('Equals button was clicked');
}

// set up event listeners
document.addEventListener('DOMContentLoaded', function(){
    console.log('Calculator loaded successfully');
    console.log('Display element', display);

    if (display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
})


