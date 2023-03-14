const colorPicker = document.getElementById('color-picker');

colorPicker.addEventListener('input', function() {
  document.documentElement.style.setProperty('--output-color', this.value);
});