SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 700,
  // Размер шага в пикселях 
  stepSize         : 125,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 35,  
  // Максимальное ускорение
  accelerationMax   : 2,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 100,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
})