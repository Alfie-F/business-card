const params = new URLSearchParams(document.location.search);

const firstname = params.get("firstname");
const nameLabel = document.getElementById("name");
const nameValue = document.createElement("p");
nameValue.classList.add("label-value");
nameValue.innerText = firstname;
nameLabel.appendChild(nameValue);

const surname = params.get("surname");
const surnameLabel = document.getElementById("surname");
const surnameValue = document.createElement("p");
surnameValue.classList.add("label-value");
surnameValue.innerText = surname;
surnameLabel.appendChild(surnameValue);

const company = params.get("company-name");
const companyLabel = document.getElementById("company");
const companyValue = document.createElement("p");
companyValue.classList.add("label-value");
companyValue.innerText = company;
companyLabel.appendChild(companyValue);

const jobTitle = params.get("job-title");
const jobLabel = document.getElementById("job-title");
const jobValue = document.createElement("p");
jobValue.classList.add("label-value");
jobValue.innerText = jobTitle;
jobLabel.appendChild(jobValue);

const phoneNumber = params.get("phone-number");
const phoneLabel = document.getElementById("phone-number");
const phoneValue = document.createElement("p");
phoneValue.classList.add("label-value");
phoneValue.innerText = phoneNumber;
phoneLabel.appendChild(phoneValue);

const email = params.get("email");
const emailLabel = document.getElementById("email");
const emailValue = document.createElement("p");
emailValue.classList.add("label-value");
emailValue.innerText = email;
emailLabel.appendChild(emailValue);
