function getInputValue(inputId) {
  const inputValueId = document.getElementById(inputId);
  const inputValue = parseFloat(inputValueId.value);
  inputValueId.value = "";
  return inputValue;
}
function getTextValue(textId) {
  const textValueId = document.getElementById(textId);
  const textValue = parseFloat(textValueId.value);
  return textValue;
}

function setValue(textId, value) {
  const setTextValue = document.getElementById(textId);
  setTextValue.innerText = value;
}
