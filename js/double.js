document.getElementById("double-btn").addEventListener("click", function () {
  const newNumber = getInputValue("double-filed");
  if (isNaN(newNumber) || newNumber <= 0) {
    Swal.fire({
      icon: "error",
      title: "Please enter a number",
    });
    return;
  }

  const doubleNumber = newNumber * 2;
  setValue("double", doubleNumber);
});
