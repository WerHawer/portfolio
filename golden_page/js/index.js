const menuBtn = document.querySelector(".navBtnMob");
const menu = document.querySelector(".nav");

const showMenuItems = () => {
  menu.classList.toggle("navShow");
};

menuBtn.addEventListener("click", showMenuItems);
