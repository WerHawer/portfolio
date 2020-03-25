const menu = document.querySelector('#js-menu');
const menuBtn = document.querySelector('.menu-icon');
const learnMoreBtn = document.querySelector('.banner__button');
const startInfo = document.querySelector('#startInfo');

const openMobileMenu = () => {
  console.log(menu.classList.contains('nav--open'));
  menu.classList.toggle('nav--open');
};

const learnMoreFn = () => {
  startInfo.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
};

menuBtn.addEventListener('click', openMobileMenu);
learnMoreBtn.addEventListener('click', learnMoreFn);
