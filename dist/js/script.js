

let nav_toggle = document.querySelector('.nav-toggle'),
  menu = document.querySelector('.menu');

console.log(nav_toggle);

nav_toggle.addEventListener('click', function() {
nav_toggle.classList.toggle('nav-toggle-active')
menu.classList.toggle('menu-active')
});