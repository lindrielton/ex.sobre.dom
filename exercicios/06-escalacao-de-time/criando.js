function addplayer(){
    const position = document.getElementById('position').value
    const  name = document.getElementById('name').value
    const number = document.getElementById('number').value

   const confirme = confirm('Escalar ' + name  + ' como ' + position + '?' )
   
   if(confirme){
        let teamelist = document.getElementById('teameList') 
        const playerItem = document.createElement('li')  
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ': ' + name + '(' + number + ')'
        teamelist.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
        
   }
}


function removePlayer(){
    const number = document.getElementById('numberToremove').value
    const playerToremove = document.getElementById('player-' + number)

const confirmation = confirm('Remover o jogador  ' + playerToremove.innerText + '?')

if(confirmation){
    document.getElementById('teameList').removeChild(playerToremove)
    // ou podemos remover diretament 
    // playerToremove.remove() assim ele remove o no direto
    document.getElementById('numberToremove').value = ''
}

}