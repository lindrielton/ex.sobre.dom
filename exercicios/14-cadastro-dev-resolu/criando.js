
function createLabel(text, htmlFor){
  const label = document.createElement('label')
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label
}

function createInput(id, value, name, type = 'text', placeholder = ''){
  const input = document.createElement('input')
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input
}





const addTecBtn  = document.getElementById('addtechBtn')
const form =  document.getElementById('devForm')
const developers = []
let inputRows = 0

addTecBtn.addEventListener('click', function (ev){
     const stackInputs = document.getElementById('stackInputs')


     const newRow = document.createElement('li')
     const rowIndex = inputRows
     inputRows++
     newRow.id = 'inputRow-' + rowIndex
     newRow.className = 'inputRow'

     const  techNameLabel = createLabel('Nome: ' , 'techName-'  + rowIndex)
     const techNameIput = createInput('tecName-' + rowIndex, null, 'techName')


     const expLabel = createLabel(' Experiência: ')
     const ad1 = 'expRadio-' + rowIndex + '.1'
     const expRadio1 = createInput(ad1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
     const expLabel1 = createLabel('0-2 anos', ad1)

     const ad2 = 'expRadio-' + rowIndex + '.2'
     const expRadio2 = createInput(ad2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
     const expLabel2 = createLabel('3-4 anos', ad2)

     const ad3 = 'expRadio-' + rowIndex + '.3'
     const expRadio3 = createInput(ad3, '5 + anos', 'techExp-' + rowIndex, 'radio')
     const expLabel3 = createLabel('5 + anos', ad3)

     newRow.append(
      techNameLabel, techNameIput , expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3
    )

     stackInputs.append(newRow)
})