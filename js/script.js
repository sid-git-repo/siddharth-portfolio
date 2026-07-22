document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.querySelector(".fab.top");
  window.addEventListener("scroll", () => {
    topBtn && topBtn.classList.toggle("visible", window.scrollY > 500);
  });
  topBtn && topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const navToggle = document.querySelector(".nav-toggle");
  const navbar = document.querySelector(".navbar");
  if (navToggle) {
    navToggle.addEventListener("click", () => navbar.classList.toggle("open"));
    document.querySelectorAll(".navbar a").forEach((link) => {
      link.addEventListener("click", () => navbar.classList.remove("open"));
    });
  }

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
