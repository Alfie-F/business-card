const nameInput = document.getElementById("name-input");
const nameInputError = document.getElementById("name-input-error");

nameInput.addEventListener("blur", (event) => {
  const input = event.target;
  if (input.value.length < 1) {
    nameInputError.firstElementChild.classList.remove("hidden");
    nameInput.classList.remove("validInput");
    nameInput.classList.add("invalidInput");
  } else {
    nameInputError.firstElementChild.classList.add("hidden");
    nameInput.classList.remove("invalidInput");
    nameInput.classList.add("validInput");
  }
});

const surnameInput = document.getElementById("surname-input");
const surnameInputError = document.getElementById("surname-input-error");

surnameInput.addEventListener("blur", (event) => {
  const input = event.target;
  if (input.value.length < 1) {
    surnameInputError.firstElementChild.classList.remove("hidden");
    surnameInput.classList.remove("validInput");
    surnameInput.classList.add("invalidInput");
  } else {
    surnameInputError.firstElementChild.classList.add("hidden");
    surnameInput.classList.remove("invalidInput");
    surnameInput.classList.add("validInput");
  }
});

const companyInput = document.getElementById("company-input");
const companyInputError = document.getElementById("company-input-error");

companyInput.addEventListener("blur", (event) => {
  const input = event.target;
  if (input.value.length < 1) {
    companyInputError.firstElementChild.classList.remove("hidden");
    companyInput.classList.remove("validInput");
    companyInput.classList.add("invalidInput");
  } else {
    companyInputError.firstElementChild.classList.add("hidden");
    companyInput.classList.remove("invalidInput");
    companyInput.classList.add("validInput");
  }
});

const jobTitleInput = document.getElementById("job-title-input");
const jobTitleInputError = document.getElementById("job-title-input-error");

jobTitleInput.addEventListener("blur", (event) => {
  const input = event.target;
  if (input.value.length < 1) {
    jobTitleInputError.firstElementChild.classList.remove("hidden");
    jobTitleInput.classList.remove("validInput");
    jobTitleInput.classList.add("invalidInput");
  } else {
    jobTitleInputError.firstElementChild.classList.add("hidden");
    jobTitleInput.classList.remove("invalidInput");
    jobTitleInput.classList.add("validInput");
  }
});

const PhoneNumberInput = document.getElementById("phone-number-input");
const PhoneNumberInputError = document.getElementById(
  "phone-number-input-error"
);

PhoneNumberInput.addEventListener("blur", (event) => {
  const input = event.target;
  const validNum = /^(07)\d{9}$/;
  if (!validNum.test(input.value)) {
    PhoneNumberInputError.firstElementChild.classList.remove("hidden");
    PhoneNumberInput.classList.remove("validInput");
    PhoneNumberInput.classList.add("invalidInput");
  } else {
    PhoneNumberInputError.firstElementChild.classList.add("hidden");
    PhoneNumberInput.classList.remove("invalidInput");
    PhoneNumberInput.classList.add("validInput");
  }
});

const emailInput = document.getElementById("email-input");
const emailInputError = document.getElementById("email-input-error");

emailInput.addEventListener("blur", (event) => {
  const input = event.target;
  const validEmail = /^[a-z0-9]+@[a-z]+(.com|.co.uk|.org)$/;
  if (!validEmail.test(input.value)) {
    emailInputError.firstElementChild.classList.remove("hidden");
    emailInput.classList.remove("validInput");
    emailInput.classList.add("invalidInput");
  } else {
    emailInputError.firstElementChild.classList.add("hidden");
    emailInput.classList.remove("invalidInput");
    emailInput.classList.add("validInput");
  }
});

const form = document.getElementById("submission-form");

form.addEventListener("submit", (event) => {
  let validElements = document.querySelectorAll(".validInput");
  console.log(document.location.search);
  const elements = event.target.elements;
  [...elements].forEach((element) => {
    if (element.classList.length < 1) {
      element.classList.add("invalidInput");
    }
  });

  if (!form.classList.contains("validInput") && validElements.length < 6) {
    event.preventDefault();
  } else {
  }
});
