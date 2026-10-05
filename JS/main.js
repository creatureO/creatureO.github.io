// Wait for the Intro window to finish loading
if(window.innerWidth > 900){
    window.addEventListener('DOMContentLoaded', () => {
      const IntroductionOverlay = document.getElementById('welcome-overlay');;
    // Set timer for 3000 milliseconds (3 seconds)
    
      setTimeout(() => {
        IntroductionOverlay.classList.add('hidden');
          
    // Optional: Completely remove from DOM after fade animation finishes
          setTimeout(() => {
            IntroductionOverlay.remove();
          }, 500); 
      }, 1500);
    });
    } else{
      window.addEventListener('DOMContentLoaded', () => {
        const IntroductionOverlay = document.getElementById('welcome-overlay');
      // Set timer for 3000 milliseconds (3 seconds)
      
        setTimeout(() => {
          IntroductionOverlay.classList.add('hidden');
            
      // Optional: Completely remove from DOM after fade animation finishes
            setTimeout(() => {
              IntroductionOverlay.remove();
            }, 500); 
        }, 1500);
      });
    }

const container = document.getElementById('grid-container');
const totalSquares = 10000;

for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => {
    square.classList.add('is-active');
  });

  container.appendChild(square);
}
