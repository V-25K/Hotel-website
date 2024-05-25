function openPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your registration has been submitted!"); //to change
    closePopup();
  });

document.getElementById("registerBtn").addEventListener("click", function () {
  openPopup();
});


