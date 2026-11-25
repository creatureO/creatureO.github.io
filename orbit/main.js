// 1 hour and 30 minutes = 5400 seconds (52:23:10)
let timeRemaining = 188590; 
const countdownDisplay = document.getElementById("launchTimer");

function updateTimer() {
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  // Format each unit to always have 2 digits (e.g., 01:05:09)
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMin = String(minutes).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");

  countdownDisplay.textContent = `${formattedHours}:${formattedMin}:${formattedSec}`;
}

// Run once immediately so there isn't a 1-second delay before updating
updateTimer();

const countdownInterval = setInterval(() => {
  timeRemaining--;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = "00:00:00"; // Or "Time's up!"
    return;
  }

  updateTimer(); //remember, 1000 is default 1 second (1000 miliseconds) 1 just looks cooler.
}, 1);


// ====================================================================== TIMER FOR THE METERS AND YEARS
// 1 hour and 30 minutes = 5400 seconds
let endOfWorld = (2 * 31536000) + (10 * 86400) + (5 * 3600);
const earthYears = document.getElementById("earthYears");
const eartDays = document.getElementById("eartDays");
const earthHours = document.getElementById("earthHours");
const earthMinutes = document.getElementById("earthMinutes");
const earthSeconds = document.getElementById("earthSeconds");

function updateApocolypseTimer() {
  const SEC_PER_DAY = 86400;
  const SEC_PER_YEAR = 31536000;
  const t = Math.floor(endOfWorld);   // whole seconds only

  const yrs = Math.floor(t / SEC_PER_YEAR);
  const dys = Math.floor((t % SEC_PER_YEAR) / SEC_PER_DAY);
  const hrs = Math.floor((t % SEC_PER_DAY) / 3600);
  const min = Math.floor((t % 3600) / 60);
  const sec = t % 60;

  // Format each unit to always have 2 digits (e.g., 01:05:09)
  const planetYrs = String(yrs).padStart(2, "0");
  const planetD = String(dys).padStart(2, "0");
  const planetHrs = String(hrs).padStart(2, "0");
  const planetMin = String(min).padStart(2, "0");
  const planetSec = String(sec).padStart(2, "0");

  earthYears.textContent = `${planetYrs}`;
  eartDays.textContent = `${planetD}`;
  earthHours.textContent = `${planetHrs}`;
  earthMinutes.textContent = `${planetMin}`;
  earthSeconds.textContent = `${planetSec}`;
}

// Run once immediately so there isn't a 1-second delay before updating
updateApocolypseTimer();

const earthInterval = setInterval(() => {
  endOfWorld--;

  if (endOfWorld < 0) {
    clearApocolypseInterval(earthInterval);
    earthYears.textContent = `0`;
    eartDays.textContent = `0`;
    earthHours.textContent = `0`;
    earthMinutes.textContent =`0`;
    earthSeconds.textContent = `0`;
    return;
  }

  updateApocolypseTimer(); //remember, 1000 is default 1 second (1000 miliseconds) 1 just looks cooler.
// --------------------------------------------------------------------------------------------------
  const earthInterval = setInterval(() => {
    if (isScrubbing) return;       // don't tick while dragging
  
    endOfWorld--;
  
    if (endOfWorld < 0) {
      clearInterval(earthInterval);  // fixed name
      endOfWorld = 0;
      updateApocolypseTimer();
      return;
    }
    updateApocolypseTimer();
  }, 1000);
// --------------------------------------------------------------------------------------------------
}, 1000); //ticking speed !!!

setInterval(() => {
  //console.log(endOfWorld);// endOfWorld is Key here
}, 1000);




// ============================================== EARTH INTERVAL
const earthColor1 = document.querySelector(".cls-1");
const earthColor2 = document.getElementById("globeWater");

const waterBar = document.getElementById("waterBar");
const foodBar = document.getElementById("foodBar");
const airBar = document.getElementById("airBar");
const radBar = document.getElementById("radBar");
const wheat = document.querySelector('.wheat');


