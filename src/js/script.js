let text1 = document.querySelector('.header-name'),
    text2 = document.querySelector('.header-title'),
    text3 = document.querySelector('.header-subtitle'),
    nav = document.querySelector('.nav');

    function text_anim () {
      text1.classList.add('text-anim');
      text2.classList.add('text-anim');
      text3.classList.add('text-anim');
    }
    function opacity () {
      nav.classList.add('opacity-animate')
    }
window.onload = function () {
  let ab = setTimeout(function() {
    document.querySelector('.preloader').classList.add('preloader-none');
  }, 2000)
  let aa = setTimeout(function() {
    text_anim();
    opacity();
  }, 3500)

}
let nav_toggle = document.querySelector('.nav-toggle'),
  menu = document.querySelector('.menu');

console.log(text1);

nav_toggle.addEventListener('click', function() {
  nav_toggle.classList.toggle('nav-toggle-active')
  menu.classList.toggle('menu-active')
});



