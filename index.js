document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration");
  const loginForm = document.getElementById("login");
  const errorDisplay = document.getElementById("errorDisplay");

  function showerror(message, inputElement) {
    errorDisplay.textContent = message;
    errorDisplay.style.display = "block";
    inputElement.focus();
  }
  function hideError() {
    errorDisplay.textContent = "";
    errorDisplay.style.display = "none";
  }
  registrationForm.addEventListener("submit", function (event){
    event.preventDefault();
    hideError();
    const username = registrationForm.username.value.trim();
    const email = registrationForm.email.value.trim ();
    const password = registrationForm.password.value;
    const passwordCheck = registrationForm.passwordCheck.value;
    const terms = registrationForm.terms.checked;

  });

});