function updateGlobeColor() {
  const pct = endOfWorld / TOTAL_POOL;   // 1 at start, 0 at the end // Hue 200 (blue) -> 0 (red) as time runs out
  const hue = pct * 225;
  const progress = 1 - pct;              // 0 -> 1 (starts at 0, ends at 1)
  const MIN_THICK = 1;
  const MAX_THICK = 30;
  const thick = MIN_THICK + (MAX_THICK - MIN_THICK) * progress;
  const hue2 = 1/(hue / 100);

  earthColor2.style.backgroundColor = `rgb(${hue/16 + 50}, ${hue/8 + 100}, ${hue})`;
  earthColor2.style.border = `solid ${hue/5}px rgb(${hue/1.05}, ${hue / 1.05}, ${hue/1.05})`;
  earthColor2.style.outline = `solid ${thick}px rgb(${hue2 * 150}, ${hue2 * 200}, 0)`;
  waterBar.style.backgroundColor = `rgb(${hue/16 + 50}, ${hue/8 + 100}, ${hue})`;
  airBar.style.backgroundColor = `rgb(${hue/1.05}, ${hue / 1.05}, ${hue/1.05})`;
  radBar.style.background = `linear-gradient(rgb(255,255,255), rgb(${hue2 * 150}, ${hue2 * 200}, 0))`;
  wheat.style.fill = `rgb(50, ${hue}, ${hue/1.5})`;
}

function updateContinentColor() {
  const pct = endOfWorld / TOTAL_POOL;   // 1 at start, 0 at the end
  // Hue 200 (blue) -> 0 (red) as time runs out
  const hue = pct* 225;
  earthColor1.style.fill = `rgb(50, ${hue}, ${hue/1.5})`;
  foodBar.style.backgroundColor = `rgb(50, ${hue}, ${hue/1.5})`;
// #airBar{background-color:rgb(222, 222, 222); width:7%;}
// #radBar {background-color:rgb(94, 110, 0); width:5%;}
}



// ============================================== WHEAT STUFF
const BASE_Y = 90;      // bottom of the rects (your y=40 + height=50)
const MAX_H = 50;
const wheatRects = document.querySelectorAll('.wheat');
function updateWheat() {
  const pct = endOfWorld / TOTAL_POOL;
  const n = wheatRects.length;

  wheatRects.forEach((rect, i) => {
    // Each rect "owns" a slice of the timeline: rect i starts dying at
    // (n - i) / n of the way... this staggers them left to right.
    const start = i / n;                               // 0 .. ~1
    const local = Math.min(1, Math.max(0, (pct - start) * n));  // 0..1 for this rect
    const h = MAX_H * local*10;

    rect.setAttribute("width", h);
    rect.setAttribute("y", BASE_Y - h);                // keep bottom anchored
  });
}


// ============================================== Water Stuff STUFF
function updateWater() {
  const pct = (endOfWorld / TOTAL_POOL) *10;
  const waterlevel = document.getElementById('waterBar');
  waterlevel.style.height= `${pct/1.5}vw`;
}


// ============================================== EARTH INTERVAL
const meter = document.getElementById("myMeter");
const TOTAL_POOL = endOfWorld;      // capture before the countdown starts
const SPEED = 1;               // game seconds per real second (tune this)
let isScrubbing = false;
let lastTime = performance.now();

meter.min = 0;
meter.max = TOTAL_POOL;
meter.step = 1; // 1 second per step (see note below) !!!
meter.value = 0;

// User drags -> clock
meter.addEventListener("input", () => {
  endOfWorld = TOTAL_POOL - Number(meter.value);
  updateApocolypseTimer();
  updateGlobeColor();
  updateContinentColor();
  updateWheat();
  updateWater();
});

meter.addEventListener("pointerdown", () => (isScrubbing = true));
window.addEventListener("pointerup", () => (isScrubbing = false));
window.addEventListener("pointercancel", () => (isScrubbing = false));

// Clock -> slider, every frame
function frame(now) {
  const dt = (now - lastTime) / 1000;   // real seconds since last frame
  lastTime = now;

  if (!isScrubbing && endOfWorld > 0) {
    endOfWorld = Math.max(0, endOfWorld - dt * SPEED);
    meter.value = TOTAL_POOL - endOfWorld;
    updateApocolypseTimer();
    updateGlobeColor();
    updateContinentColor();
    updateWheat();
    updateWater();
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);