"use strict"

const [w, d, log] = [window, document, console.log]

const chartData = [
  {"day": "mon", "amount": 17.45},
  {"day": "tue", "amount": 34.91},
  {"day": "wed", "amount": 52.36},
  {"day": "thu", "amount": 31.07 },
  {"day": "fri", "amount": 23.39},
  { "day": "sat", "amount": 43.28},
  {"day": "sun", "amount": 25.48}
]

let incrementThisNumber = 0


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


{
function div(num = 0) {
  log(num / 16)
}
div(660)
}

const card = new Promise((resolve, reject) => {
  const card = dq(".card")
 
  
  
}).catch(error => log(error.message))
