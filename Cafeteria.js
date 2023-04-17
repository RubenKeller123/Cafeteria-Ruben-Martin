const colorPicker = document.getElementById('color-picker');

colorPicker.addEventListener('input', function() {
  document.documentElement.style.setProperty('--output-color', this.value);
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('show');
});

var HomeDiv = document.getElementById("Home");
var ButtonBack = document.getElementById("buttonBack");
var MacherDiv = document.getElementById("Macher");
var ContactDiv = document.getElementById("ContactUs")
var ButtonMacher = document.getElementById("nr2");
var ButtonContact = document.getElementById("nr3")

ButtonBack.addEventListener("click", function() {
  HomeDiv.style.display = "block";
  MacherDiv.style.display = "none";
  ContactDiv.style.display = "none";
});
ButtonMacher.addEventListener("click", function() {
  MacherDiv.style.display = "block";
  HomeDiv.style.display = "none";
  ContactDiv.style.display = "none";
});

ButtonContact.addEventListener("click", function() {
  MacherDiv.style.display = "none";
  HomeDiv.style.display = "none";
  ContactDiv.style.display = "block";
});





window.onload = function() {
  // Get the overlay and popup elements
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.popup');

  // Show the popup
  overlay.style.display = 'flex';
  popup.style.display = 'block';

  // Add an event listener to the close button
  var closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', function() {
      overlay.style.display = 'none';
      popup.style.display = 'none';
  });
};
