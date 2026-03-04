document.getElementById("sessionBtn").addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})


document.getElementById('readSesssion').addEventListener('click', function(){
    const valor = sessionStorage.getItem('info')// getItem retorna o valor da chave
    alert(`A informação é : ${valor}`)
})

// usando local storage

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById("local")
    localStorage.setItem('local', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const valorTexto = localStorage.getItem('local')// getItem retorna o valor 
    alert(`A informação é : ${valorTexto}`)
})


//trabalhando com cooks


