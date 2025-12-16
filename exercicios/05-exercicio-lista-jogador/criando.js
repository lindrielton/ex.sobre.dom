const escalando = document.querySelector('.escalando');
const removendo = document.querySelector('.remover')

escalando.addEventListener('click', function(){

    let nomeLista = document.querySelector('.lista')

    let nome = document.querySelector('#nome')
    let funcao = document.querySelector('#posicao')
    let camisa = document.querySelector('#numero')
 
    confirm(`deseja confirmar a escalação do jogador ${nome.value}`)

    if(confirm){
          let  ul = document.createElement('ul')
          let li = document.createElement('li')

        li.append('Nome, : ' + nome.value + '\n')
        li.append('Função, :' + funcao.value + '\n')
        li.append('N camisa, : ' + camisa.value)
        ul.appendChild(li)

        nomeLista.appendChild(ul)
        nome.value = '';
        funcao.value = '';
        camisa.value = '';
    }


    
})



removendo.addEventListener('click', function(){
    let lista = document.querySelector('.lista')

    let remove = document.querySelector('#remover').value

    confirm(`tem certeza que você quer deletaro jogador  numero : ${remove} `)

    if(confirm){
        let li = document.querySelector('li')
        li.remove(remove)
        document.querySelector('#remover').value = ''
        alert('elemento removido')
    }
})