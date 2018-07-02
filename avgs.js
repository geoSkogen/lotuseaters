'use strict'

function Main (n, listlen) {
  var data = barfData(n, listlen)
  var avgObj = avgs(data)
  prettyData(avgObj)
  return avgObj
}

function prettyData(obj) {
  var keynames = Object.keys(obj)
  for (let i = 0; i < keynames.length; i++) {
    console.log("\r\n" + keynames[i] + " :")
    console.log("\t\t" + obj[keynames[i]].toString())
  }
  return
}

function barfData(n, listlen) {
  var results = []
  var storeVar = 0
  for (let i = 0; i < n; i++) {
    if (!results[i]) {
      results[i] = []
    }
    for (let ii = 0; ii < listlen; ii++) {
      storeVar = Math.floor(Math.random() * 100)
      results[i][ii] = storeVar
    }
  }
  return results
}

function avgs(arrArr) {
  var sub = 0
  var subSub = 0
  var results = []
  var showResults = {}
  for (let i = 0; i < arrArr.length; i++) {
    sub = 0
    for (let ii = 0; ii < arrArr[i].length; ii++) {
      sub += arrArr[i][ii]
    }
    subSub += sub/arrArr[i].length
    results.push(sub/arrArr[i].length)
    showResults["list_" + (i + 1).toString()] = results[i]
  }
  showResults["AVG_OF_AVGS"] = subSub/arrArr.length
  return showResults
}

function showError(str) {
  var message = ""
  switch(str) {
    case "a":
      message = "please supply two numeric arguments"
      break
    case "n":
      message = "only accepts numeric arguments"
      break
    default :
      message = "unknown error"
  }
  console.log(message)
  return
}

if (process.argv[2] && process.argv[3]) {
  var n = Number(process.argv[2])
  var listlen = Number(process.argv[3])
  if (isNaN(n) || isNaN(listlen)) {
    showError("n")
    return false
  } else {
    Main(n,listlen)
    return true
  }
} else {
  showError("a")
  return false
}
