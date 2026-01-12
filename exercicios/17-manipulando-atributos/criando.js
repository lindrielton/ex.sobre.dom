
const input = document.getElementById('input')

document.getElementById('value').addEventListener('click',function(){
      input.value = 'olá , mundo!' ;


      console.log(input.value)
      console.log(input.getAttribute('value'))
})




document.getElementById('type').addEventListener('click', function (){
      //input.type = input.type !== 'radio' ? 'radio' : 'text'

      input.setAttribute('type', 'radio') // diferente do if ternario ele só faz a mudança mais não alterna
      
})



document.getElementById('placeholder').addEventListener('click', function(){
      input.placeholder = 'digite algo'
})



document.getElementById('disable').addEventListener('click', function(){
       input.setAttribute('disabled', !input.disabled)

 })



 document.getElementById('data').addEventListener('click', function () {
      const data = input.dataset.somethingElse
      console.log('o valor do atributo data-something-else é: ' + data)
      input.dataset.somethingElse = 'outro valor'
      console.log('o valor do atributo data-something-else é: ' + input.dataset.somethingElse )

      // para referenciar as kebab-caseno html , se coloca as palavras com camelcase no js
 })

 