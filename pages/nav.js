// Navigation
const navMenuButton = document.querySelector('.nav__burger-menu');
const navCloseButton = document.querySelector('.nav__close-button');
const navList = document.querySelector('.nav__list');
const navLinkList = navList.querySelectorAll(".nav__link");


function openMenu() {
  navList.classList.add('nav__list_show');
  navMenuButton.classList.add('nav__burger-menu_hide');
  navCloseButton.classList.add('nav__close-button_show')
  
}

function closeMenu() {
  navList.classList.remove('nav__list_show');
  navMenuButton.classList.remove('nav__burger-menu_hide');
  navCloseButton.classList.remove('nav__close-button_show')
}

navMenuButton.addEventListener('click', openMenu)
navCloseButton.addEventListener('click', closeMenu)




// Navigate to specific section
/*
navLinkList.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    
    const navbar = document.getElementById('nav');
    const navbarHeight = navbar.getBoundingClientRect().height;
    
    const navListHeight = navList.getBoundingClientRect().height;
    let position = element.offsetTop - navbarHeight;

    
    if (navbarHeight > 82) {
      position = position + navListHeight;
    }
    
    window.scrollTo({
      left: 0,
      top: position,
    });
  })
})
*/


// Add active class to the current button 
for (let i = 0; i < navLinkList.length; i++) {
  navLinkList[i].addEventListener('click', function() {
  const currentLink = document.querySelectorAll('.nav__link_type_active');
  if (currentLink.length > 0) { 
    currentLink[0].className = currentLink[0].className.replace(' nav__link_type_active', '');
  }
  this.className += ' nav__link_type_active';
  });
}