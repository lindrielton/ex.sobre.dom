

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

    Concluidas.id = 'concluidas'
    Concluidas.innerText = 'Concluidas'


let contTarefa = 0;
let contMakd = 0;
let newRow = 0;

btn.addEventListener('click', function(){
    let li = document.createElement('li')
    contTarefa++
   

    let btn = document.createElement('button')
    btn.classList = 'newBtn'
    btn.innerText = 'delet' 
    
                                
    let listaid = newRow
    newRow++
    li.innerText = Tarefa.value + '-'
    li.id = 'id'+ listaid
    
   
    li.appendChild(btn)
    ul.append(li, btnTodas, Pendentes, Concluidas)

   let mapa = []
   mapa.push(li.innerText)
   mapa.map(function(list){
       let elementos = list
       console.log({elementos})

       sessionStorage.setItem('lista', elementos)
   })
  
   
    

   
    let lista = document.querySelectorAll('#id'+ listaid)

        lista.forEach(function(lista){
             lista.addEventListener('click', function(ev){
                  let listli = ev.currentTarget
                   listli.classList.add('stylo')
                   contMakd++
                   contP.innerText = `tarefas: ${contTarefa} | concluidas: ${contMakd}`
                   console.log(listli)
                 
                   
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



  btnTodas.addEventListener('click', function(ev){
   let main = document.querySelector('.main')
   main.innerText = 'todos os Eventos '
     
        main.appendChild(ul)


  })


  document.getElementById('pendent').addEventListener('click', function(){
     let main = document.querySelector(".main")
     

      lista.forEach(function(item){
        if(!item.classList.contains('stylo')){
            let p = document.createElement('p')
            p.innerText += 'pendentes -' + item.textContent
            console.log(p)
            main.appendChild(p)
         }
       })
    })



  
  document.getElementById('concluidas').addEventListener('click', function(){
     let main = document.querySelector(".main")
     

      lista.forEach(function(item){
        if(item.classList.contains('stylo')){
            let p = document.createElement('p')
            p.innerText += 'Concluidas -' + item.textContent
            console.log(p)
            main.appendChild(p)
         }
       })
    })

  Tarefa.value = ''
  
})










     