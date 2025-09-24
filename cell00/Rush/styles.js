// Fade-in effect on scroll
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.card, .project, .steps li');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => {
    el.classList.add('pre-fade');
    observer.observe(el);
  });
});

// Ripple effect for buttons
document.addEventListener('click', function(e){
  const btn = e.target.closest('.btn');
  if(!btn) return;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = (e.clientX - btn.getBoundingClientRect().left) + 'px';
  ripple.style.top = (e.clientY - btn.getBoundingClientRect().top) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});