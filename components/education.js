const aspCheckbox = document.getElementById("radio1");
const magCheckbox = document.getElementById("radio2");
const eduPic = document.querySelector(".eduction__pic");


magCheckbox.addEventListener('click', () => {
    eduPic.src = '../images/education/Magistr-photo.svg'
} )

aspCheckbox.addEventListener('click', () => {
    eduPic.src = '../images/education/Aspirant.png'
} )

