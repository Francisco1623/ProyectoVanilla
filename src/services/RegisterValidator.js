export function initRegisterValidator() {
// Selección de inputs correctos del formulario
const nameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');
const formMessage = document.querySelector('#form-message');

// Funciones auxiliares
const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Mostrar error
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');

  const error = formField.querySelector('small');
  error.textContent = message;
};

// Mostrar éxito
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

// Validación: Nombre
const checkName = () => {
  let valid = false;
  const min = 3, max = 40;
  const name = nameEl.value.trim();

  if (!isRequired(name)) {
    showError(nameEl, "El nombre no puede estar vacío");
  } else if (!isBetween(name.length, min, max)) {
    showError(nameEl, "Debe tener entre 3 y 40 caracteres");
  } else {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};

// Validación: Email
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();

  if (!isRequired(email)) {
    showError(emailEl, "El email no puede estar vacío");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "El email no es válido");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

// Validación: Contraseña
const checkPassword = () => {
  let valid = false;
  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "La contraseña no puede estar vacía");
  } else if (password.length < 6) {
    showError(passwordEl, "Debe tener al menos 6 caracteres");
  } else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
};

// Validación: Confirmación de contraseña
const checkConfirmPassword = () => {
  let valid = false;
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Debe confirmar la contraseña");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "Las contraseñas no coinciden");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};

// Evento Submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const isNameValid = checkName();
  const isEmailValid = checkEmail();
  const isPassValid = checkPassword();
  const isConfirmValid = checkConfirmPassword();

  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPassValid &&
    isConfirmValid;

  if (isFormValid) {
    formMessage.textContent = "Registro exitoso";
    form.reset();

    // Quitar las clases success después del reset
    document.querySelectorAll('.form-field').forEach(f => f.classList.remove('success'));
  }
});
}

