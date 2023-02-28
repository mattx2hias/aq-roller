

const atkSlider = document.getElementById('atk-slider')
const defSlider = document.getElementById('def-slider')
const atkRRSlider = document.getElementById('atk-rr-slider')
const defRRSlider = document.getElementById('def-rr-slider')
const atkVal = document.getElementById('atk-val')
const defVal = document.getElementById('def-val')
const atkRRVal = document.getElementById('atk-rr-val')
const defRRVal = document.getElementById('def-rr-val')

const atkDieList = document.getElementById('atk-die-list')
const defDieList = document.getElementById('def-die-list')
const atkCritList = document.getElementById('atk-crit-list')
const defCritList = document.getElementById('def-crit-list')

atkVal.innerText = atkSlider.value
defVal.innerText = defSlider.value
atkRRVal.innerText = atkRRSlider.value
defRRVal.innerText = defRRSlider.value

atkSlider.oninput = () => { atkVal.innerText = atkSlider.value }
defSlider.oninput = () => { defVal.innerText = defSlider.value }
atkRRSlider.oninput = () => { atkRRVal.innerText = atkRRSlider.value }
defRRSlider.oninput = () => { defRRVal.innerText = defRRSlider.value }


function removeAllChildren(element) {
    let child = element.lastElementChild
    while(child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
}

function clearAllDice() {
    removeAllChildren(atkDieList)
    removeAllChildren(atkCritList)
    removeAllChildren(defDieList)
    removeAllChildren(defCritList)
}

function assignImage(path) {
    let button = document.createElement('button')
    let img = document.createElement('img')
    img.src = path
    button.appendChild(img)
    return button
}

/*
2 Side Bows - 33.33%
3 Side Swords - 50%
1 Side Critical - 16.66%
*/
let atkCrits = 0
function atkRoll() {
    let button
    switch(Math.floor(Math.random()*6)+1) {
        case 1:
        case 2: 
            button = assignImage('./images/bow.png')
            button.className = 'atkBtn'
            button.onclick = reroll
            break
        case 3: 
        case 4:
        case 5:
            button = assignImage('./images/sword.png')
            button.className = 'atkBtn'
            button.onclick = reroll
            break
        case 6: 
        atkCrits++
        button = assignImage('./images/critAtk.png')
        button.className = 'atkBtn'
        button.onclick = critAtk
        break
    }
    return button
}

function attack() { 
    removeAllChildren(atkDieList)
    removeAllChildren(atkCritList)
    atkCrits = 0
    for(let i = 0; i < atkSlider.value; i++) 
        atkDieList.appendChild(atkRoll())

}

function critAtk() {
    atkCrits--
    if(atkCrits >= 0) 
        atkCritList.appendChild(atkRoll())
}

/*
4 Sides Blank - 66.66%
1 Side Shield - 16.66%
1 Side Critical - 16.66%
*/
let defCrits = 0
function defRoll() {
    let button
    switch(Math.floor(Math.random()*6)+1) {
        case 1:
        case 2: 
        case 3: 
        case 4:
            button = assignImage('./images/blank.png')
            button.className = 'defBtn'
            button.onclick = reroll
            break
        case 5:
            button = assignImage('./images/shield.png')
            button.className = 'defBtn'
            button.onclick = reroll
            break
        case 6: 
            defCrits++
            button = assignImage('./images/crit.png')
            button.className = 'defBtn'
            button.onclick = critDef
            break
    }
    return button
}

function defend() {
    removeAllChildren(defDieList)
    removeAllChildren(defCritList)
    for(let i = 0; i < defSlider.value; i++) 
        defDieList.appendChild(defRoll())
}

function critDef() {
    defCrits--
    if(defCrits >= 0)
        defCritList.appendChild(defRoll())
}

function reroll() {
    if(this.className == 'atkBtn' && atkRRVal.innerText > 0) {
        this.replaceWith(atkRoll())
        atkRRVal.innerText--
    } else if(this.className == 'defBtn' && defRRVal.innerText > 0){
        this.replaceWith(defRoll())
        defRRVal.innerText--
    }
}
