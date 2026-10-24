const headerSvg = document.querySelector('header svg');
const new_circle = document.querySelector('header svg #new_circle');
const glowElement = document.querySelector('#glow-color');// 1. Select the feFlood element by its ID
const glowRadius = document.querySelector('#glowRadius');// 1. Select the feFlood element by its ID
const sound = document.querySelector('#sound');// 1. Select the feFlood element by its ID


/* --- SIDEBAR TOGGLE --- */
const navToggle = document.getElementById("navToggle");
const sidebar = document.getElementById("sidebar");

if (navToggle && sidebar) {
    navToggle.addEventListener("click", (e) => {
        e.stopPropagation(); 
        sidebar.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("open") && !sidebar.contains(e.target)) {
            sidebar.classList.remove("open");
        }
    });
}

const playSound = document.getElementById('geigerCounter');

// Triggers the exact moment the mouse enters the SVG
headerSvg.addEventListener('mouseenter', () => {
    console.log('Mouse entered!');
    new_circle.setAttribute('r', '180');

    if (glowElement) {
        glowElement.setAttribute('flood-color', '#00ff51');
        glowRadius.setAttribute('stdDeviation', '90');
    }
    playSound.src = 'homePageIcons/audio/geigerCounter.mp3';//sound
    sound.load();
    sound.play();

  });
  
// Triggers the exact moment the mouse leaves the SVG
headerSvg.addEventListener('mouseleave', () => {
    console.log('Mouse left!');
    new_circle.setAttribute('r', '360');

    if (glowElement) {
        glowElement.setAttribute('flood-color', '#00ff51');
        glowRadius.setAttribute('stdDeviation', '25');
    }
    playSound.src = '';//sound
    sound.load();
    sound.play();

  });


const centerDot = document.querySelector('header svg #centerDot');

centerDot.addEventListener('mouseenter', () => {
    console.log('Mouse entered home!');
    centerDot.classList.add('hovered'); 
});
  
centerDot.addEventListener('mouseleave', () => {
    console.log('Mouse left home!');
    centerDot.classList.remove('hovered');
});

//VIBRATING TITLE
const textElement = document.querySelector('.vibrate-text');
const text = textElement.textContent;
textElement.innerHTML = text
  .split('')
  .map(char => char === ' ' ? ' ' : `<span>${char}</span>`)
  .join('');