'use strict'

window.addEventListener("load", hideAndSeek)

function hideAndSeek() {
  var classclosed = "headerBackground"
  var classopen = classclosed + "_withNav"
  var icon = document.getElementById("menuIcon")
  var navbar = document.getElementsByClassName("nav")[0]
  var iconbar = document.getElementsByClassName("navIconShell")[0]
  var closenav = document.getElementsByClassName("navButt_navClose")[0]
  var headbar = document.getElementById(classclosed)

  icon.addEventListener("click", function () {
    navbar.style.display = "flex"
    iconbar.style.display = "none"
    headbar.id = classopen
  })

  closenav.addEventListener("click", function () {
    navbar.style.display = "none"
    iconbar.style.display = "block"
    headbar.id = classclosed
  })


}
