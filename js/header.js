const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.header-link-list');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    console.log('clicked');
});

const toggleSubmenu = document.querySelector('.toggle-products-submenu');
const productSubmenu = document.querySelector('.submenu');

toggleSubmenu.addEventListener('click', () => {
    productSubmenu.classList.toggle('active');
    console.log('clicked');
});

