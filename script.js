let operations = ['/', '+', '-', '*', '.']
let displayValue = ''

function appendToDisplay(value) {
    if (operations.includes(value)) {
        if (operations.includes(displayValue.slice(-1))) {
            displayValue = displayValue.slice(0, -1)
        } else if (displayValue == '') {
            value = ''
        }
    }
    displayValue += value
    document.getElementById('display').value = displayValue
}

function clearDisplay() {
    displayValue = ''
    document.getElementById('display').value = displayValue
}

function backspace() {
    displayValue = displayValue.slice(0, -1)
    document.getElementById('display').value = displayValue
}

function calculateResult() {
    displayValue = String(parseFloat(eval(displayValue).toFixed(3)))
    if (!isFinite(displayValue)) {
        displayValue = ''
        document.getElementById('display').value = 'Erro'
    } else {
        document.getElementById('display').value = displayValue
    }
}
