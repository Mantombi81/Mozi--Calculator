// reference display element
const display = document.getElementById('display');
// track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);

    alert('You pressed: ' + value);
}
// function to clear our display
function clearDisplay() {
    console.log('Clear button pressed. ');

    alert('Clear button was clicked' );
}
function deleteLast() {
    console.log('Backspace button pressed. ');

    alert('Backspace button was clicked' );
}
function calculate() {
    console.log('Equals button pressed. ');

    alert('Equals button was clicked' );
}
// setting our event listeners
document.addEventListener('DOMContentLoaded', function())