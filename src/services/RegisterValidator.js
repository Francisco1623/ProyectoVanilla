

const nameEl = document.querySelector('#name');
const phoneEl = document.querySelector('#phone');
const emailEl = document.querySelector('#email');
const ageEl = document.querySelector('#age');
const dniEl = document.querySelector('#dni');
const form = document.querySelector('#signup');

//valida
const isRequired = value => value===''?false:true;
const isBetween = (length,min,max) => length < min || length > max ? false:true;
const isEmailValid = (email) => {
  const re = /^(([^<>()\].,;:\s@"]+(\.[()\[\\.,;:\s@"]+)*)|(".+"))@(([0−9]1,3\.[0−9]1,3\.[0−9]1,3\.[0−9]1,3)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


//ERROR QUE SE MUESTRA

const showError = (input,message)=>{
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
}

const showSuccess = (input) => {
  // Obtener el elemento form-field
  const formField = input.parentElement;
  // Eliminar la clase de error
  formField.classList.remove('error');
  formField.classList.add('success');
  // Ocultar el mensaje de error
  const error = formField.querySelector('small');
  error.textContent = '';
};


const checkName = ()=>{
    let valid = false;
    const min = 3,max = 40;
    const name = nameEl.value.trim();
    if(!isRequired(name)){
        showError(nameEl,"El nombre no puede estar vacío");
    }else if(!isBetween(name.length,min,max)){
        showError(nameEl,"El nombre tiene que tener al menos 3 caracteres y como maximo 40");

    }else{
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
}

const checkPhone = ()=>{
    let valid = false;
    const min = 9,max = 9;
    const phone = phoneEl.value.trim();
    if(!isRequired(phone)){
        showError(phoneEl,"El teléfono no puede estar vacío");
    }else if(!isBetween(phone.length,min,max)){
        showError(phoneEl,"El teléfono tiene que tener 9 números");

    }else{
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
}

const checkEmail = ()=>{
    let valid = false;
    const email = emailEl.value;
    if(!isRequired(email)){
        showError(emailEl,"El email no puede estar vacío");
    }else if(!isEmailValid(email)){
        showError(emailEl,"El email tiene que ser válido");

    }else{
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}








export {checkName,checkPhone,checkEmail,checkAge,checkDni}