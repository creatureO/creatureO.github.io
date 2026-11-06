// GRID COMPONENTS
const container = document.getElementById('grid-container');
const totalSquares = 10000;

// AUDIO COMPONENTS
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(pitchFrequency) {

    // Create a new oscillator for each hover
    const oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine';

    // Set the pitch
    oscillator.frequency.setValueAtTime(pitchFrequency, audioCtx.currentTime);

    // Connect sound to speakers
    oscillator.connect(audioCtx.destination);

    // Play sound
    oscillator.start();

    // Stop after 0.3 seconds
    oscillator.stop(audioCtx.currentTime + 0.3);
}


// CREATE GRID
for (let i = 0; i < totalSquares; i++) {

    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseenter', () => {

        square.classList.add('is-active');

        // Play a random pitch between 200Hz and 1000Hz
        const randomPitch = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

        playTone(randomPitch);

    });

    container.appendChild(square);
}