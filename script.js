window.addEventListener("load", () => {
  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#ADFF2F', '#FFA500'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (3 + Math.random() * 2) + 's';

    document.querySelector('.confetti-container').appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000);
  }

  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    const colors = ['#FF69B4', '#87CEEB', '#FFD700', '#FFB6C1', '#DA70D6'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = (5 + Math.random() * 3) + 's';

    document.querySelector('.balloon-container').appendChild(balloon);
    setTimeout(() => balloon.remove(), 8000);
  }

  setInterval(createConfetti, 150);
  setInterval(createBalloon, 1200);
});

// Carrossel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const total = document.querySelectorAll('.carousel-track img').length;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  updateCarousel();
});
