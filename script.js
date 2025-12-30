// script.js - small interactive behaviors
document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js loaded');
  const title = document.querySelector('h1');
  if(title){
    title.style.cursor = 'pointer';
    title.addEventListener('click', () => {
      title.classList.toggle('highlight');
    });
  }

  const btn = document.querySelector('.btn');
  if(btn){
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const p = document.querySelector('p');
      if(p) p.textContent = 'Thanks for trying the demo — content updated by JavaScript.';
    });
  }
});
