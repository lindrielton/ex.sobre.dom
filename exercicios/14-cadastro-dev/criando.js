
let novoForme = document.querySelector('button[type="submit"]');


novoForme.addEventListener('click', function(ev){
    ev.preventDefault()

   let newtecnologia = document.createElement('label')
    newtecnologia.type = 'texto'
    newtecnologia.innerText = 'Nome da tecnologia: '
    let input = document.createElement('input')
    input.type = 'texto'
    input.name = 'tecnologia'
    input.style.margin = '1rem'
    newtecnologia.appendChild(input)
    newtecnologia.appendChild(document.createElement('br'))

    let strong = document.createElement('strong')
    strong.innerHTML = '<p>Marque o tempo de experiencia : </p> </br>'


    let options = document.createElement('label')
    options.type = 'texto'
    options.class = 'option'
    options.innerText = '0-2 anos:'
    let radio = document.createElement('input')
    radio.type = 'radio'
    options.appendChild(radio)

    let option2 = document.createElement('label')
    option2.type = 'texto'
    option2.class = 'option'
    option2.innerText = ' 3-4 anos: '
    let radio2 = document.createElement('input')
    radio2.type = 'radio'
    option2.appendChild(radio2)


    let option3 = document.createElement('label')
    option3.type = 'texto'
    option3.class = 'option'
    option3.innerText = ' 5 ou mais anos:'
    let radio3 =  document.createElement('input')
    radio3.type = 'radio'
    option3.appendChild(radio3)

    let remove = document.createElement('button')
    remove.type =  'texto'
    remove.id = 'btnRemove'
    remove.innerHTML = 'remover linha'
    remove.style = ''

    let addElement = document.createElement('button')
    addElement.type =  'texto'
    addElement.id = 'addElement'
    addElement.innerText = 'Adicionar dv'
    



    let campo = document.querySelector('#campo')
    campo.append(newtecnologia, strong, options, option2 , option3, remove , addElement)



    remove.addEventListener('click', function(ev){
        ev.preventDefault()

        document.querySelector('#Nome').value = ''
        document.querySelector('input[type="texto"]').value = ''
      let inputs = document.querySelector('input[type="radio"]:checked')
      inputs.checked =  false
  
        
    })


    addElement.addEventListener('click', function(ev){
        ev.preventDefault()
      let nome =   document.querySelector('#Nome').value
      let tecnologia = document.querySelector('input[type="texto"]').value
      let inputsMarqued = document.querySelector('input[type="radio"]:checked')
      let elements = ev.currentTarget.parentNode 

      let dev = []

      confirm(`você quer inscrever o dev com o nome de (${nome})`)

      if(confirm){

        // dev.push('Candidato :' + nome + '-' + tecnologia + '-' + '-' + inputs)
        let candidatos = document.querySelector('#candidatos')
         candidatos.append(nome, ' ' , tecnologia, '  ' ,inputsMarqued,)
        
 
      
        

      }


    })





})




