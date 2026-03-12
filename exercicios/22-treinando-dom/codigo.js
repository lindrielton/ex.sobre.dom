window.document.addEventListener('keyup', function(ev){
    console.log(ev)
})


const btn = document.querySelector("#action")


btn.addEventListener('click', function(){
    console.log(document.querySelector('#tipo').value)
    
})

