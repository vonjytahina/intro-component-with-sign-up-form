document.querySelector(".submit").addEventListener("click", () => {
  const firstNameInput = document.getElementById("first-name");
  const errorIconFirstName = firstNameInput.nextElementSibling;
  const errorMessageFirstName = document.querySelector(".first-name-error");

  const lastNameInput = document.getElementById("last-name");
  const errorIconLastname = lastNameInput.nextElementSibling;
  const errorMessageLastName = document.querySelector(".last-name-error");

  const emailInput = document.getElementById("email");
  const errorIconEmail = emailInput.nextElementSibling;
  const errorMessageEmail = document.querySelector(".email-error");

  const passwordInput = document.getElementById("password");
  const errorIconPassword = passwordInput.nextElementSibling;
  const errorMessagePassword = document.querySelector(".password-error");

  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  if (firstNameInput.value.trim() === "") {
    handleInvalidInput(
      firstNameInput,
      errorIconFirstName,
      errorMessageFirstName
    );
    isValid = false;
  } else {
    handleValidInput(firstNameInput, errorIconFirstName, errorMessageFirstName);
  }

  if (lastNameInput.value.trim() === "") {
    handleInvalidInput(lastNameInput, errorIconLastname, errorMessageLastName);
    isValid = false;
  } else {
    handleValidInput(lastNameInput, errorIconLastname, errorMessageLastName);
  }

  if (emailInput.value.trim() === "" || !emailFormat.test(emailInput.value)) {
    handleInvalidInput(emailInput, errorIconEmail, errorMessageEmail);
    isValid = false;
  } else {
    handleValidInput(emailInput, errorIconEmail, errorMessageEmail);
  }

  if (passwordInput.value.trim() === "") {
    handleInvalidInput(passwordInput, errorIconPassword, errorMessagePassword);
    isValid = false;
  } else {
    handleValidInput(passwordInput, errorIconPassword, errorMessagePassword);
  }

  if (isValid) {
    // All inputs are valid, reset the values
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }
});

function handleInvalidInput(input, errorIcon, errorMessage) {
  input.style.border = "1px solid #ff7b79";
  errorIcon.style.display = "block";
  errorMessage.style.display = "block";
}

function handleValidInput(input, errorIcon, errorMessage) {
  input.style.border = "1px solid #dedede";
  errorIcon.style.display = "none";
  errorMessage.style.display = "none";
}
