document.getElementById("triple-btn").addEventListener("click", function () {
  const newNumber = getInputValue("triple-filed");
  if (isNaN(newNumber) || newNumber <= 0) {
    Swal.fire({
      icon: "error",
      title: "Please enter a number",
    });
    return;
  }
  const tripleNumber = newNumber * 3;
  setValue("triple", tripleNumber);
});
