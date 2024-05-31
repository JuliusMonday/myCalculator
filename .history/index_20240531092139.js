let display = document.getElementById('result');

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function appendChar(char) {
    display.value += char;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Updated percentage handling
function calculatePercentage() {
    try {
        // Evaluate the current expression
        let currentExpression = eval(display.value);
        // Divide by 100 to get the percentage value
        display.value = currentExpression / 100;
    } catch (e) {
        display.value = 'Error';
    }
}

// Update the appendChar function for %
function appendChar(char) {
    if (char === '%') {
        calculatePercentage();
    } else {
        display.value += char;
    }
}
