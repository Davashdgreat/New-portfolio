const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')        
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualificaton__active')
    })
})

/*==================== SERVICES MODAL ====================*/

// Select all services buttons
const servicesButtons = document.querySelectorAll('.services__button');

// Select all services modals
const graphicsDesignModal = document.getElementById('graphics-design-modal');
const frontendDevelopmentModal = document.getElementById('frontend-development-modal');
const backendDevelopmentModal = document.getElementById('backend-development-modal');

// Select all services modal close buttons
const servicesModalCloseButtons = document.querySelectorAll('.services__modal-close');

// Function to open a modal
function openModal(modal) {
  modal.classList.add('active');
}

// Function to close a modal
function closeModal(modal) {
  modal.classList.remove('active');
}

// Add event listeners to services buttons
servicesButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    switch (index) {
      case 0:
        openModal(graphicsDesignModal);
        break;
      case 1:
        openModal(frontendDevelopmentModal);
        break;
      case 2:
        openModal(backendDevelopmentModal);
        break;
    }
  });
});

// Add event listeners to services modal close buttons
servicesModalCloseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    switch (index) {
      case 0:
        closeModal(graphicsDesignModal);
        break;
      case 1:
        closeModal(frontendDevelopmentModal);
        break;
      case 2:
        closeModal(backendDevelopmentModal);
        break;
    }
  });
});

// Add event listener to window to close modal when clicked outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('service__modal')) {
    closeModal(e.target);
  }
});

// const modalViews = document.querySelectorAll('.services__modal'),
//       modalBtns = document.querySelectorAll('.services__button'),
//       modalCloses = document.querySelectorAll('.services__modal-close')

// let modal = function(modalClick){
//     modalViews[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtn, i) =>{
//     modalBtn.addEventListener('click', () =>{
//         modal(i)
//     })
// })

// modalCloses.forEach((modalClose) =>{
//     modalClose.addEventListener('click', () =>{
//         modalViews.forEach((modalView) =>{ 
//             modalView.classList.remove('active-modal')
//         })
//     })   
// })


// // Get all service buttons and modals
// const serviceButtons = document.querySelectorAll('.services__button');
// const serviceModals = document.querySelectorAll('.service__modal');

// // Add event listener to each service button
// serviceButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     // Get the corresponding service modal
//     const serviceModal = serviceModals[index];

//     // Toggle the visibility of the service modal
//     serviceModal.classList.toggle('active');
//   });
// });

// // Add event listener to each service modal close button
// const serviceModalCloseButtons = document.querySelectorAll('.services__modal-close');
// serviceModalCloseButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Get the parent service modal
//     const serviceModal = button.parentElement.parentElement;

//     // Toggle the visibility of the service modal
//     serviceModal.classList.toggle('active');
//   });
// });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scroollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scroollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
        
    else
        scrollUp.classList.remove('show-scroll')
}
    window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
