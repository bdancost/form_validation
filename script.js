document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
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
        console.log("Este campo é obrigatório!");
        isValid = false;
      }
    }
    return isValid;
  }

  function compareValues() {
    const password = document.getElementById("senha");
    const confirmPassword = document.getElementById("confirmarSenha");

    if (password.value !== confirmPassword.value) {
      console.log("As senhas não conferem!");
      return false;
    }
    return true;
  }
});
