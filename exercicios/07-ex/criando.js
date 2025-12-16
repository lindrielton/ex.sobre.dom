let inscrever = document.querySelector('#inscrever')


inscrever.addEventListener('click', function(){
    let nome = document.querySelector('#nome').value
    let list = document.querySelector('#lista')
    let li = document.createElement('li')

   li.id = 'jogadores'
   li.innerText = nome
   list.appendChild(li)
   document.querySelector('#nome').value = ''

})

let remover = document.querySelector('#remover')
remover.addEventListener('click', function(){
     
      let list = document.querySelector('#lista')
      let li = document.querySelector('#jogadores')
  
      li.remove()
      
       
})


