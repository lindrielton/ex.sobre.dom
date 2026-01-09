
 function userLigththeme(){
       document.body.style.backgroundColor = '#eeebeb'
       document.body.style.color = '#1b1a1a'
 }


 function userDarkTheme(){
      document.body.style.backgroundColor = '#1b1a1a' 
      document.body.style.color = '#eeebeb' 
      
 }

 function switchTime(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
 }



 document.getElementById('ligthtBtn').addEventListener('click',userLigththeme)
 document.getElementById('darkBtn').addEventListener('click', userDarkTheme)
 document.getElementById('switcBtn').addEventListener('click', switchTime)