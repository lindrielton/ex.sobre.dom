

const buttonColrs = document.getElementById('button')
let buttons = document.querySelectorAll('button')
let ul = document.getElementById('birthday')

let cont = 0



buttonColrs.addEventListener('click', function(){
 buttons.forEach(function(element){
       
      let rowid = 'element' + cont
      cont++
      element.classList.toggle('black')  
      element.id = rowid
      
})


 buttons.forEach( (element) => {
     if(element.id === 'element1'){
          const element =  document.querySelector('#element1')
          element.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Massa é cobertura de chocolate tamanhos: \n Pequeno- 50R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ul.append(li)
          })
          
     }
},1)



 buttons.forEach( (element) => {
     if(element.id === 'element2'){
          const element2 =  document.querySelector('#element2')
          element2.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Massa é cobertura de Ninho tamanhos: \n Pequeno- 60R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ul.append(li)
          })
          
     }
},1)





 buttons.forEach( (element) => {
     if(element.id === 'element3'){
          const element3 =  document.querySelector('#element3')
          element3.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Massa é cobertura de Ninho com recheio de chocolate \n tamanhos: \n Pequeno- 60R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ul.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element4'){
          const element4 =  document.querySelector('#element4')
          element4.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Massa é cobertura de manteiga de cacal tamanhos: \n Pequeno- 65R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ul.append(li)
          })
          
     }
},1)

 buttons.forEach( (element) => {
     if(element.id === 'element5'){
          const element5 =  document.querySelector('#element5')
          element5.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('cobertura de chantilly com recheio de morango: \n Pequeno- 60R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ul.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element6'){
          const element6 =  document.querySelector('#element6')
          element6.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Massa é cobertura de brigadeiro: \n Pequeno- 60R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ul.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element7'){
          const element7 =  document.querySelector('#element7')
          let ulCasamento = document.querySelector('#marrige')
          element7.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Massa Bollo tradicional com nozes: \n Pequeno- 60R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ulCasamento.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element8'){
          const element8 =  document.querySelector('#element8')
           let ulCasamento = document.querySelector('#marrige')
          element8.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Massa Tradicional com recheio de Doce de leite: \n Pequeno- 60R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ulCasamento.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element9'){
          const element9 =  document.querySelector('#element9')
           let ulCasamento = document.querySelector('#marrige')
          element9.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Massa Trdicional com recheio de morando é comertura de Ninho: \n Pequeno- 60R$ Medio- 80R$ grande - 100r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ulCasamento.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element10'){
          const element10 =  document.querySelector('#element10')
           let ulTortas = document.querySelector('#pudding')
          element10.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  (': Pequeno- 69R$ - Medio- 86R$  -grande - 120r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ulTortas.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element11'){
          const element11 =  document.querySelector('#element11')
           let ulTortas = document.querySelector('#pudding')
          element11.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  (': Pequeno- 69R$ - Medio- 86R$  -grande - 120r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ulTortas.append(li)
          })
          
     }
},1)

 buttons.forEach( (element) => {
     if(element.id === 'element12'){
          const element12 =  document.querySelector('#element12')
           let ulTortas = document.querySelector('#pudding')
          element12.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  (': Pequeno- 69R$ - Medio- 86R$  -grande - 120r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ulTortas.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element13'){
          const element13 =  document.querySelector('#element13')
           let ulTortas = document.querySelector('#pudding')
          element13.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  (': Pequeno- 69R$ - Medio- 86R$  -grande - 120r$' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ulTortas.append(li)
          })
          
     }
},1)


 buttons.forEach( (element) => {
     if(element.id === 'element14'){
          const element14 =  document.querySelector('#element14')
           let ulTortas = document.querySelector('#savory')
          element14.addEventListener('click', function(){
               let li = document.createElement('li')
               li.innerText =  ('Todos por 2.50 A unidade' )
               li.classList = 'black'
               li.style.margin = ".3rem"
               li.style.padding = '.1rem'
               li.style.width = '18.75rem'
               ulTortas.append(li)
          })
          
     }
},1)



})



let PedidoAnotado = document.querySelector('#fazerPedido')
let listaCont = 0
PedidoAnotado.addEventListener("click", function(){
     listaCont ++
     const lista = document.querySelector('#anotarPedido')
     localStorage.setItem('lista', lista.value)

     const respo = localStorage.getItem('lista')
 
     alert(`seu pedido de numero ${listaCont} são ${respo}`)
     lista.innerText = ''
})




// const btn = document.querySelector('#element1')
//console.log(btn)


