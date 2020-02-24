"use strict";

var menu = document.querySelector('.js-menu');
var buttonToOpen = document.querySelector('.nav-bar__burger');
var buttonToClose = document.querySelector('.nav-bar-modal__close');
buttonToOpen.addEventListener('click', openMenu);
buttonToClose.addEventListener('click', closeMenu);

function openMenu() {
  menu.classList.add('nav-bar-modal__open');
}

function closeMenu() {
  menu.classList.remove('nav-bar-modal__open');
}