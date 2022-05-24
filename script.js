let btnEl = document.getElementById("btn")
let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count += 1
    countEl.textContent = count

}
function decrement(){
    count -= 1
    countEl.textContent = count

}