
// ================================= KING =================================
document.addEventListener("DOMContentLoaded", (event) => {
            
    const Button1 = document.querySelector(".button1");
    const Button2 = document.querySelector(".button2");
    const Button3 = document.querySelector(".button3");
    const Button4 = document.querySelector(".button4");
    const insertIMG = document.querySelector(".insertableImage");
    let textarea= document.querySelector("p");

    (Button1).addEventListener("click", (event) => {
        textarea.textContent='6 7';
        insertIMG.innerHTML = '<img src="https://media.tenor.com/uJErfi3PQPgAAAAM/tung-tung-tung-sahur-67.gif">';
    });

    (Button2).addEventListener("click", (event) => {
        textarea.textContent='GIGGITY!';
        insertIMG.innerHTML = '<img src="https://media.tenor.com/KvPu2kvRnLoAAAAj/quagmire-dance.gif">';
    });

    (Button3).addEventListener("click", (event) => {
        textarea.textContent='BLAM!';
        insertIMG.innerHTML = '<img src="https://i.makeagif.com/media/4-20-2020/7cVKAc.gif">';
    });

    (Button4).addEventListener("click", (event) => {
        textarea.textContent='KABOOM!';
        insertIMG.innerHTML = '<img src="https://64.media.tumblr.com/d74a3330d5e0abd9fd5af1d713194bfd/tumblr_p0a77yImDJ1tpc941o1_500.gif">';
    });

// ================================= custom circle cursor


const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  // Update my cursor's item position based on viewport coordinates
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});


document.addEventListener('click', function(e) {
cursor.classList.toggle('clicked');
cursor.innerHTML = "<img src='https://i.pinimg.com/originals/43/7e/60/437e60c3fe83d636e7f514fac5a6e39e.gif'>";
    
//first I set a timer
const startTime = performance.now();
// Track and log elapsed seconds every 1 second
const timer = setInterval(() => {
  const elapsedSeconds = Math.floor((performance.now() - startTime) / 500);
  console.log(`Time passed: ${elapsedSeconds}s`);

  // Stop mouse animation after 1 second
  if (elapsedSeconds >= 0.5) {
    clearInterval(timer);
    console.log("Reset mouse clicker");

    cursor.classList.toggle('clicked');
    cursor.innerHTML = "";
  }
}, 500);
});


});//end of DOM


/*// Wait for the Intro window to finish loading  

// cursor.innerHTML = ''

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

    */