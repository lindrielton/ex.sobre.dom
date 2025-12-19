
const form = document.querySelector('#orderForm')


form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    //pegando checkboks marcados

    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item) {
        salad += ' - ' + item.value +  '\n'
    });


    console.log({
        name,
         address,
          breadType,
           main,
            observations ,
             salad
    })


    alert("Pedido realizado..." +
        '\nNome '  + name + '\n' +
        '\nEndereço ' + address + '\n' +
        '\nTipo '  + breadType  + '\n ' +
        '\nRecheio ' + main + '\n' +
        '\nObiservação ' + observations + '\n'
    )
})  