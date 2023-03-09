const defSlider = document.getElementById('def-slider')
const defRRSlider = document.getElementById('def-rr-slider')
const defVal = document.getElementById('def-val')
const defRRVal = document.getElementById('def-rr-val')
const defDieList = document.getElementById('def-die-list')
const defCritList = document.getElementById('def-crit-list')

defVal.innerText = defSlider.value
defRRVal.innerText = defRRSlider.value

function defSliderUpdate() {
    defVal.innerText = defSlider.value
    defRRVal.innerText = defRRSlider.value
}
/*
4 Sides Blank - 66.66%
1 Side Shield - 16.66%
1 Side Critical - 16.66%
*/
function defRoll() {
    let button
    switch(Math.floor(Math.random()*6)+1) {
        case 1:
        case 2: 
        case 3: 
        case 4:
            button = assignImage('./images/blank.png')
            button.onclick = reroll
            button.id = 'defDie'
            break
        case 5:
            button = assignImage('./images/shield.png')
            button.onclick = reroll
            button.id = 'defDie'
            break
        case 6: 
            defCrits++
            button = assignImage('./images/crit.png')
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