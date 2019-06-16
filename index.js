'use strict'


// ----------  PORTFOLIO ----------- //

function mouseOverCard(event) {
  let target = event.currentTarget
  let btn = target.children[1]
  btn.classList.remove('displ_none')
}

function mouseOutCard(event) {
  let target = event.currentTarget
  let btn = target.children[1]
  btn.classList.add('displ_none')
}

var portfCard = document.getElementsByClassName('portfolio__card')
var portfLength = portfCard.length

for (var z = 0; z < portfLength; z++) {
  let elem = portfCard[z]
  elem.addEventListener("mouseover", mouseOverCard, false)
  elem.addEventListener("mouseout", mouseOutCard, false)
}