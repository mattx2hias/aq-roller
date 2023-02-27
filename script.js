

const atkSlider = document.getElementById('atk-slider')
const defSlider = document.getElementById('def-slider')
const atkVal = document.getElementById('atk-val')
const defVal = document.getElementById('def-val')

const atkDieList = document.getElementById('atk-die-list')
const defDieList = document.getElementById('def-die-list')

atkVal.innerHTML = atkSlider.value
defVal.innerHTML = defSlider.value

atkSlider.oninput = () => {
    atkVal.innerText = atkSlider.value
}

defSlider.oninput = () => {
    defVal.innerHTML = defSlider.value
}

function removeAllChildren(element) {
    let child = element.lastElementChild
    while(child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
}

function clearAllDice() {
    removeAllChildren(atkDieList)
    removeAllChildren(defDieList)
}

async function assignImage(path) {
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
async function attack() {
    
    removeAllChildren(atkDieList)
    let button
    for(let i = 0; i < atkSlider.value; i++) {
        switch(Math.floor(Math.random()*6)+1) {
            case 1:
            case 2: 
                button = await assignImage('./images/bow.png')
                break
            case 3: 
            case 4:
            case 5:
                button = await assignImage('./images/sword.png')
                break
            case 6: 
            button = await assignImage('./images/crit.png')
            break
        }
        atkDieList.appendChild(button)
        
    }
}
/*
4 Sides Blank - 66.66%
1 Side Shield - 16.66%
1 Side Critical - 16.66%
*/
async function defend() {
    removeAllChildren(defDieList)
    let button
    for(let i = 0; i < defSlider.value; i++) {
        switch(Math.floor(Math.random()*6)+1) {
            case 1:
            case 2: 
            case 3: 
            case 4:
                button = await assignImage('./images/blank.png')
                break
            case 5:
                button = await assignImage('./images/shield.png')
                break
            case 6: 
                button = await assignImage('./images/crit.png')
                break
        }
        defDieList.appendChild(button)
        
    }
}
