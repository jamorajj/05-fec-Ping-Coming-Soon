function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

let errorDiv = document.getElementById("errorText");
let emailField = document.getElementById("emailField");

document.getElementById("email-form").addEventListener("submit", e => {
  e.preventDefault();
  if (!validateEmail(e.target.elements[0].value)) {
    console.log("---> show error");
    emailField.classList.add("input-error");
    errorDiv.style.display = "block";
  } else {
    console.log("---> hide error");
    emailField.classList.remove("input-error");
    errorDiv.style.display = "none";
  }
});
