// Constants
const navMenuButton = document.querySelector('.nav__burger-menu');
const navCloseButton = document.querySelector('.nav__close-button');
const navList = document.querySelector('.nav__list');
const navLinks = navList.querySelectorAll('.nav__link');
const labelDropdown = document.querySelector('.nav__label-link');
const sections = document.querySelectorAll('section[id]')


// Open and Close Navigation
function openMenu() {
  navList.classList.add('nav__list_show');
  navMenuButton.classList.add('nav__burger-menu_hide');
  navCloseButton.classList.add('nav__close-button_show');
}

function closeMenu() {
  navList.classList.remove('nav__list_show');
  navMenuButton.classList.remove('nav__burger-menu_hide');
  navCloseButton.classList.remove('nav__close-button_show');
}

navMenuButton.addEventListener('click', openMenu)
navCloseButton.addEventListener('click', closeMenu)


// Navigate to specific values
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    
    e.preventDefault();

    const linkId = e.currentTarget.getAttribute('href').slice(1);
    const linkValue = document.getElementById(linkId);

    const navbar = document.getElementById('nav');
    const navbarHeight = navbar.getBoundingClientRect().height;
    
    const navListHeight = navList.getBoundingClientRect().height;
    let position = linkValue.offsetTop - navbarHeight;

    // Mobile 
    if (navbarHeight > 82) {
      position = position + navListHeight;
    }
    
    // Smooth scrolling
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
  
    closeMenu()
  })
})

// Highlight nav link on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
  
    if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelector('.nav__link[href*="' + sectionId + '"]')
      .classList.add('nav__link_type_active');
    } else {
      document.querySelector('.nav__link[href*="' + sectionId + '"]')
      .classList.remove('nav__link_type_active');
    }
  })
})
