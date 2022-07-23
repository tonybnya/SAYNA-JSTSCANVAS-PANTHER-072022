let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
let srcImage = document.querySelector('#source');
let raf;
let run = false;
srcImage.style.display = none;
let img = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  show: () => {
    context.beginPath();
    context.drawImage(srcImage, this.x, this.y, 50, 50);
    context.closePath();
  }
};

const clear = () => { 
  // context.fillStyle = 'rgba(255, 255, 255, 0.3)';
  context.fillStyle = 'rgba(255, 0, 0, 0.3)';
  context.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.addEventListener('mousemove', (e) => { 
  if (!run) {
    clear();
    img.x = e.clientX;
    img.y = e.clientY;
    img.show();
  }
});

canvas.addEventListener('mouseout', (e) => { 
  window.cancelAnimationFrame(raf);
});

img.show();