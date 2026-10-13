const screen = document.querySelector(".screen");
const status = document.querySelector(".status");
const button = document.querySelector(".switch");

let isOn = false;// !!!!!CHANGE!!!!!!! ------- AI told us to move it out of the click button. ^^
button.addEventListener("click", function () {
  //former "let isOn = false;" was here vv

  console.log("isOn is:", isOn);// !!!!!CHANGE!!!!!!! ------- TEST ITEM FROM AI

  if (isOn === false) {
    screen.classList.add("on");
    status.textContent = "ON";
    button.textContent = "Turn off";
    isOn = true;
    console.log('TURNED ON');
  } else {
    screen.classList.remove("on");
    status.textContent = "OFF";
    button.textContent = "Turn on";
    isOn = false;
    console.log('Not turning off');
  }
});