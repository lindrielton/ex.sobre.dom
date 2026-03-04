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


document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    // cookiesName=value; expires=UtCStringDate; path=/
    const cookie = 'info :' + input.value + ';'
    const expiration = 'expires=' + new Date(2026,5,3) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})


document.getElementById('cookie2Btn').addEventListener('click', function(){
     const input = document.getElementById('cookie2')
    // cookiesName=value; expires=UtCStringDate; path=/
    const cookie = 'text :' + input.value + ';'
    const expiration = 'expires=' + new Date(2026,2,5) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})