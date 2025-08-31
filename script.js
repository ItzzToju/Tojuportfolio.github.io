document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  const burger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', ()=>{
      burger.classList.toggle('active');
      nav.classList.toggle('open');
    });
    // close on nav click (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
      burger.classList.remove('active');
      nav.classList.remove('open');
    }));
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: .15});
  revealEls.forEach(el=>io.observe(el));

  // Slider (no autoplay, click-only)
  const slider = document.getElementById('thumbSlider');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    let idx = slides.findIndex(s => s.classList.contains('active'));
    const show = (i)=>{
      slides[idx].classList.remove('active');
      idx = (i + slides.length) % slides.length;
      slides[idx].classList.add('active');
    };
    slider.querySelector('.prev').addEventListener('click', ()=>show(idx-1));
    slider.querySelector('.next').addEventListener('click', ()=>show(idx+1));
  }
});
