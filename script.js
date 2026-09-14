/* =====================================================
   RAMYA V — PORTFOLIO SCRIPT
   Handles: dark/light mode, mobile nav, hero typing
   effect, and a single subtle scroll-reveal.
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Dark / light mode toggle ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const THEME_KEY = 'ramya-portfolio-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (themeIcon) { themeIcon.classList.remove('bi-moon-stars'); themeIcon.classList.add('bi-sun'); }
    } else {
      root.removeAttribute('data-theme');
      if (themeIcon) { themeIcon.classList.remove('bi-sun'); themeIcon.classList.add('bi-moon-stars'); }
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu after a link is tapped
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Hero code-window typing effect ---------- */
  const typedEl = document.getElementById('typedCode');
  const codeSnippet =
`class Developer {

    String name    = "Ramya V";
    String role    = "Aspiring Software Engineer";
    String focus   = "Java Development";

    String[] skills = {
        "Java", "OOP", "SQL", "JDBC"
    };

    void solveProblems() {
        // clean, working code
    }
}`;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typedEl) {
    if (prefersReducedMotion) {
      typedEl.textContent = codeSnippet;
    } else {
      let i = 0;
      const typeSpeed = 18; // ms per character
      function typeNext() {
        if (i <= codeSnippet.length) {
          typedEl.textContent = codeSnippet.slice(0, i);
          i++;
          setTimeout(typeNext, typeSpeed);
        }
      }
      typeNext();
    }
  }

  /* ---------- Single, subtle scroll-reveal per section ---------- */
  const revealTargets = document.querySelectorAll('.section, .hero');

  if (prefersReducedMotion) {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

});
