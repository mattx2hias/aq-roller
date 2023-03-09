const atkSlider = document.getElementById('atk-slider')
const atkRRSlider = document.getElementById('atk-rr-slider')
const atkVal = document.getElementById('atk-val')
const atkRRVal = document.getElementById('atk-rr-val')
const atkDieList = document.getElementById('atk-die-list')
const atkCritList = document.getElementById('atk-crit-list')

atkVal.innerText = atkSlider.value
atkRRVal.innerText = atkRRSlider.value

function atkSliderUpdate() {
    atkVal.innerText = atkSlider.value
    atkRRVal.innerText = atkRRSlider.value
}
/*
2 Side Bows - 33.33%
3 Side Swords - 50%
1 Side Critical - 16.66%
*/

function atkRoll() {
    let button
    switch(Math.floor(Math.random()*6)+1) {
        case 1:
        case 2: 
            button = assignImage('./images/bow.png')
            button.onclick = reroll
            button.id = 'atkDie'
            break
        case 3: 
        case 4:
        case 5:
            button = assignImage('./images/sword.png')
            button.onclick = reroll
            button.id = 'atkDie'
            break
        case 6: 
        atkCrits++
        button = assignImage('./images/critAtk.png')
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

