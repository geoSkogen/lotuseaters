'use strict'

window.addEventListener("load", hideAndSeek)

function hideAndSeek() {
  var icon = document.getElementById("menuIcon")
  var navbar = document.getElementById("nav")
  var iconbar = document.getElementById("navOpen")

  icon.addEventListener("click", function () {
    navbar.style.display = "flex"
    iconbar.style.display = "none"
  })
}
