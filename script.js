// function corAleatoria() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     let corRGB = `rgb(${r},${g},${b})`;
//     console.log(corRGB);
// }
// captura dos botões
const buttonInputBoard = document.getElementById('board-size');
const buttonVQV = document.getElementById('generate-board');
const buttonLimpar = document.getElementById('clear-board');
// botão cor

const getButtonCorAleatoria = document.getElementById('button-random-color');
getButtonCorAleatoria.addEventListener('click', () => {
    const getTrocaCorClass2 = document.querySelector('.secondColor');
    const getTrocaCorClass3 = document.querySelector('.thirdColor');
    const getTrocaCorClass4 = document.querySelector('.fourtColor');
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let corRGB = `rgb(${r},${g},${b})`;
    console.log(corRGB);
    getTrocaCorClass2.style.background = corRGB;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    corRGB = `rgb(${r},${g},${b})`;
    getTrocaCorClass3.style.background = corRGB;
    console.log(corRGB);
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    corRGB = `rgb(${r},${g},${b})`;
    getTrocaCorClass4.style.background = corRGB;
    console.log(corRGB);
});
// Botão apagar
// console.log(getButtonCorAleatoria);
// console.log(getTrocaCorClass);
