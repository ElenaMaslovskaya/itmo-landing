// Show Input Error
const showInputError = (form, formInput, errorMessage) => {
  const inputError = form.querySelector(`.${formInput.id}-error`);

  formInput.classList.add('feedback__input_type_error');
  inputError.classList.add('feedback__input-error_active');
  inputError.textContent = errorMessage;
};

// Hide Input Error
const hideInputError = (form, formInput) => {
  const inputError = form.querySelector(`.${formInput.id}-error`);

  formInput.classList.remove('feedback__input_type_error');
  inputError.classList.remove('feedback__input-error_active');
  inputError.textContent = '';
};

// Find Invalid Input
const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  })
}; 

// Check Input Validity
const checkInputValidity = (form, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(form, formInput, formInput.validationMessage);
  } else {
    hideInputError(form, formInput);
  }
};

// Set the state of the button
const setSubmitButtonState = (inputList, submitButton) => {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add('feedback__submit-button_inactive');
  } else {
    submitButton.classList.remove('feedback__submit-button_inactive');
  }
}; 

// Set Event Listeners
const setEventListeners = (form) => {
  const inputList = Array.from(form.querySelectorAll('.feedback__input'));
  const submitButton = form.querySelector('.feedback__submit-button');
  
  setSubmitButtonState(inputList, submitButton);

  inputList.forEach((formInput) => {
    formInput.addEventListener('input', function () {
      checkInputValidity(form, formInput);

      setSubmitButtonState(inputList, submitButton);
    });
  });
};

// Enable Validation
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.feedback__form'));
  
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form);
  }); 
};

enableValidation(); 
