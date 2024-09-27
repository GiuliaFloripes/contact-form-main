const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const query = document.getElementById("query");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkInputs()) {
    alert("Formulário enviado com sucesso!")
    form.onsubmit();
  }
});

function checkInputs() {
  let isValid = true;

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const radioSelected = document.querySelector('input[name="query"]:checked');
  const termsChecked = terms.checked;

  if (firstNameValue === "") {
    errorValidation(firstName, "Preencha este campo!");
    isValid = false;
  } else {
    successValidation(firstName);
  }

  if (lastNameValue === "") {
    errorValidation(lastName, "Preencha este campo!");
    isValid = false;
  } else {
    successValidation(lastName);
  }

  if (emailValue === "") {
    errorValidation(email, "Por favor insira um email!");
    isValid = false;
  } else {
    successValidation(email);
  }

  if (!termsChecked) {
    errorValidation(terms, "Você deve aceitar os termos para continuar");
    isValid = false;
  } else {
    successValidation(terms);
  }

  const queryError = document.getElementById("query-error");
  if (!radioSelected) {
    queryError.innerText = "Selecione uma das opções";
    queryError.classList.add("error");
    queryError.classList.remove("success");
    isValid = false;
  } else {
    queryError.innerText = "";
    queryError.classList.add("success");
    queryError.classList.remove("error");
  }

  return isValid;
}

function errorValidation(input, message) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector("small");

  small.innerText = message;
  inputGroup.className = "input-group error";
}

function successValidation(input) {
  const inputGroup = input.parentElement;
  inputGroup.className = "input-group success";
}
