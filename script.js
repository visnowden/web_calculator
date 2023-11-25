let operations = ["/", "+", "-", "*", "."];
let displayValueSystem = "";
let displayValue = "";
function appendToDisplay(value) {
    if (operations.includes(value)) {
        if (operations.includes(displayValueSystem.slice(-1))) {
            displayValueSystem = displayValueSystem.slice(0, -1);
        } else if (displayValueSystem == "") {
            value = "";
        }
    }
    displayValueSystem += value;
    userVision();
    document.getElementById("display").value = displayValue;
}
function clearDisplay() {
    displayValueSystem = "";
    userVision();
    document.getElementById("display").value = 0;
}
function backspace() {
    displayValueSystem = displayValueSystem.slice(0, -1);
    if (displayValueSystem.length == 0) {
        document.getElementById("display").value = 0;
    } else {
        userVision();
        document.getElementById("display").value = displayValue;
    }
}
function calculateResult() {
    displayValueSystem = String(parseFloat(eval(displayValueSystem).toFixed(3)));
    userVision();
    if (!isFinite(displayValueSystem)) {
        displayValueSystem = "";
        userVision();
        document.getElementById("display").value = "Erro";
    } else {
        document.getElementById("display").value = displayValue;
    }
}
function userVision() {
    displayValue = "";
    for (var i = 0; i < displayValueSystem.length; i++) {
        switch (displayValueSystem[i]) {
            case ".":
                displayValue += ",";
                break;
            case "*":
                displayValue += ".";
                break;
            case "/":
                displayValue += "÷";
                break;
            case "-":
                displayValue += "−";
                break;
            default:
                displayValue += displayValueSystem[i];
        }
    }
    if (displayValue == "") {
        displayValue = "0";
    }
}
