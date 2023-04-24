"use strict"

const [w, d, log] = [window, document, console.log]

function dq(x = "") {
  return d.querySelector(x)
}

function dqA(x = "") {
  return d.querySelectorAll(x)
}

function on(el,events = {}) {
  let elements = typeof el === 'string' ? dqA(el) : el
  
  if (elements instanceof NodeList) {
    elements.forEach(el => {
      for(let key in events) {
        el.addEventListener(key, events[key].bind(el))
      }
    })
  } else {
    for(let key in events) {
        el.addEventListener(key, events[key].bind(el))
  }
}

return elements && events ? true : false
}
