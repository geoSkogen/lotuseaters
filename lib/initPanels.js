'use strict'

window.addEventListener("load",initPanels)

function initPanels() {
  var pos = -1
  var toggleAssoc = {
    html: ["&plus;", "&minus;"],
    css: ["none", "block"],
    bools: [false, true]
  }
  var toggleLog = []
  var toggles = document.getElementsByClassName("closePanel")
  var panels = document.getElementsByClassName("panelContent")
  for (let i = 0; i < toggles.length; i++) {
    if (panels[i]) {
      toggleLog[i] = false
      pos = toggleAssoc.bools.indexOf(toggleLog[i])
      //normalizing the page, in case of markup errors
      panels[i].style.display = toggleAssoc.css[pos]
      toggles[i].innerHTML = toggleAssoc.html[pos]
      assignToggle(panels[i],toggles[i],i)
    }
  }
  function assignToggle(panel,toggleSwitch,index) {
    toggleSwitch.addEventListener("click", function () {
      panelToggler(index)
    })
  }
  function panelToggler(index) {
      var pos = toggleAssoc.bools.indexOf(!toggleLog[index])
      panels[index].style.display = toggleAssoc.css[pos]
      toggles[index].innerHTML = toggleAssoc.html[pos]
      toggleLog[index] = !toggleLog[index]
  }
}
