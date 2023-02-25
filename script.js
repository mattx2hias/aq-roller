

const atkSlider = document.getElementById('atk-slider')
const defSlider = document.getElementById('def-slider')
const atkVal = document.getElementById('atk-val')
const defVal = document.getElementById('def-val')

atkVal.innerHTML = atkSlider.value
defVal.innerHTML = defSlider.value

atkSlider.oninput = () => {
    atkVal.innerText = atkSlider.value
}

defSlider.oninput = () => {
    defVal.innerHTML = defSlider.value
}

let dieArray = [];
let dieArrayImg = []

/*
2 Side Bows - 33.33%
3 Side Swords - 50%
1 Side Critical - 16.66%
*/
const atkDieList = document.getElementById('atk-die-list')
function attack() {
    let child = atkDieList.lastElementChild
    while(child) {
        atkDieList.removeChild(child)
        child = atkDieList.lastElementChild
    }
    let img = document.createElement('img')
    for(let i = 0; i < atkSlider.value; i++) {
        let button = document.createElement('button')
        dieArrayImg[i] = document.createElement('img')
        switch(Math.floor(Math.random()*6)+1) {
            case 1 || 2: 
            dieArray[i] = 'bow'; 
            dieArrayImg[i].src = '.\\images\\range.png'
            break;
            case 3 || 4 || 5: 
            dieArray[i] = 'sword'; 
            dieArrayImg[i].src = '.\\images\\sword.png'
            break;
            case 6: 
            dieArray[i] = 'critical'; 
            dieArrayImg[i].src = '.\\images\\crit.png'
            break;
        }
        button.appendChild(dieArrayImg[i])
        atkDieList.appendChild(button)
        
    }
    console.log(dieArray)
}
/*
4 Sides Blank - 66.66%
1 Side Shield - 16.66%
1 Side Critical - 16.66%
*/
function defend() {
    for(let i = 0; i < defDice; i++) {
        console.log(Math.getRandomInt(defDice));
    }
}
