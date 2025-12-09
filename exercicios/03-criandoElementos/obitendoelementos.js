function addinput(){
   let ul = document.getElementById('inputs')

   let newli = document.createElement('li')
   newli.className = 'list-item'
   newli.innerText = 'novo-input:'

   const newinput = document.createElement('input')
   newinput.type = 'text'
   newinput.name = 'input'


   newli.appendChild(newinput)
   ul.appendChild(newli)
}