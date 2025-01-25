// Append values to display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Clear display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Calculate the result
function calculateResult() {
  let display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
