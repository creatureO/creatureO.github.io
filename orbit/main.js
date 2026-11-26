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
  addRandomItem(gridAstronauts);

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = "00:00:00"; // Or "Time's up!"
    
    return;
  }

  updateTimer(); //remember, 1000 is default 1 second (1000 miliseconds) 1 just looks cooler.
}, 1000);


const gridAstronauts = document.querySelector('.grid-area')
function addRandomItem(container) {
  const img = document.createElement("img");
  img.src = `./website-images/home-page-icons/astronaut.svg`;
  container.appendChild(img);
}

const buyButton = document.getElementById("buyButton");
buyButton.onclick = function(){
console.log('overlay');
}

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
}, .00001); //ticking speed !!! 1000 default

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

const waterRead = document.querySelector('#waterBar p');
const foodRead = document.querySelector('#foodBar p');
const airRead = document.querySelector('#airBar p');
const radRead = document.querySelector('#radBar p');

function updateGlobeColor() {
  const pct = endOfWorld / TOTAL_POOL;   // 1 at start, 0 at the end // Hue 200 (blue) -> 0 (red) as time runs out
  const hue = pct * 225;
  const progress = 1 - pct;              // 0 -> 1 (starts at 0, ends at 1)
  const MIN_THICK = 1;
  const MAX_THICK = 30;
  const thick = MIN_THICK + (MAX_THICK - MIN_THICK) * progress;
  const hue2 = 1/(hue / 100); 

  const readVal = pct;
  const waterVal = (readVal/0.28).toFixed(2);
  const foodVal = (readVal/0.18).toFixed(2);
  const airVal = (100/(readVal+0.20)-50).toFixed(2);
  const radVal = (1000/(readVal+0.66)-500).toFixed(2);

  earthColor2.style.backgroundColor = `rgb(${hue/16 + 50}, ${hue/8 + 100}, ${hue})`;
  earthColor2.style.border = `solid ${hue/5}px rgb(${hue/1.05}, ${hue / 1.05}, ${hue/1.05})`;
  earthColor2.style.outline = `solid ${thick}px rgb(${hue2 * 150}, ${hue2 * 200}, 0)`;
  waterBar.style.backgroundColor = `rgb(${hue/16 + 50}, ${hue/8 + 100}, ${hue})`;
  airBar.style.backgroundColor = `rgb(${hue/1.05}, ${hue / 1.05}, ${hue/1.05})`;
  radBar.style.background = `linear-gradient(rgb(255,255,255), rgb(${hue2 * 150}, ${hue2 * 200}, 0))`;

  waterRead.textContent= `${waterVal} Exaliters (EL)`;
  foodRead.textContent= `${foodVal} Yottajoules (YJ)`;
  airRead.textContent= `${airVal} Air Quality Index (AQI)`;
  radRead.textContent= `${radVal} Micro Sievert (mSv)`;
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
    const h = MAX_H * local*8.5;

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
const SPEED = 10000;               // game seconds per real second (tune this) 1 default
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
  updateText();
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
    updateText();
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);


const overlayInfo = document.querySelector(".overlay-info");

document.addEventListener('mousemove', (e) => {
  // Update the circle's position based on viewport coordinates
  overlayInfo.style.left = `${e.clientX}px`;
  overlayInfo.style.top = `${e.clientY}px`;
});

earthColor2.addEventListener('mouseenter', () => {
    console.log('Mouse entered home!');
    overlayInfo.style.display='block'; 
});
  
earthColor2.addEventListener('mouseleave', () => {
    console.log('Mouse left home!');
    overlayInfo.style.display='none';
});

// whole is 63954000; increments of 10659000
function updateText() {
  const title = document.querySelector(".overlay-info h1");
  const paragraph = document.querySelector(".overlay-info p");
  if (endOfWorld > 60000000) {            // zone 1: 63954000 -> 53295001
    title.textContent = "Right now";
    paragraph.innerHTML= `
                    The earth's conditions and consumables (food and water) are all at adequet levels, 
                    but with modern industrializations, we will degrade this over time.<br><br>
                    The Orbit corp facilites around the world monitor the health of our earth, 
                    gauging our saftey based on <strong>Yottajoules &#9889;</strong> of energy from food, 
                    <strong>Exaliter &#128167;</strong> of water, and <strong>Sieverts &#9762;</strong> of Radiation. 
                    Air quality is measured on an <strong>AQI &#128168;</strong> scale from 0 to 500.
                    `;
  } else if (endOfWorld > 53295000) {     // zone 2
    title.textContent = "4 months in";
    paragraph.innerHTML= `
                    Earth is losing it's wild life such as certain large whales and birds, as they either
                    require too many calories to maintain or require cleaner air. Our Fusion reactors are 
                    leaking enough radiation to make a noticiable Seivert increase in the atmosphere.<br>
                    Food is getting harder to come by but still accessible for most people. The oceans 
                    have also become more shallow.
                    `;
  } else if (endOfWorld > 42636000) {     // zone 3
    title.textContent = "8 months in";
    paragraph.innerHTML= `
                    Earth's air gets heavier and now the radiation is noticibly causing more cancer among 
                    the population. We have lost roughly a third of our crops and fish are now much more 
                    scarce, leading to economic collapse in many fishing and marine industries.
                    `;
  } else if (endOfWorld > 31977000) {     // zone 4
    title.textContent = "12 months in";
    paragraph.innerHTML= `
                    Few places on earth are left inhabitable, and the oceans are half empty compared to 
                    how full they used to be. Food is so scarce that synthetic production is barley 
                    keeping men and women alive. If you are alive, you're most likely a citizen of a mega-city.
                    Air is so toxic you now require hourly breaks to use a respirator station.
                    `;
  } else if (endOfWorld > 21318000) {     // zone 5
    title.textContent = "16 months in";
    paragraph.innerHTML= `
                    Food continues to grow scarce and the radiation has grown so potent that now the government 
                    mandates mega-cities to keep as much sunlight and air excluded from indoor spaces as possible.
                    Fish are on the brink of extinction and our recources are in a grim state of depletion.
                    `;
  } else if (endOfWorld > 0) {            // zone 6: 10659000 -> 1
    title.textContent = "20 months in";
    paragraph.innerHTML= `
                    At this point, fish have become a myth, and land grown food has become a distant memory of the past.
                    Black markets now value even synthetic proteins and ration cards accomadate less peolpe.
                    Nearly 75% of our population has disapeared and our fusion reactors are not enough to power what is 
                    needed to pump oxygen and water purification.
                    `;
  } else {                                // time is up
    title.textContent = "IT'S OVER";
    paragraph.innerHTML= `
                    Humanity has perished here on earth. The oceans are dry or a pile of sludge and the air is barley 
                    able to be seen through. The radiation is now the new dominant entity of the atmosphere and the only 
                    remaining men and women now reside in Orbit corp space crafts.<br><br>
                    Will your family be a part of those survivors? REGISTER NOW!
                    `;
  }
}