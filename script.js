const track = document.getElementById('testimonialTrack');
const slides = track.children;
const dotContainer = document.getElementById('sliderDots');
let first = 0;
let interval;

// Create dots dynamically
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => moveToSlide(i));
  dotContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateDots(i) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

function moveToSlide(i) {
  first = i;
  track.style.transform = `translateX(-${i * 100}%)`;
  updateDots(i);
  resetInterval();
}

function nextSlide() {
  first = (first + 1) % slides.length;
  moveToSlide(first);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

interval = setInterval(nextSlide, 5000);