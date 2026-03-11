

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



})




// const btn = document.querySelector('#element1')
//console.log(btn)


