

let Tarefa = document.getElementById('tarefa')
let btn = document.getElementById('action')
let ul = document.getElementById('lista')
let contP = document.createElement('p')
let div = document.getElementById("cont")



   let btnTodas = document.createElement('button')
    let Pendentes = document.createElement('button')
    let Concluidas = document.createElement('button')
   
    btnTodas.id = 'todas'
    btnTodas.innerText = 'todas'

    Pendentes.id = 'pendent'
    Pendentes.innerText= 'pendentes'

    Concluidas.id = 'Concluidas'
    Concluidas.innerText = 'Concluidas'


let contTarefa = 0;
let contMakd = 0;
let newRow = 0;

btn.addEventListener('click', function(){
    let li = document.createElement('li')
    contTarefa++
   

    let btn = document.createElement('button')
    btn.classList = 'newBtn'
    btn.innerText = 'X' 
    
                                
    let listaid = newRow
    newRow++
    li.innerText = Tarefa.value
    li.id = 'id'+ listaid
    
   
    li.appendChild(btn)
    ul.append(li, btnTodas, Pendentes, Concluidas)
    Tarefa.value = ''



    let lista = document.querySelectorAll('#id'+ listaid)

        lista.forEach(function(lista){
             lista.addEventListener('click', function(ev){
                  let listli = ev.currentTarget
                   listli.classList.add('stylo')
                   contMakd++
                   contP.innerText = `tarefas: ${contTarefa} | concluidas: ${contMakd}`
                   
                   
                })
        })




    let btnRemove = document.querySelectorAll('.newBtn')
        btnRemove.forEach(function(btn){
          btn.addEventListener('click', function(){
             let lista = btn.parentNode
              li.remove(lista)
          })
        })

   

  
  contP.innerText = `tarefas: ${contTarefa} | concluidas: ${contMakd}`
  div.appendChild(contP)



  btnTodas.addEventListener('click', function(){
     let main = document.querySelector(".main")

     

  })
  
})










     