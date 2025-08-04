window.addEventListener('DOMContentLoaded', () => {
  // Animation GSAP sur l'image Hero : zoom puis rotation
  const tl = gsap.timeline({defaults: {ease: "power2.out"}});
  tl.to("#hero-img", {
    duration: 0.8,
    scale: 1.12,
    filter: "brightness(0.7) contrast(1.1)",
    delay: 0.4
  })
  .to("#hero-img", {
    duration: 0.6,
    rotate: 0,
    scale: 1.08
  })
  .to(".hero-gradient", {
    duration: 0.3,
    opacity: 0,
    pointerEvents: "none"
  }, "-=0.3"); // en même temps que le filtre

  // Animation bounce sur les sections au scroll
  gsap.utils.toArray("[data-sr-id]").forEach((el, i) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      scale: 0.98,
      ease: "bounce.out",
      duration: 0.8,
      delay: 0.7 + i * 0.15,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });

  // Carrousel défilement horizontal et superposition
  setTimeout(() => {
    const images = [document.getElementById('hero-img'), document.getElementById('hero-img-2')];
    images.forEach((img, i) => {
      img.style.filter = "brightness(0.7) contrast(1.1)";
      img.style.transition = "transform 1.2s cubic-bezier(.68,-0.55,.27,1.55), opacity 1.2s";
      img.style.left = i === 0 ? "0%" : "10%";
      img.style.width = "90%";
      img.style.zIndex = i === 0 ? "2" : "1";
      img.style.opacity = i === 0 ? "1" : "0.8";
      img.style.top = "40px"; // sous le texte
    });
    let current = 0;
    setInterval(() => {
      const next = (current + 1) % images.length;
      // Image courante défile vers la gauche
      gsap.to(images[current], {
        x: "-100%",
        opacity: 0.8,
        zIndex: 1,
        duration: 1.2
      });
      // Image suivante arrive de la droite et se superpose
      gsap.to(images[next], {
        x: "0%",
        opacity: 1,
        zIndex: 2,
        duration: 1.2
      });
      current = next;
    }, 6000);
  }, 1800); // Lance le carrousel après l'animation initiale
});