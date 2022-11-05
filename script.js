// function corAleatoria() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     let corRGB = `rgb(${r},${g},${b})`;
//     console.log(corRGB);
// }
// captura dos botões
const getButtonInputBoard = document.getElementById('board-size');
const getButtonVQV = document.getElementById('generate-board');
console.log(getButtonInputBoard);
getButtonVQV.addEventListener('click', () => {
    let N = getButtonInputBoard.value;
    if (N == '') {
        alert('Board Inválido!');
    }
    if (N > 50) {
        N = 50
    }
    if (N < 5) {
        N = 5
    }
    console.log(N);
});

// botão cor
const getButtonCorAleatoria = document.getElementById('button-random-color');
const getTrocaCorClass2 = document.querySelector('.secondColor');
const getTrocaCorClass3 = document.querySelector('.thirdColor');
const getTrocaCorClass4 = document.querySelector('.fourtColor');
getButtonCorAleatoria.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let corRGB = `rgb(${r},${g},${b})`;
    // console.log(corRGB);
    getTrocaCorClass2.style.background = corRGB;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    corRGB = `rgb(${r},${g},${b})`;
    getTrocaCorClass3.style.background = corRGB;
    // console.log(corRGB);
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    corRGB = `rgb(${r},${g},${b})`;
    getTrocaCorClass4.style.background = corRGB;
    // console.log(corRGB);
});
// Botão apagar
const getButtonLimpar = document.getElementById('clear-board');
const getPixelClass = document.querySelectorAll('.pixel');
const corApagar = 'rgb(255,255,255)'
getButtonLimpar.addEventListener('click', () => {
    for (index = 0; index < getPixelClass.length; index += 1) {
        // if (getPixelClass[index].style.background !== 'rgb(255,255,255)'){
        getPixelClass[index].style.background = corApagar;
        // }
    }
});
