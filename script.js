window.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".site-header");
  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menu-toggle");

  // ── スクロールでヘッダーの色を変える ──
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header?.classList.add("is-scrolled");
      navbar?.classList.add("is-scrolled");
    } else {
      header?.classList.remove("is-scrolled");
      navbar?.classList.remove("is-scrolled");
    }
  });

  // ── ハンバーガーを押したらメニュー開閉 ──
  menuBtn?.addEventListener("click", () => {
    navbar?.classList.toggle("active");
  });

  // ── メニュー外をクリックしたら閉じる ──
  document.addEventListener("click", (e) => {
    if (!navbar?.contains(e.target) && !menuBtn?.contains(e.target)) {
      navbar?.classList.remove("active");
    }
  });

  // ── スクロールでふわっと表示アニメーション ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".story-content img, .process-step img, .scroll-fade")
    .forEach(el => observer.observe(el));

  // ── process-step のアニメーション ──
  const stepObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        stepObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".process-step")
    .forEach(step => stepObserver.observe(step));

});