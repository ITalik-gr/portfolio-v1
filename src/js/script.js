
// Вариант 1
(function () {
  'use strict';

  var boxElem = document.getElementById('box1');
  var pointerElem = document.getElementById('pointer1');

  function onMouseMove(event) {
      var mouseX = event.pageX;
      var mouseY = event.pageY;
      var crd = boxElem.getBoundingClientRect();
      var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

      requestAnimationFrame(function movePointer() {
          if (activePointer) {
              pointerElem.classList.remove('box-pointer-hidden');
              pointerElem.style.left = Math.floor(mouseX) + 'px';
              pointerElem.style.top = Math.floor(mouseY) + 'px';
          } else {
              pointerElem.classList.add('box-pointer-hidden');
          }
      });
  }

  function disablePointer() {
      requestAnimationFrame(function hidePointer() {
          pointerElem.classList.add('box-pointer-hidden');
      });
  }

  boxElem.addEventListener('mousemove', onMouseMove, false);
  boxElem.addEventListener('mouseleave', disablePointer, false);

})();



// Вариант 2
(function () {
  'use strict';

  var boxElem = document.getElementById('box2');
  var pointerElem = document.getElementById('pointer2');

  function onMouseMove(event) {
      var mouseX = event.pageX;
      var mouseY = event.pageY;
      var crd = boxElem.getBoundingClientRect();

      var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

      if (crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom) {
          if (pointerElem.classList.contains('box-pointer-hidden')) {
              pointerElem.classList.remove('box-pointer-hidden');
          }

          pointerElem.style.transform = 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0px)';

      } else {
          pointerElem.classList.add('box-pointer-hidden');
      }
  }

  function disablePointer() {
      requestAnimationFrame(function hidePointer() {
          pointerElem.classList.add('box-pointer-hidden');
      });
  }

  boxElem.addEventListener('mousemove', onMouseMove, false);
  boxElem.addEventListener('mouseleave', disablePointer, false);

})();


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


