const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector("button");

function validateEmail() {
  const error = email.nextElementSibling;
  if (!email.value.includes("@")) {
    error.textContent = "Bitte gültige E-Mail eingeben";
    email.classList.add("error-input");
    return false;
  }
  error.textContent = "";
  email.classList.remove("error-input");
  return true;
}

function validatePassword() {
  const error = password.nextElementSibling;
  if (password.value.length < 6) {
    error.textContent = "Mindestens 6 Zeichen";
    password.classList.add("error-input");
    return false;
  }
  error.textContent = "";
  password.classList.remove("error-input");
  return true;
}

function checkForm() {
  if (validateEmail() && validatePassword()) {
    button.disabled = false;
    button.classList.add("active");
  } else {
    button.disabled = true;
    button.classList.remove("active");
  }
}

email.addEventListener("input", checkForm);
password.addEventListener("input", checkForm);
