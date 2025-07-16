window.addEventListener('DOMContentLoaded', () => {
  // Animation ScrollReveal existante
  ScrollReveal().reveal('[data-sr-id]', {
    duration: 900,
    distance: '40px',
    easing: 'cubic-bezier(.68,-0.55,.27,1.55)',
    origin: 'bottom',
    reset: false,
    interval: 120,
    scale: 0.98
  });

  // Animation zoom image Hero
  const img = document.getElementById('hero-img');
  if (img) {
    setTimeout(() => {
      img.style.transform = 'scale(1.08) rotate(0deg)';
      img.style.filter = 'brightness(1)';
    }, 400); // Démarre après 400ms
  }
});