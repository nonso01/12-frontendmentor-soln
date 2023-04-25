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
],
   maxSpend = 55,
   maxSpendHeight = 80,
   total = 478.33,
   balance = 921.48,
   animationTime = 10,
   card = dq(".card"),
   loading = dq(".loading"),
   cardBalance = dq(".balance"),
   cardTotal = dq(".total"),
   cardChat = dq(".card__chart")

let incrementToTotal = 0,
incrementToBalance = 0,
incrementThisNumber = 0


chartData.forEach(data => {
  data.height = Math.round((data.amount / maxSpend) * maxSpendHeight)
  
})

const app = new Promise((resolve, reject) => {
 
  chartData.forEach((data, index) => {
    
    let chartDiv = element("div"),
        wrapperDiv = element("div"),
        rect = element("div"),
        spanAmount = element("span"),
        spanDay = element("span")
    
    
  chartDiv.className = "fx j-spb a-cn dir-col box"
  wrapperDiv.className = "fx j-spb dir-col wrapper"
  rect.className = "rect"
  spanAmount.className = 'fx dir-col a-cn j-spe amount'
  spanDay.className = "text small dark day"
  
  spanAmount.innerHTML = `$${data.amount}`   
  spanDay.textContent = data.day
    
    
      
 const animate0 = on(loading, {
    animationend(e) {
      
     this.classList.add("hide")
     card.classList.remove("hide")
     
  const animate1 = setInterval(() => {
     if(incrementThisNumber < data.height) {
        incrementThisNumber += 0.1
       rect.style.setProperty("--calc-height", `${incrementThisNumber}%`)
        }
        
    if(incrementToBalance <= balance) {
        incrementToBalance += 1
        cardBalance.textContent = `$${incrementToBalance - 0.52}`
        }
        
    if(incrementToTotal <= total) {
       incrementToTotal += 1
       cardTotal.textContent = `$${incrementToTotal - 0.67}`
        }
      }, animationTime)
    }
  })

    
    
    wrapperDiv.append(spanAmount, rect)
    chartDiv.append(wrapperDiv, spanDay)
    cardChat.append(chartDiv)
  })
  
  const computeAmountOffset = on('.rect', {
    click() {
     let sibling = this.previousElementSibling

    let itsHeight = parseInt(getComputed(this).height)
    
    let siblingHeight = parseInt(getComputed(sibling).height)
    
    let parentHeight = parseInt(getComputed(this.parentElement).height)
    
    
    sibling.style =  `--y: ${parentHeight - itsHeight - siblingHeight * 1.3}px`
    
    }
  })
  
  // const animate1 = on(loading, {
  //   animationend(e) {
  //   this.classList.add("hide")
  //   card.classList.remove("hide")
  //   }
  // })
  
}).catch(error => log(error.message))


function dq(x = "") {
  return d.querySelector(x)
}

function dqA(x = "") {
  return d.querySelectorAll(x)
}

function element(x = "") {
  return d.createElement(x)
}

function getComputed(x = "" || HTMLElement) {
  let computed
  if(typeof x === "string") {
    computed = w.getComputedStyle(dq(x), null)
  }
  else {
    computed = w.getComputedStyle(x, null)
  }
  return computed
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


