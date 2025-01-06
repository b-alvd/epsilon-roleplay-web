const hamburger = document.querySelector('header div#burger');
const navMenu = document.querySelector('header ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger--active');
    if (navMenu.classList.contains('nav--active')) {
        navMenu.classList.add('nav--active-closing');        
        navMenu.addEventListener('animationend', () => {
            navMenu.classList.remove('nav--active');
            navMenu.classList.remove('nav--active-closing');
            navMenu.style.display = 'none';
        }, { once: true });
    } else {
        navMenu.style.display = 'flex';
        navMenu.classList.add('nav--active');
    }
});
