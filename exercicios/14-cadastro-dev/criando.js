
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
    strong.innerText = 'Marque o seu tempo de experiencia: '

    let options = document.createElement('label')
    options.type = 'texto'
    options.innerText = '0-2 anos:'
    let radio = document.createElement('input')
    radio.type = 'radio'
    options.appendChild(radio)

    let option2 = document.createElement('label')
    option2.type = 'texto'
    option2.innerText = ' 3-4 anos: '
    let radio2 = document.createElement('input')
    radio2.type = 'radio'
    option2.appendChild(radio2)


    let option3 = document.createElement('label')
    option3.type = 'texto'
    option3.innerText = ' 5 ou mais anos:'
    let radio3 =  document.createElement('input')
    radio3.type = 'radio'
    option3.appendChild(radio3)

    let remove = document.createElement('button')
    remove.type =  'texto'
    remove.id = 'btnRemove'
    remove.innerText = 'remover linha'
    



    let campo = document.querySelector('#campo')
    campo.append(newtecnologia, options, option2 , option3, remove)



    remove.addEventListener('click', function(ev){
        ev.preventDefault()

        document.querySelector('#Nome').value = ''
        input.value = ''
        radio.value = ''
        radio2.value = ''
        radio3.value =  ''


        
    })



})




