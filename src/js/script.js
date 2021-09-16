

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
  }, 2800)
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


console.log('Frontend developing by italik');


//!

$(document).ready(function(){
  $("#follower").hover(function(){
    var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
});

// cache the selector
var follower = $("#follower");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({left:xp, top:yp});
    
}, 30);
    }, function(){
      $(this).off('mousemove').css("background-color", "pink");
  });
});
