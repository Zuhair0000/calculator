const input = document.getElementById("input");

function appendToInput(i) {
  input.value += i;
}

function clearInput() {
  input.value = "";
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}
