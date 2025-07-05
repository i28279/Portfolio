const boxes = document.querySelectorAll('.w3-card-4');

boxes.forEach(box => {
  const closeBtn = box.querySelector('.close-btn');

  box.addEventListener('click', (e) => {
    // Prevent triggering fullscreen on close button click
    if (e.target === closeBtn) return;

    // If already fullscreen, do nothing
    if (box.classList.contains('fullscreen')) return;

    // Add fullscreen to clicked box
    box.classList.add('fullscreen');

    // Hide other boxes
    boxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.classList.add('hide');
      }
    });
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent triggering box click

    // Remove fullscreen and show all boxes again
    box.classList.remove('fullscreen');
    boxes.forEach(otherBox => {
      otherBox.classList.remove('hide');
    });
  });
});

// Optional: close fullscreen on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    const fullscreenBox = document.querySelector('.w3-card-4.fullscreen');
    if (fullscreenBox) {
      fullscreenBox.classList.remove('fullscreen');
      boxes.forEach(box => box.classList.remove('hide'));
    }
  }
});