// script.js

function appendChar(char) {
    document.getElementById('result').value += char;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    let currentDisplay = document.getElementById('result').value;
    document.getElementById('result').value = currentDisplay.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById('result').value;

        // Automatically close any opened parentheses
        let openParenthesisCount = (expression.match(/\(/g) || []).length;
        let closeParenthesisCount = (expression.match(/\)/g) || []).length;
        let missingCloseParenthesis = openParenthesisCount - closeParenthesisCount;

        for (let i = 0; i < missingCloseParenthesis; i++) {
            expression += ')';
        }

        let result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
