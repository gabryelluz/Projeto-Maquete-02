// script.js
const building = document.querySelector('.building');
const frontViewButton = document.getElementById('frontView');
const topViewButton = document.getElementById('topView');

frontViewButton.addEventListener('click', () => {
  building.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

topViewButton.addEventListener('click', () => {
  building.style.transform = 'rotateX(-60deg) rotateY(0deg)';
});