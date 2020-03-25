const menu = document.querySelector('#js-menu');
const menuBtn = document.querySelector('.menu-icon');

const openMobileMenu = () => {
  console.log(menu.classList.contains('nav--open'));
  menu.classList.toggle('nav--open');
};

menuBtn.addEventListener('click', openMobileMenu);
