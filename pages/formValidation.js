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

// Navigation
const navMenu = document.querySelector('.nav__burger-menu');
const navList = document.querySelector('.nav__list');
const closeButton = document.querySelector('.nav__close-button');

function openMenu() {
  navList.classList.add('nav__list_show');
  navMenu.classList.add('nav__burger-menu_hide');
  closeButton.classList.add('nav__close-button_show')
  
}

function closeMenu() {
  navList.classList.remove('nav__list_show');
  navMenu.classList.remove('nav__burger-menu_hide');
  closeButton.classList.remove('nav__close-button_show')
}

navMenu.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)


// Add active class to the current button 

const navContainer = document.querySelector(".nav__list");
const navLinkList = navContainer.querySelectorAll(".nav__link");

for (let i = 0; i < navLinkList.length; i++) {
  navLinkList[i].addEventListener("click", function() {
  const currentLink = document.querySelectorAll(".nav__link_type_active");
  if (currentLink.length > 0) { 
    currentLink[0].className = currentLink[0].className.replace(" nav__link_type_active", "");
  }
  this.className += " nav__link_type_active";
  });
}


