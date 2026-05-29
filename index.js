document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration");
  const loginForm = document.getElementById("login");
  const errorDisplay = document.getElementById("errorDisplay");

  function showError(message, inputElement) {
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

    if (username === "") {
        showError("Username cannot be blank.", registrationForm.username);
        return;
    }

    if (username.length < 4) {
        showError("Username must be at least 4 characters long.", registrationForm.username);
        return;
    }

    if (new Set(username).size < 2) {
        showError("Username must contain at least 2 unique characters.", registrationForm.username);
        return;
    }

    if (/[^a-zA-Z0-9]/.test(username)) {
        showError("Username cannot contain special characters or whitespace");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("Please enter a valid email address.", registrationForm.email);
    return;
}

if (email.toLowerCase().endsWith("@example.com")) {
    showError("Email cannot be from the domain example.com.", registrationForm.email);
    return;
}

  });

});

