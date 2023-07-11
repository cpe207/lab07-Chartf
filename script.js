const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");

}
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

}
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

}
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");

}

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true; // Set to true when input is valid
  }

  
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true; // Set to true when input is valid
  }

  
  if (emailInput.value === "" || !validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true; // Set to true when input is valid
  }

  
  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true; // Set to true when input is valid
  } else {
    passwordInput.classList.add("is-invalid");
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk) {
    alert("Registered successfully"); // Display success message
  }
};