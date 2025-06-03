// getting our display element
const display = document.getElementById('display');

// variable to track if u hv done a proper calculation T/F
let justCalculated = false;

// function append to our display
function appendToDisplay(value){
    console.log('Button pressed:', value);

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
document.addEventListener('DOMContent',)



