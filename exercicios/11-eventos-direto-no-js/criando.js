


let button = document.querySelector('#register-button')


function evento(ev){
    const sectionElement = ev.currentTarget.parentNode 
    const name = sectionElement.children.username.value
    const passoword = sectionElement.children.password.value
    const confirmPassoword = sectionElement.children.passwordConfirmation.value
   alert('elemento criado')
 
     /*if(passoword === confirmPassoword){
        alert('as senhas são indenticas')
     }else{
        alert('error -- senha invalida...')
     }*/
}



button.addEventListener('click', evento)


function remover(){
    button.removeEventListener('click', evento)
    alert('element removed')
}



button.addEventListener('mouseover', function(ev){
    console.log(ev.currentTarget.parentNode)
})