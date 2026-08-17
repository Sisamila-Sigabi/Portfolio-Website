function showPage(id) {
  document.querySelectorAll('section.page').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === id);
  });
  window.scrollTo(0, 0);
  triggerReveals();
}

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => showPage(a.dataset.page));
});

/* Scroll-reveal animation for cards/sections */
const revealTargets = document.querySelectorAll(
  '.tech-card, .card, .project-card, .resume-card, .skills-card, .contact-info-card, .form-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function triggerReveals() {
  document.querySelectorAll('.reveal:not(.in-view)').forEach(el => revealObserver.observe(el));
}
triggerReveals();

/* Animate skill bars from 0 to their target width once visible */
const skillFills = document.querySelectorAll('.skill-bar-fill');
skillFills.forEach(bar => {
  bar.dataset.target = bar.style.width;
  bar.style.width = '0%';
});

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.target;
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
skillFills.forEach(bar => skillObserver.observe(bar));
