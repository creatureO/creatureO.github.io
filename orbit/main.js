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

  const yrs = Math.floor(endOfWorld / SEC_PER_YEAR);
  const dys = Math.floor((endOfWorld % SEC_PER_YEAR) / SEC_PER_DAY);
  const hrs = Math.floor((endOfWorld % SEC_PER_DAY) / 3600);
  const min = Math.floor((endOfWorld % 3600) / 60);
  const sec = endOfWorld % 60;

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

// =================================== Bars change now due to the countdown of earth.
const waterBar = document.getElementById("waterBar");
const foodBar = document.getElementById("foodBar");
const airBar = document.getElementById("airBar");
const radBar = document.getElementById("radBar");

if (planetMin === "30") {
  waterBar.style.width = "20%";
}

if (planetMin === "30") {
  foodBar.style.width = "35%";
}

if (planetMin === "25") {
  airBar.style.width = "80%";
}

if (planetMin === "40") {
  radBar.style.width = "50%";
}
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
}, 0.5);