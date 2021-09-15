
window.onload = function () {
  let ab = setTimeout(function() {
    document.querySelector('.preloader').classList.add('preloader-none');
  }, 2800)
}

let nav_toggle = document.querySelector('.nav-toggle'),
  menu = document.querySelector('.menu');

console.log(nav_toggle);

nav_toggle.addEventListener('click', function() {
nav_toggle.classList.toggle('nav-toggle-active')
menu.classList.toggle('menu-active')
});
