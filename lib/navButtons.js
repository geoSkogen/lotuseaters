'use strict'

window.addEventListener("load", initClick);

function initClick() {

  var href;
  var buts = document.getElementsByClassName("navButt");
  var as = document.getElementsByTagName("a");

  for (var i = 0; i < as.length; i++) {
    href = as[i].getAttribute("href");
    clickLink(buts[i], href);
  }

  function clickLink(elm, url) {
    elm.onclick = function () { location.assign(url); };
  }

}
