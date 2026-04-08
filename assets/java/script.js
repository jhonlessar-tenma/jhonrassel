const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-list');

menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
});