

let Tarefa = document.getElementById('tarefa')
let btn = document.getElementById('action')
let ul = document.getElementById('lista')


let newRow = 0

btn.addEventListener('click', function(){
    let li = document.createElement('li')

    let btn = document.createElement('button')
    btn.classList = 'newBtn'
    btn.innerText = 'X' 
    
                                
    let listaid = newRow
    newRow++
    li.innerText = Tarefa.value
    li.id = 'id'+ listaid

    li.appendChild(btn)
    ul.append(li)
    Tarefa.value = ''




    let lista = document.querySelectorAll('#id'+ listaid)

        lista.forEach(function(lista){
             lista.addEventListener('click', function(ev){
                  let listli = ev.currentTarget
                   listli.classList.add('stylo')
                })
        })




    let btnRemove = document.querySelectorAll('.newBtn')
        btnRemove.forEach(function(btn){
          btn.addEventListener('click', function(){
             let lista = btn.parentNode
              li.remove(lista)
          })
        })


  
})










     