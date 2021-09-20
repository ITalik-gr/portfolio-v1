// SmoothScroll({
//   // Время скролла 400 = 0.4 секунды
//   animationTime    : 400,
//   // Размер шага в пикселях 
//   stepSize         : 100,

//   // Дополнительные настройки:
//   // Ускорение 
//   accelerationDelta : 20,  
//   // Максимальное ускорение
//   accelerationMax   : 1,   

//   // Поддержка клавиатуры
//   keyboardSupport   : true,  
//   // Шаг скролла стрелками на клавиатуре в пикселях
//   arrowScroll       : 100,

//   // Pulse (less tweakable)
//   // ratio of "tail" to "acceleration"
//   pulseAlgorithm   : true,
//   pulseScale       : 4,
//   pulseNormalize   : 1,

//   // Поддержка тачпада
//   touchpadSupport   : true,
// })

$(document).bind( 'mousewheel', function (e) { 
  var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
  e.preventDefault(); 
  e.stopPropagation(); 
  $(document.body).stop().animate( { 
       scrollTop : nt 
   } , 500 , 'easeInOutCubic' );  
} )