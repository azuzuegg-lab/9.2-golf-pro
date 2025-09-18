// ハンバーガーメニュー
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});



// IntersectionObserver for process-step animation
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".process-step");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  steps.forEach(step => observer.observe(step));
});

