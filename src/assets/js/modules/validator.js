const fields = document.querySelectorAll("[required]");

const ValidateField = (field) => {
  const verifyErrors = () => {
    let foundError = false;

    for (let error in field.validity) {
      if (field.validity[error] && !field.validity.valid) {
        foundError = error;
      }
    }
    return foundError;
  };

  const customMessage = (typeError) => {
    const messages = {
      text: {
        valueMissing: "Por favor, preencha este campo",
      },
      email: {
        valueMissing: "Email é obrigatório",
        typeMismatch: "Por favor, preencha um email válido",
      },
    };

    return messages[field.type][typeError];
  };

  const setCustomMessage = (message) => {
    const spanError = field.parentNode.querySelector(".alert");

    if (message) {
      spanError.classList.remove("is-hidden");
      spanError.innerHTML = message;
    } else {
      spanError.classList.add("is-hidden");
      spanError.innerHTML = "";
    }
  };

  return () => {
    const error = verifyErrors();

    if (error) {
      const message = customMessage(error);

      field.style.borderColor = "#dc3545";
      setCustomMessage(message);
    } else {
      field.style.borderColor = "#35ac50";
      setCustomMessage();
    }
  };
};

const customValidation = (event) => {
  const field = event.target;
  const validation = ValidateField(field);
  validation();
};

fields.forEach((field) => {
  field.addEventListener("invalid", (event) => {
    event.preventDefault();
    customValidation(event);
  });

  field.addEventListener("blur", customValidation);
});
