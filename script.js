const coin = document.getElementById('coin');
const headsImg = document.getElementById('headsImg');
const tailsImg = document.getElementById('tailsImg');
const flipBtn = document.getElementById('flipBtn');
const result = document.getElementById('result');
let isFlipping = false;

// Inicial: mostrar heads
headsImg.style.display = 'block';
tailsImg.style.display = 'none';

function performFlip() {
    if (isFlipping) return;

    isFlipping = true;
    flipBtn.disabled = true;
    result.textContent = '';

    // Add flipping animation
    coin.classList.add('flipping');

    // Simulate flip duration
    setTimeout(() => {
        const isHeads = Math.random() < 0.5;
        if (isHeads) {
            headsImg.style.display = 'block';
            tailsImg.style.display = 'none';
            result.textContent = 'Heads';
        } else {
            headsImg.style.display = 'none';
            tailsImg.style.display = 'block';
            result.textContent = 'Tails';
        }

        coin.classList.remove('flipping');
        isFlipping = false;
        flipBtn.disabled = false;
    }, 600);
}

// Event listeners
flipBtn.addEventListener('click', performFlip);
coin.addEventListener('click', performFlip);