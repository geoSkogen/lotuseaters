'use strict'

window.addEventListener("load", hideAndSeek)

function hideAndSeek() {
  var icon = document.getElementById("menuIcon")
  var navbar = document.getElementsByClassName("nav")[0]
  var iconbar = document.getElementsByClassName("navIconShell")[0]

  icon.addEventListener("click", function () {
    navbar.style.display = "flex"
    iconbar.style.display = "none"
  })
}
