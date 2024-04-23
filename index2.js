const test = document.getElementById("name-input");
console.log(document.location.search);
const params = new URLSearchParams(document.location.search);
let firstName = params.get("firstName");
console.log(firstName);
