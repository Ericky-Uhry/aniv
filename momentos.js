document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const closeBtn = document.querySelector(".close-lightbox");

  document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.remove("hidden");
      lightboxImg.src = img.src;
      lightboxImg.style.display = "block";
      lightboxVideo.style.display = "none";
    });
  });

  document.querySelectorAll(".gallery-item video").forEach(video => {
    video.addEventListener("click", () => {
      lightbox.classList.remove("hidden");
      lightboxVideo.src = video.src;
      lightboxVideo.style.display = "block";
      lightboxImg.style.display = "none";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
    lightboxVideo.pause();
    lightboxVideo.src = "";
  });

  // Fechar lightbox ao clicar fora do conteúdo
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeBtn.click();
    }
  });
});

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
