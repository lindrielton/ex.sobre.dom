function show(){
    let list = document.getElementById('contact-list')
    console.log(list)

    let elements = document.getElementsByTagName('li')
    console.log(elements)

    let contact = document.getElementsByClassName('contact-input')
    console.log(contact)

    let cont = document.querySelectorAll('#contact-list > li > label')
    console.log(cont)


    let contatct3 = document.getElementsByName('contact3')
    console.log(contatct3)//pega o inpute
}