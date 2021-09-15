function timer() {
  if (animator.curPercentage < animator.targetPercentage) {
      animator.curPercentage += 1;    
  } else if (animator.curPercentage > animator.targetPercentage) {
      animator.curPercentage -= 1;    
  }                
  
  $(animator.outputSelector).text(animator.curPercentage + "%");
  
  if (animator.curPercentage != animator.targetPercentage) {
      setTimeout(timer, animator.animationSpeed)    
  }
}

function PercentageAnimator() {
  this.animationSpeed = 40;
  this.curPercentage = 0;
  this.targetPercentage = 0;
  this.outputSelector = ".preloader-timer";
  
  this.animate = function(percentage) {
      this.targetPercentage = percentage;
      setTimeout(timer, this.animationSpeed);
  }    
}

var animator = new PercentageAnimator();
animator.curPercentage = 0;
animator.animate(100);