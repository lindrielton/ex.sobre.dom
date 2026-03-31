let input = document.getElementById('valordate')
let btn = document.querySelector('.enviar')
let div = document.getElementById('photho')
let dataAtual = new Date()
let anoAtual = dataAtual.getFullYear()
let masculino = document.getElementById('masculino')
let feminino = document.getElementById('feminino')


let aviso = document.createElement("p")


btn.addEventListener('click', function(){
    let image = document.createElement('img')
    image.style.width = '200px'
    image.style.height = '200px'
    image.style.marginTop = '1rem'
   
    let trasformDate = new Date(input.value)
    let anoNascimento = trasformDate.getFullYear()

    let calc = anoAtual - anoNascimento
   
    if(calc > 18 && masculino.checked){
         aviso.innerText = ' você é um homen adulto'
         image.setAttribute('src', 'img/homen-adulto.jpeg')
         div.append(aviso,image)

    }else if(calc > 18 && feminino.checked){
         aviso.innerText = ' você é uma mulher Adulta'
         image.setAttribute('src', 'img/adulta.jpg')
         div.append(aviso,image)

    }else if(calc < 11 && masculino.checked){
           aviso.innerText = ' você é uma criança do sexo masculino'
         image.setAttribute('src', 'img/criancamasculina.jpg')
         div.append(aviso,image)

    }else if(calc < 11 && feminino.checked){
           aviso.innerText = ' você é uma criança do sexo feminino'
         image.setAttribute('src', 'img/crianca,feminina.jpg')
         div.append(aviso,image)
    }else{
        aviso.innerText = 'erro: - tente novamente'
        div.appendChild(aviso)
    }

  
    
   
 
  
})