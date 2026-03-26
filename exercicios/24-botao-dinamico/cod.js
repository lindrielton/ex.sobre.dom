const alment = document.querySelector('#alment')
const subtrair = document.querySelector('#diminuir')
const reset = document.querySelector('#reset')
const elemento = document.querySelector('#elemento')

let cont = 0
alment.addEventListener('click', function(){
     cont+=1
     elemento.textContent = cont
     if(elemento.textContent > 0){
        elemento.classList = 'btnpositvo'
     }     
     
})


subtrair.addEventListener('click', function(ev){
     cont-=1
     elemento.textContent = cont
     if(elemento.textContent < 0){
        elemento.classList = 'btnnegativo'
     }
          
     
    
})


reset.addEventListener('click', function(ev){
    
     elemento.textContent = 0
     elemento.classList = ' '
     
})