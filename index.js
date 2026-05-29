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
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    hideError();

    const username = registrationForm.username.value.trim();
    const email = registrationForm.email.value.trim();
    const password = registrationForm.password.value;
    const passwordCheck = registrationForm.passwordCheck.value;
    const terms = registrationForm.terms.checked;

    if (username === "") {
      showError("Username cannot be blank.", registrationForm.username);
      return;
    }

    if (username.length < 4) {
      showError(
        "Username must be at least 4 characters long.",
        registrationForm.username,
      );
      return;
    }

    if (new Set(username).size < 2) {
      showError(
        "Username must contain at least 2 unique characters.",
        registrationForm.username,
      );
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
      showError(
        "Email cannot be from the domain example.com.",
        registrationForm.email,
      );
      return;
    }

    if (password.length < 12) {
      showError(
        "Password must be at least 12 characters long.",
        registrationForm.password,
      );
      return;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      showError(
        "Password must contain at least one uppercase and one lowercase letter.",
        registrationForm.password,
      );
      return;
    }

    if (!/[0-9]/.test(password)) {
      showError(
        "Password must contain at least one number.",
        registrationForm.password,
      );
      return;
    }

    if (!/[^a-zA-Z0-9]/.test(password)) {
      showError(
        "Password must contain at least one special character.",
        registrationForm.password,
      );
      return;
    }

    if (/password/i.test(password)) {
      showError(
        "Password cannot contain the word 'password'.",
        registrationForm.password,
      );
      return;
    }

    if (password.toLowerCase().includes(username.toLowerCase())) {
      showError(
        "Password cannot contain your username.",
        registrationForm.password,
      );
      return;
    }

    if (password !== passwordCheck) {
      showError("Passwords do not match", registrationForm.passwordCheck);
      return;
    }

    if (!terms) {
      showError("You must accept the Terms of Use.", registrationForm.terms);
      return;
    }

    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : {};

    if (users[username.toLowerCase()]) {
      showError("That username is already taken.", registrationForm.username);
      return;
    }

    users[username.toLowerCase()] = {
      email: email.toLowerCase(),
      password: password,
    };

    localStorage.setItem("users", JSON.stringify(users));

    registrationForm.reset();
    errorDisplay.style.display = "block";
    errorDisplay.style.color = "green";
    errorDisplay.style.background = "#cfc";
    errorDisplay.textContent = "Registration successful! You can now log in.";
  });
});
