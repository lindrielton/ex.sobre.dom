
function register(elemeent){
    const nome = elemeent.children.username.value 
    const passoword1 = elemeent.children.password.value
    const  passowordConfirm = elemeent.children.passwordConfirmation.value

    if(passoword1 == passowordConfirm){
      alert('a senha :' + passoword1 + 'é igual a senha' + passowordConfirm )
    }else{
      alert('as senhas não são identicas')
    }
}

