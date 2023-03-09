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

function reroll() {
    if(this.id == 'atkDie' && atkRRVal.innerText > 0) {
        this.replaceWith(atkRoll())
        atkRRVal.innerText--
    } else if(this.id == 'defDie' && defRRVal.innerText > 0){
        this.replaceWith(defRoll())
        defRRVal.innerText--
    }
}
