"use strict"
let counter = 0
const plus = document.querySelector("#btnPlus")
const minus = document.querySelector("#btnMinus")
const h1 = document.querySelector("h1")

function getClick1(){
    counter++
    h1.innerText = counter
}

function getClick2(){
    if (counter > 0) {
        counter--
        h1.innerText = counter
    }
}

plus.onclick = getClick1
minus.onclick = getClick2
