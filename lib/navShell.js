'use strict'

window.addEventListener("load", hideAndSeek)

function hideAndSeek() {
  var icon = document.getElementById("menuIcon")
  var navbar = document.getElementsByClassName("nav")[0]
  var iconbar = document.getElementsByClassName("navIconShell")[0]
  var closenav = document.getElementsByClassName("navButt_navClose")[0]

  icon.addEventListener("click", function () {
    navbar.style.display = "flex"
    iconbar.style.display = "none"
  })

  closenav.addEventListener("click", function () {
    navbar.style.display = "none"
    iconbar.style.display = "block"
  })


}
