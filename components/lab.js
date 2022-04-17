const labPopup = document.querySelector(".lab__popup");
const labSection = document.querySelector(".lab");
const closeButton = labPopup.querySelector(".lab__popup-close-button");

//open popup

let openButtons = document.querySelectorAll('.lab__card-button'),
    index, button;

for (index = 0; index < openButtons.length; index++) {
    button = openButtons[index];
    button.addEventListener('click', openPopup);
}

function openPopup() {
    labPopup.classList.add('lab__popup_opened')
}

//close popup

function closePopup() {
    labPopup.classList.remove('lab__popup_opened')
}

function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup();
    }
}


    closeButton.addEventListener("click", () => {
        closePopup();
    });

    labPopup.addEventListener("click", (event) => {
        handleOverlayClose(event)
    });