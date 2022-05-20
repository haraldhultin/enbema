const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.header-link-list');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    console.log('clicked');
});