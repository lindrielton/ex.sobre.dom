


function addContact(){
    const contact = document.querySelector('#contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'contato'


    const ul = document.createElement('ul')


    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
     ul.appendChild(nameLi)
     ul.appendChild(document.createElement('br'))



    const foneLi = document.createElement('li')
    foneLi.innerText = 'Telefone: '
    const foneInput = document.createElement('input')
    foneInput.type = 'text'
    foneInput.name = 'phone'

     foneLi.appendChild(foneInput)
     ul.appendChild(foneLi)
     ul.appendChild(document.createElement('br'))




     const addresLi = document.createElement('li')
     addresLi.innerHTML = '<label for="addres">Endereço: </label>'
     const addresInput = document.createElement('input')
     addresInput.type = 'text'
     addresInput.name = 'addres'
     addresInput.id = 'addres'
     addresLi.appendChild(addresInput)
     ul.appendChild(addresLi)
     ul.appendChild(document.createElement('br'))

  

     contact.append(h3, ul)



    
}



function removeContact(){
    const contact  = document.querySelector('#contacts-list')


    const title = document.getElementsByTagName('h3')
    const contactes = document.getElementsByTagName('ul')




    contact.removeChild(title[title.length - 1])
    contact.removeChild(contactes[contactes.length - 1])
}