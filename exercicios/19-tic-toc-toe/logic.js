const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}


function initializeGame(){
    vBoard = [['','',''], ['', ' ', ' '], ['', '', '']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML =  'vez de: <span id="turnPlayer"></span>'
    updateTitle()
    boardRegions.forEach(function (element){
        element.classList.remove('win')
        element.innerText = ''
        element.classList.add('cursor-pointer')
        element.addEventListener('click', handleBoaerdClick)
    })

}



function getWinRegions(){
    const winRegions = []
    if(vBoard[0][0] && vBoard[0][1] === vBoard[0][0] && vBoard[0][0] == vBoard[0][2]){
        winRegions.push('0.0','0.1','0.2')
    }
     if(vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] == vBoard[1][2]){
        winRegions.push('1.0','1.1','1.2')
    }
     if(vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] == vBoard[2][2]){
        winRegions.push('2.0','2.1','2.2')
    }
     if(vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] == vBoard[2][0]){
        winRegions.push('0.0','1.0','2.0')
    }
     if(vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] == vBoard[2][1]){
        winRegions.push('0.1','1.1','2.1')
    }
     if(vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] == vBoard[2][2]){
        winRegions.push('0.2','1.2', '2.2')
    }
     if(vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] == vBoard[2][2]){
        winRegions.push('0.0','1.1','2.2')
    }
     if(vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] == vBoard[2][2]){
        winRegions.push('0.2','1.1','2.2')
    }


    return winRegions

}


function desableRegio(element){
    element.classList.remove('cursor-pointer') // removendo a classe do elemento
    element.removeEventListener('click', handleBoaerdClick)
   
}



function handlewin(regions){
      regions.forEach(function(region){
         document.querySelector('[data-region="'+ region +'"]').classList.add('win')
      })

      const playName = document.getElementById(turnPlayer).value
      document.querySelector('h2').innerHTML = playName + 'venceu!'
}


function handleBoaerdClick(ev){
    const span = ev.currentTarget
    const region = span.dataset.region
    const rowColumPair = region.split('.')// divide e trasforma um caracteri em um array
    const row = rowColumPair[0]
    const colom = rowColumPair[1]

    if(turnPlayer === 'player1'){
        span.innerText = 'x'
        vBoard[row][colom] = 'x'
    }else{
        span.innerText = 'O'
        vBoard[row][colom]
    }

    console.clear()// linpa o console
    console.table(vBoard)// pega um dado e mostra ele em forma de tabela se for possivel
    desableRegio(span)

    const winRegions = getWinRegions()
    if(winRegions.length > 0){
        handlewin(winRegions)
    }else if(vBoard.flat().includes('')){// flat achat o array bidimencional em um unico array
          turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
          updateTitle()
    }else{
        document.querySelector('h2').innerHTML = 'Empate!'
    }
}


document.getElementById('start').addEventListener('click', initializeGame)

