const colorPicker = document.getElementById('color-picker');

colorPicker.addEventListener('input', function() {
  document.documentElement.style.setProperty('--output-color', this.value);
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('show');
});