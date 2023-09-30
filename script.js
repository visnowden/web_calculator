let displayValue = ""
function appendToDisplay(value) {
  displayValue += value
  document.getElementById("display").value = displayValue
}
function clearDisplay() {
  displayValue = ""
  document.getElementById("display").value = displayValue
}
function backspace() {
  displayValue = displayValue.slice(0, -1)
  document.getElementById("display").value = displayValue
}
function calculateResult() {
  try {
    displayValue = String(parseFloat(eval(displayValue).toFixed(10)))
    if (displayValue == Infinity) {
      displayValue = "Erro"
    }
    document.getElementById("display").value = displayValue
  } catch (error) {
    displayValue = "Erro"
    document.getElementById("display").value = displayValue
  }
}
