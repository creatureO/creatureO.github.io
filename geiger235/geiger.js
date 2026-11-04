const headerSvg = document.querySelector('header svg');
const new_circle = document.querySelector('header svg #new_circle');
const glowElement = document.querySelector('#glow-color');// 1. Select the feFlood element by its ID
const glowRadius = document.querySelector('#glowRadius');// 1. Select the feFlood element by its ID
const sound = document.querySelector('#sound');// 1. Select the feFlood element by its ID
const playSound = document.getElementById('geigerCounter');

/* --- SIDEBAR TOGGLE --- */
const navToggle = document.getElementById("navToggle");
const sidebar = document.getElementById("sidebar");
const sidebarSlidable = document.querySelector(".sidebar-slidable");

if (navToggle && sidebar) {
    navToggle.addEventListener("click", (e) => {
        e.stopPropagation(); 
        sidebar.classList.toggle("open");

        if (sidebar.classList.contains("open")){
        sound.src = 'homePageIcons/audio/geigerCounter.mp3'; 
        sound.load();
        sound.play().catch(error => {
        console.error("Audio playback failed:", error);
        });
        } else{
        sound.src = ''; 
        sound.load();
        sound.play().catch(error => {
        console.error("Audio playback failed:", error);
        });
        }

    });
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("open") && !sidebar.contains(e.target)) {
            sidebar.classList.remove("open");

            sound.src = ''; 
            sound.load();
            sound.play().catch(error => {
            console.error("Audio playback failed:", error);
            });
        }
    });
}




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
    playSound.src = '';// cancel sound
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

// TRIGGER BOX FUNCTION
// Define what happens when the bottom box is triggered vv
const marker = document.querySelector('#page-bottom-marker');
const headerSVG = document.querySelector('header svg')
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        headerSVG.classList.add('hovered');
        new_circle.setAttribute('r', '180');
        glowElement.setAttribute('flood-color', '#00ff51');
        glowRadius.setAttribute('stdDeviation', '90');
        console.log('Nav reached bottom');
      // OPTIONAL: Stop observing if you only want this to trigger once
      // observer.unobserve(marker);
    } else{
        headerSVG.classList.remove('hovered');
        new_circle.setAttribute('r', '360');
        glowElement.setAttribute('flood-color', '#00ff51');
        glowRadius.setAttribute('stdDeviation', '25');
        console.log('Nav left bottom!');
    }
  });
};

// 3. Create and start the observer
const observer = new IntersectionObserver(observerCallback, {
  root: null,       // Uses the browser viewport
  threshold: 0.25    // Triggers only when the marker is 100% visible
});

observer.observe(marker);



//VIBRATING TITLE
/*  const textElement = document.querySelector('.vibrate-text');
const text = textElement.textContent;
textElement.innerHTML = text
  .split('')
  .map(char => char === ' ' ? ' ' : `<span>${char}</span>`)
  .join('');    */

//Good dialog box option
const dialog = document.getElementById('imageDialog');
// this part replaces my actual dialog image variable
const dialogImg = dialog.querySelector('.dialog-content img'); 
const closeDialogBtn = document.getElementById('closeDialogBtn');

// 1. Select ALL images with the class 'triggerImg'
const triggerImages = document.querySelectorAll('.triggerImg');

// 2. Loop through each image and attach the click listener
triggerImages.forEach((img) => {
  img.addEventListener('click', (event) => {
    // Open the dialog
    dialog.showModal();
    
    // Copy the source of the specifically clicked image to the dialog's image
    dialogImg.src = event.currentTarget.src;
  });
});

// 3. Reset image src when closing
closeDialogBtn.addEventListener('click', () => {
  dialog.close();
  dialogImg.src = './homePageIcons/geiger235Logo.svg';
});

// 4. Close on background click
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
  if (!isInDialog) {
    dialog.close();
  }
});