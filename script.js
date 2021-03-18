const div = document.querySelectorAll('[data-jogo="velha"] div')
const arrayDiv = Array.from(div)
const buttonStart = document.querySelector('.button-start')
const buttonRestart = document.querySelector('.button-restart')
const spanTexto = document.querySelector('.span-texto')
const jogador1 = document.querySelector('.jogador1')
const jogador2 = document.querySelector('.jogador2')


let contador = 0
let arrayJogador = []
let arrayEmpate = []

// Verifica qual jogador faz a jogada
function verificaJogador(item) {
    if(contador % 2 == 0) {
        insereItemO(item)
        contador++
        item.target.classList.add('ativo')
    }
    else {
        insereItemX(item)
        contador++
        item.target.classList.add('ativo')
    }
}


// Insere a letra na velha "X"
function insereItemX(item) {
    item.target.innerHTML = 'X'
    arrayEmpate.push(item.target.innerHTML)
    spanTexto.innerHTML = `${arrayJogador[0]} é a sua vez!`
    verificaVelhaX()
}

// Insere a letra na velha "O"
function insereItemO(item) {
    item.target.innerHTML = 'O'
    arrayEmpate.push(item.target.innerHTML)
    spanTexto.innerHTML = `${arrayJogador[1]} é a sua vez!`
    verificaVelhaO()
}

// Verifica se deu velha "O"
function verificaVelhaO() {
    if((arrayDiv[0].innerHTML === 'O' && arrayDiv[1].innerHTML === 'O' && arrayDiv[2].innerHTML === 'O') || (arrayDiv[0].innerHTML === 'O' && arrayDiv[3].innerHTML === 'O' && arrayDiv[6].innerHTML === 'O') || (arrayDiv[0].innerHTML === 'O' && arrayDiv[4].innerHTML === 'O' && arrayDiv[8].innerHTML === 'O') || (arrayDiv[2].innerHTML === 'O' && arrayDiv[4].innerHTML === 'O' && arrayDiv[6].innerHTML === 'O') || (arrayDiv[3].innerHTML === 'O' && arrayDiv[4].innerHTML === 'O' && arrayDiv[5].innerHTML === 'O') || (arrayDiv[6].innerHTML === 'O' && arrayDiv[7].innerHTML === 'O' && arrayDiv[8].innerHTML === 'O') || (arrayDiv[1].innerHTML === 'O' && arrayDiv[4].innerHTML === 'O' && arrayDiv[7].innerHTML === 'O') || (arrayDiv[2].innerHTML === 'O' && arrayDiv[5].innerHTML === 'O' && arrayDiv[8].innerHTML === 'O')) {
        spanTexto.innerHTML = `${arrayJogador[0]} você venceu!`
    }
    else {
        verificaEmpate()
    }
}

// Verifica se deu velha "X"
function verificaVelhaX() {
    if((arrayDiv[0].innerHTML === 'X' && arrayDiv[1].innerHTML === 'X' && arrayDiv[2].innerHTML === 'X') || (arrayDiv[0].innerHTML === 'X' && arrayDiv[3].innerHTML === 'X' && arrayDiv[6].innerHTML === 'X') || (arrayDiv[0].innerHTML === 'X' && arrayDiv[4].innerHTML === 'X' && arrayDiv[8].innerHTML === 'X') || (arrayDiv[2].innerHTML === 'X' && arrayDiv[4].innerHTML === 'X' && arrayDiv[6].innerHTML === 'X') || (arrayDiv[3].innerHTML === 'X' && arrayDiv[4].innerHTML === 'X' && arrayDiv[5].innerHTML === 'X') || (arrayDiv[6].innerHTML === 'X' && arrayDiv[7].innerHTML === 'X' && arrayDiv[8].innerHTML === 'X') || (arrayDiv[1].innerHTML === 'X' && arrayDiv[4].innerHTML === 'X' && arrayDiv[7].innerHTML === 'X') || (arrayDiv[2].innerHTML === 'X' && arrayDiv[5].innerHTML === 'X' && arrayDiv[8].innerHTML === 'X')) {
        spanTexto.innerHTML = `${arrayJogador[1]} você venceu!`
    }
    else {
        verificaEmpate()
    }
}

function verificaEmpate() {
    if((arrayDiv[0].innerHTML != '') && (arrayDiv[1].innerHTML != '') && (arrayDiv[2].innerHTML != '') && (arrayDiv[3].innerHTML != '') && (arrayDiv[4].innerHTML != '') && (arrayDiv[5].innerHTML != '') && (arrayDiv[6].innerHTML != '') && (arrayDiv[7].innerHTML != '') && (arrayDiv[8].innerHTML != '')) {
        spanTexto.innerHTML = 'Empate, aperte o botão Reset!'
    }
}

// Inicio do game
function iniciaGame() {
    if(jogador1.value != '' && jogador2.value != '') {
        div.forEach((item) => {
            item.addEventListener('click', verificaJogador)
        })
        arrayJogador.push(jogador1.value)
        arrayJogador.push(jogador2.value)
        spanTexto.innerHTML = `Jogo iniciado!<br>${arrayJogador[0]} é a sua vez! você é: "O"<br>${arrayJogador[1]} é: "X"`
    }
    else {
        alert('Digite os nomes:')
    }
}

function resetGame() {
    arrayDiv.forEach((item) => {
        item.innerHTML = ''
        item.classList.remove('ativo')
    })
    spanTexto.innerHTML = ''
    jogador1.value = ''
    jogador2.value = ''
    contador = 0
    arrayJogador.splice(0, 2)
}

buttonStart.addEventListener('click', iniciaGame)

buttonRestart.addEventListener('click', resetGame)