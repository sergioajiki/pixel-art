function guardaCor() {
  const matrizDeCor = document.getElementsByClassName('pixel');
  const guardaMatrizDeCor = [];
  for (let index = 0; index < matrizDeCor.length; index += 1) {
    guardaMatrizDeCor.push(matrizDeCor[index].style.backgroundColor);
    // console.log(guardaMatrizDeCor);
  }
  // console.log(guardaMatrizDeCor);
  localStorage.setItem('pixelBoard', JSON.stringify(guardaMatrizDeCor));
}

function boardInicio() {
  const mainBoard = document.querySelector('#pixel-board');
  const N = JSON.parse(localStorage.getItem('boardSize'));
  for (let i = 0; i < N; i += 1) {
    for (let index = 0; index < N; index += 1) {
      const pixelDoQuadro = document.createElement('div');
      pixelDoQuadro.className = 'pixel';
      mainBoard.appendChild(pixelDoQuadro);
    }
    mainBoard.appendChild(document.createElement('br'));
  }
  const boardRecovery = document.querySelectorAll('.pixel');
  const desenhoAnterior = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let index = 0; index < boardRecovery.length; index += 1) {
    boardRecovery[index].style.backgroundColor = desenhoAnterior[index];
  }
  guardaCor();
  geral();
  console.log(desenhoAnterior);
  console.log(boardRecovery);
}
boardInicio();
window.onload = () => {
  if (localStorage.getItem('colorPalette') === null) {
    const guardaCor1 = document.querySelector('.firstColor').style.backgroundColor;
    const guardaCor2 = document.querySelector('.secondColor').style.backgroundColor;
    const guardaCor3 = document.querySelector('.thirdColor').style.backgroundColor;
    const guardaCor4 = document.querySelector('.fourtColor').style.backgroundColor;
  } else {
    const recoveryColor = JSON.parse(localStorage.getItem('colorPalette'));
    const corInicial1 = document.querySelector('.firstColor');
    corInicial1.style.backgroundColor = recoveryColor.guardaCor1;
    const corInicial2 = document.querySelector('.secondColor');
    corInicial2.style.backgroundColor = recoveryColor.guardaCor2;
    const corInicial3 = document.querySelector('.thirdColor');
    corInicial3.style.backgroundColor = recoveryColor.guardaCor3;
    const corInicial4 = document.querySelector('.fourtColor');
    corInicial4.style.backgroundColor = recoveryColor.guardaCor4;
  }
  if (localStorage.getItem('boardSize') === null) {
    const N = 5;
    localStorage.setItem('boardSize', JSON.stringify(N));
    boardInicio();
    geral();
    guardaCor();
    return;
  }
  if (localStorage.getItem('pixelBoard') === null) {
    const guardaMatrizDeCor = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    boardInicio();
    geral();
    guardaCor();
    return;
  }
};
// captura dos botões
// botão input e VQV
const getButtonInputBoard = document.getElementById('board-size');
const getButtonVQV = document.getElementById('generate-board');
getButtonVQV.addEventListener('click', () => {
  const apagaQuadro = document.getElementById('pixel-board');
  apagaQuadro.innerHTML = '';
  let N = getButtonInputBoard.value;
  if (N === '') {
    alert('Board Inválido!');
  }
  if (N > 50) {
    N = 50;
  }
  if (N < 5) {
    N = 5;
  }

  // criar a pixel board
  const coluna = N;
  const linha = N;
  const mainBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < coluna; i += 1) {
    for (let index = 0; index < linha; index += 1) {
      const pixelDoQuadro = document.createElement('div');
      pixelDoQuadro.className = 'pixel';
      pixelDoQuadro.addEventListener('click', () => {
        const pincel = document.querySelector('.selected');
        const corDoPincel = pincel.style.backgroundColor;
        pixelDoQuadro.style.backgroundColor = corDoPincel;
      });
      mainBoard.appendChild(pixelDoQuadro);
    }
    mainBoard.appendChild(document.createElement('br'));
  }
  localStorage.setItem('boardSize', JSON.stringify(N));
  geral();
  guardaCor();
});

// botão cor aleatoria
const getButtonCorAleatoria = document.getElementById('button-random-color');
const getTrocaCorClass2 = document.querySelector('.secondColor');
const getTrocaCorClass3 = document.querySelector('.thirdColor');
const getTrocaCorClass4 = document.querySelector('.fourtColor');
getButtonCorAleatoria.addEventListener('click', () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let corRGB = `rgb(${r},${g},${b})`;
  getTrocaCorClass2.style.backgroundColor = corRGB;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  corRGB = `rgb(${r},${g},${b})`;
  getTrocaCorClass3.style.backgroundColor = corRGB;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  corRGB = `rgb(${r},${g},${b})`;
  getTrocaCorClass4.style.backgroundColor = corRGB;

  // manter a cor ao recarregar
  const guardaCor1 = document.querySelector('.firstColor').style.backgroundColor;
  const guardaCor2 = document.querySelector('.secondColor').style.backgroundColor;
  const guardaCor3 = document.querySelector('.thirdColor').style.backgroundColor;
  const guardaCor4 = document.querySelector('.fourtColor').style.backgroundColor;

  const corAnterior = {
    guardaCor1,
    guardaCor2,
    guardaCor3,
    guardaCor4,
  };
  localStorage.setItem('colorPalette', JSON.stringify(corAnterior));
});

function geral() {
  // Mudar classe selected
  const selecionaFirstColor = document.querySelectorAll('.color')[0];
  const selecionaSecondColor = document.querySelectorAll('.color')[1];
  const selecionaThirdColor = document.querySelectorAll('.color')[2];
  const selecionaFourtColor = document.querySelectorAll('.color')[3];

  // Mudar classe selected
  const corSelected = document.querySelectorAll('.color');
  selecionaFirstColor.addEventListener('click', () => {
    for (let index = 0; index < corSelected.length; index += 1) {
      corSelected[index].classList.remove('selected');
    }
    selecionaFirstColor.classList.add('selected');
  });
  selecionaSecondColor.addEventListener('click', () => {
    for (let index = 0; index < corSelected.length; index += 1) {
      corSelected[index].classList.remove('selected');
    }
    selecionaSecondColor.classList.add('selected');
  });
  selecionaThirdColor.addEventListener('click', () => {
    for (let index = 0; index < corSelected.length; index += 1) {
      corSelected[index].classList.remove('selected');
    }
    selecionaThirdColor.classList.add('selected');
  });
  selecionaFourtColor.addEventListener('click', () => {
    for (let index = 0; index < corSelected.length; index += 1) {
      corSelected[index].classList.remove('selected');
    }
    selecionaFourtColor.classList.add('selected');
  });
  // pintar quadro

  const getPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    const selectPixel = document.getElementsByClassName('pixel');
    selectPixel[index].addEventListener('click', () => {
      const pincel = document.querySelector('.selected');
      const corDoPincel = pincel.style.backgroundColor;
      selectPixel[index].style.backgroundColor = corDoPincel;
      guardaCor();
    });

    // Botão apagar
    const getButtonLimpar = document.getElementById('clear-board');
    const getPixelClass = document.querySelectorAll('.pixel');
    const corApagar = 'rgb(255,255,255)';
    getButtonLimpar.addEventListener('click', () => {
      for (index = 0; index < getPixelClass.length; index += 1) {
        // if (getPixelClass[index].style.background !== 'rgb(255,255,255)'){
        getPixelClass[index].style.background = corApagar;
        // }
      }
    });
  }
  guardaCor();
}
