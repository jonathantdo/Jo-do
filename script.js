// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll-reveal for sections + cards
const targets = document.querySelectorAll(
  ".section, .hero .headline, .hero .sub, .hero .cta-row, .hero .stat-row, .card, .posts li, .contact-card"
);
targets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
targets.forEach((el) => io.observe(el));

// Subtle parallax on the glow blobs
const glow1 = document.querySelector(".glow-1");
const glow2 = document.querySelector(".glow-2");
window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (glow1) glow1.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
    if (glow2) glow2.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
  },
  { passive: true }
);
