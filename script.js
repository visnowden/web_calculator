let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  try {
    // Usar parseFloat para evitar problemas com concatenação de strings
    displayValue = String(parseFloat(eval(displayValue).toFixed(10)));
    document.getElementById("display").value = displayValue;
  } catch (error) {
    displayValue = "Error";
    document.getElementById("display").value = displayValue;
    console.error(error); // Log do erro no console para depuração
  }
}
