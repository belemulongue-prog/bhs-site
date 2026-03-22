const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    const isOpen = mainNav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = mainNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* Animation douce au scroll */
const revealTargets = document.querySelectorAll(
  ".hero h1, .hero .lead, .hero-point, .section-heading, .card, .feature, .sector-item, .engagement-item, .contact-form-card, .contact-side-card, .location-card, .map-card, .quick-quote-band, .cta-band"
);

revealTargets.forEach((el) => el.classList.add("reveal-init"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

/* Bouton retour en haut */
const backToTop = document.createElement("button");
backToTop.className = "back-to-top";
backToTop.setAttribute("aria-label", "Retour en haut");
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});