// Global pointer references to display tracking node
const display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    
    // Logic Guard: Prevents dual entry stacking of adjacent mathematical operators
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else if (display.value !== '') {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Evaluate the string expression input within a secure error execution catch block
        if (display.value !== '') {
            // eval parses the mathematically arranged string array dynamically
            let result = eval(display.value);
            
            // Protect structural width integrity from deep floating decimal loops
            if (result % 1 !== 0) {
                result = Math.round(result * 100000) / 100000;
            }
            
            display.value = result;
        }
    } catch (error) {
        // Fallback display mechanism when broken algebraic logic operations occur
        display.value = 'Error';
    }
}