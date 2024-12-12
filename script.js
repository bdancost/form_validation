document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    //Resetando mensagem de erro
    resetErrorMessage();

    if (!validateMandatoryFields()) {
      event.preventDefault(); // impede a submissão do formulário se houver erros
    }

    if (!compareValues()) {
      event.preventDefault();
    }
  });

  function validateMandatoryFields() {
    let mandatoryFields = document.querySelectorAll(".form-control");
    let isValid = true;

    for (let i = 0; i < mandatoryFields.length; i++) {
      let field = mandatoryFields[i];

      if (field.value === "" || field.value === null) {
        displayError(field, "This field is mandatory!");
        isValid = false;
      }
    }
    return isValid;
  }

  function compareValues() {
    const password = document.getElementById("senha");
    const confirmPassword = document.getElementById("confirmarSenha");

    if (password.value !== confirmPassword.value) {
      displayError(confirmPassword, "Passwords do not match!");
      return false;
    }
    return true;
  }

  function displayError(element, message) {
    let errorMessage = element.parentElement.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "inline-block"; // exibir a mensagem de erro
  }
  function resetErrorMessage() {
    let errorMessage = document.querySelectorAll(".error-message");
    for (let i = 0; i < errorMessage.length; i++) {
      errorMessage[i].textContent = "";
    }
  }
});
