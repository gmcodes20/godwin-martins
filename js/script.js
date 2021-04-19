var navLinks = document.getElementById("nav-links");
var open = document.getElementsByClassName('close-menu')

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-120%";
  // open.style.display = 'none'
}