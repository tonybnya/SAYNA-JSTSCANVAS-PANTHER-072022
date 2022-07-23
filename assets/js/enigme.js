const titles = document.querySelectorAll('h1');
const subtitles = document.querySelectorAll('h3');
const imgs = document.querySelectorAll('img');
const paras = document.querySelectorAll('p');
const navbar = document.querySelector('nav');
const sitemap = document.querySelector('.sitemap');
const bars = document.querySelectorAll('.bar');

const scrollFadeIn = [
  { transform: 'translateX(-1000px) scale(0.1)'},
  { transform: 'translateX(0) scale(1)'}
];

const scrollFadeInBar = [
  { transform: 'translateY(-1000px) scale(0.1)'},
  { transform: 'translateY(0) scale(1)'}
];

const scrollTiming = {
  duration: 1000,
  scrollEasing: 'easeOut'
}; 

window.addEventListener('scroll', () => { 
  bars.forEach(bar => {
    bar.animate(scrollFadeInBar, scrollTiming);
  });

  navbar.animate(scrollFadeIn, scrollTiming);

  titles.forEach(title => {
    title.animate(scrollFadeIn, scrollTiming);
  });

  subtitles.forEach(subtitle => {
    subtitle.animate(scrollFadeIn, scrollTiming);
  });

  imgs.forEach(img => {
    img.animate(scrollFadeIn, scrollTiming);
  });

  paras.forEach(para => {
    para.animate(scrollFadeIn, scrollTiming);
  });

  sitemap.animate(scrollFadeIn, scrollTiming);
});